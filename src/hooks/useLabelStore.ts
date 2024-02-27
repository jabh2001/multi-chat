import { create } from "zustand"
import { LabelType } from "../types"
import { useEffect } from "react"
import { deleteLabel, getLabels, postLabel, putLabel } from "../service/api"


type LabelStoreType = {
    firstFetch:boolean,
    labels: LabelType[]
    setLabels: (labels: LabelType[]) => void
    addLabel:(label: LabelType) => void
    updateLabel:(id:LabelType["id"], newData:Partial<LabelType>) => void
    deleteLabel:(id:LabelType["id"]) => void
}

const useLabelStore = create<LabelStoreType>((set) =>({
    firstFetch:true,
    labels: [],
    setLabels : (labels)=>set(()=>({ labels, firstFetch:false})),
    addLabel:(label) => set(state => ({ labels:[...state.labels, label]})),
    updateLabel:(id,newData)=>set(state => ({...state, labels:state.labels.map(l => l.id === id ? { ...l , ...newData} : {...l})})),
    deleteLabel: (id) => set((state) => ({ labels: state.labels.filter((labels) => labels.id !== id) })),
}))

const useLabel = () => {
    const store = useLabelStore()
    const {firstFetch, labels} = store

    useEffect(()=>{
        if(firstFetch){
            const getData = async () => {
                const labels = await getLabels()
                store.setLabels(labels)
            }
            getData()
        }
    }, [])


    return {
        labels,
        addLabel: async(newLabel:Omit<LabelType, "id">) => {
            const provId = -2
            store.addLabel({...newLabel, id:provId})
            try{
                const label = await postLabel(newLabel)
                store.updateLabel(provId, label)
            } catch(e){
                store.deleteLabel(provId)
                throw e
            }
        },
        editLabel: async(id:LabelType["id"], newData:Partial<LabelType>) => {
            const label = await putLabel(id, newData)
            store.updateLabel(id, label)
        },
        deleteLabel: async(id:LabelType["id"]) => {
            await deleteLabel(id)
            store.deleteLabel(id)
        }
    }
}

export default useLabelStore
export {
    useLabelStore,
    useLabel,
}