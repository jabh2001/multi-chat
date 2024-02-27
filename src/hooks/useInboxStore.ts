import { create } from "zustand"
import { InboxType } from "../types"


type InboxStoreType = {
    inboxes: InboxType[]
    setInboxes: (inboxes: InboxType[]) => void
    addInbox:(inbox: InboxType) => void
    deleteInbox:(id:InboxType["id"]) => void
    updateInbox:(inbox:InboxType) => void
}

const useInboxStore = create<InboxStoreType>((set) =>({
    inboxes: [],
    setInboxes : (inboxes)=>set(()=>({ inboxes})),
    addInbox:(inbox) => set(state => ({ inboxes:[...state.inboxes, inbox]})),
    deleteInbox: (id) => set((state) => ({ inboxes: state.inboxes.filter((inbox) => inbox.id !== id) })),
    updateInbox: (data) =>
        set((state) => ({
            inboxes: state.inboxes.map((inbox) =>
                inbox.id === data.id ? data : inbox
            ),
        })),
}))

export default useInboxStore