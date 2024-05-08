import { create } from "zustand"
import { FastMessageType } from "../libs/schemas";
import { useEffect } from "react";
import { deleteFastMessage, getFastMessages, postFastMessage, putFastMessage } from "../service/api";
import { useSSE } from "./useSSE";
const falseData = [
    {
        id:1, 
        title:"rapido", 
        keyWords:"feroz,audaz", 
        adminId:1, 
        fastMediaMessages:[
            {id:1, order:1, text:"hola", messageType:"text", fastMessageId:1, base64:""},
            {id:2, order:2, text:"Como estas tu?", messageType:"text", fastMessageId:1, base64:""},
            {id:3, order:3, text:"quiero contarte algo", messageType:"text", fastMessageId:1, base64:""},
    ]}
]
type FastMessageStoreState = {
    fastMessages: FastMessageType[]
    setFastMessages: (fastMessages: FastMessageType[]) => void
    addFastMessage: (fastMessage: FastMessageType) => void
    deleteFastMessage: (id: number) => void
    editFastMessage: (id: number, newFastMessageData: Partial<FastMessageType>) => void
}
const useFastMessageStore = create<FastMessageStoreState>((set) =>({
    fastMessages:[],
    setFastMessages: (fastMessages) => set({ fastMessages:[...falseData, ...fastMessages] }),
    addFastMessage: (fastMessage) => set((state) => ({ fastMessages: [...state.fastMessages, fastMessage] })),
    deleteFastMessage: (id) => set((state) => ({ fastMessages: state.fastMessages.filter((fastMessage) => fastMessage.id !== id) })),
    editFastMessage: (id, newFastMessageData) =>
        set((state) => ({
            fastMessages: state.fastMessages.map((fastMessage) =>
                fastMessage.id === id ? { ...fastMessage, ...newFastMessageData } : fastMessage
            ),
        })),
}))

const useFastMessage = () => {
    const multiChatSSE = useSSE()
    const store = useFastMessageStore()
    const { fastMessages } = store

    useEffect(()=>{
        const getData = async () => {
            const fastMessages = await getFastMessages()
            store.setFastMessages(fastMessages as any)
        }
        getData()
    }, [])
    useEffect(()=>{
        if(multiChatSSE){
            // const insertListener = multiChatSSE.on("insert-fastMessage", fastMessage => store.addFastMessage(fastMessage as any))
            // const updateListener = multiChatSSE.on("update-fastMessage", fastMessage => store.editFastMessage(fastMessage?.id, fastMessage))
            // const deleteListener = multiChatSSE.on("delete-fastMessage", ids => ids.forEach(id => store.deleteFastMessage(id)))

            return () => {
                // multiChatSSE.remove("insert-fastMessage", insertListener)
                // multiChatSSE.remove("update-fastMessage", updateListener)
                // multiChatSSE.remove("delete-fastMessage", deleteListener)
            }
        }
    }, [multiChatSSE])


    return {
        fastMessages,
        addFastMessage: async(newFastMessage:Omit<FastMessageType, "id">) => {
            const provId = -2
            store.addFastMessage({...newFastMessage, id:provId})
            try{
                const fastMessage = await postFastMessage(newFastMessage)
                store.editFastMessage(provId, fastMessage)
            } catch(e){
                store.deleteFastMessage(provId)
                throw e
            }
        },
        editFastMessage: async(id:FastMessageType["id"], newData:Partial<FastMessageType>) => {
            const fastMessage = await putFastMessage(id, newData)
            store.editFastMessage(id, fastMessage)
        },
        deleteFastMessage: async(id:FastMessageType["id"]) => {
            await deleteFastMessage(id)
            store.deleteFastMessage(id)
        }
    }
}

export { useFastMessageStore, useFastMessage }