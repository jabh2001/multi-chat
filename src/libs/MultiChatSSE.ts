import { AgentType, ContactType, ConversationType, InboxType, LabelType, TeamType } from "../types"

const sseURL = import.meta.env.VITE_SSE_URL

export class MultiChatSSE extends EventSource {
    constructor(){
        super(sseURL, { withCredentials:true })
    }

    on<EventName extends MultiChatEventName>(name:EventName, listener: (data:MultiChatEventMap[EventName]) => any){
        this.addEventListener(name, ({ data }) => listener(JSON.parse(data)))
        return listener
    }

    remove<EventName extends MultiChatEventName>(name:EventName, listener: (data: any) => void){
        return this.removeEventListener(name, listener)
    }

}

export type MultiChatEventMap = {
    "insert-agent":AgentType,
    "update-agent":Partial<AgentType> & {id:AgentType["id"]},
    "delete-agent":AgentType["id"][],
    "insert-contact":ContactType,
    "update-contact":Partial<ContactType> & {id:ContactType["id"]},
    "delete-contact":ContactType["id"][],
    "insert-team":TeamType,
    "update-team":Partial<TeamType> & {id:TeamType["id"]},
    "delete-team":TeamType["id"][],
    "insert-label":LabelType,
    "update-label":Partial<LabelType> & {id:LabelType["id"]},
    "delete-label":LabelType["id"][],
    "insert-inbox":InboxType,
    "update-inbox":Partial<InboxType> & {id:InboxType["id"]},
    "delete-inbox":InboxType["id"][],
    "insert-conversation":ConversationType,
    "update-conversation":Partial<ConversationType> & {id:ConversationType["id"]},
    "delete-conversation":ConversationType["id"][],
    "update-conversation-last-message":{ conversationId:ConversationType["id"], lastMessage:string, lastMessageDate:string},
    "qr-update":{name:string, user:any | false, qr:string},
    "close":undefined,
} & { 
    [key in `qr-${number}` | `qr-update-${number}`]: {name:string, user:any | false, qr:string};
}& { 
    [key in `qr-${string}-${boolean}`]: {};
};

export type MultiChatEventName=keyof MultiChatEventMap