import { useSearchParams } from "react-router-dom"
import { useSSE } from "./useSSE"
import { useEffect, useMemo, useState } from "react"
import { ConversationType } from "../types"
import { getAllConversations } from "../service/api"
import { create } from "zustand"
import useAuth from "./useAuth"
import { transitionViewIfSupported } from "../service/general"
import { useConversationStore } from "./useConversations"

type Store = {
    conversations:ConversationType[]
    setConversation:(conversations:ConversationType[]) => void
    update:(conversationId:number, conversation:Partial<ConversationType>) => void
    fetch:(obj:{ label?:string, inbox?:string}) => Promise<void>
}
const useInnerConversationStore = create<Store>(set => {
    return ({
        conversations:[],
        setConversation: (c) => set({conversations:c}),
        update:(conversationId, conversation) => {
            set(
                state => ({ 
                    conversations:state.conversations.map(c => c.id === conversationId ? ({ ...c, ...conversation}) : ({ ...c })).sort((a, b) => new Date(b.lastMessageDate).getTime() - new Date(a.lastMessageDate).getTime())
                })
            )
        },
        fetch: async ({ label, inbox }) => {
            try {
                const conversations = await getAllConversations({ label, inbox })
                set({ conversations:conversations.sort((a, b) => new Date(b.lastMessageDate).getTime() - new Date(a.lastMessageDate).getTime())})
            } catch (e){
                return Promise.reject(e)
            }
        }
    })
})
export default function useSeparatedConversations(){
    const conversations = useInnerConversationStore(store => store.conversations)
    const update = useInnerConversationStore(store => store.update)
    const fetch = useInnerConversationStore(store => store.fetch)

    const user = useAuth(store => store.user)
    const userTeams = useAuth(store => store.teams)
    const [searchParams] = useSearchParams()

    const sse = useSSE()
    const conversation = useConversationStore(state => state.conversation)

    const [mine, setMine] = useState(new Set<number>())
    const [unassigned, setUnassigned] = useState(new Set<number>())

    const mineConversation = useMemo(() => conversations.filter(c=>mine.has(c.id)), [ mine])
    const unassignedConversation = useMemo(() => conversations.filter(c=>unassigned.has(c.id)), [ unassigned])
    

    useEffect(()=>{
        const mineSet = new Set([...mine])
        const unassignedSet = new Set([...unassigned])

        for (const conversation of conversations) {
            const isUnassigned = conversation.assignedUserId === null && conversation.assignedTeamId === null
            
            const isMineAssignment = user && conversation.assignedUserId && conversation.assignedUserId === user.id
            const isTeamAssignment = userTeams && conversation.assignedTeamId && userTeams.has(conversation.assignedTeamId)
            const isMine = isMineAssignment || isTeamAssignment

            if(isMine && !mineSet.has(conversation.id)){
                mineSet.add(conversation.id)
            } else if (!isMine &&  mineSet.has(conversation.id)){
                mineSet.delete(conversation.id)
            }
            
            if(isUnassigned && !unassignedSet.has(conversation.id)){
                unassignedSet.add(conversation.id)
            } else if( !isUnassigned && unassignedSet.has(conversation.id)) {
                unassignedSet.delete(conversation.id)
            }
        }
        transitionViewIfSupported(() => {
            setMine(mineSet)
            setUnassigned(unassignedSet)
        })
    }, [conversations])

    useEffect(() => {
        fetch({ label: searchParams.get("label") ?? undefined, inbox: searchParams.get("inbox") ?? undefined })
    }, [searchParams])

    useEffect(() => {
        if (sse) {
            const listener = sse.on("update-conversation-last-message", (data) => {
                const { conversationId, lastMessage, lastMessageDate } = data
                const messageCount = conversation?.id === conversationId ? "0" : "!"
                update(conversationId, {lastMessage, lastMessageDate, messageCount })
            })
            return () => { sse.remove("update-conversation-last-message", listener) }
        }
    }, [sse])

    return {
        conversations,
        mineConversation,
        unassignedConversation,
        update,
    }
}