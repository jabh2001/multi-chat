import { useEffect, useState } from "react";
import { TabsSlider, Tab as TabView } from "../TabsSlider";
import { ConversationType } from "../../types";
import { getAllConversations } from "../../service/api";
import ChatCard from "../chatCard/chatCard";
import style from "./index.module.css"
import { useConversationStore } from "../../hooks/useConversations";
import { useSSE } from "../../hooks/useSSE";
import { flushSync } from "react-dom";

export default function ChatsDiv({ tab }:{ tab:number }){
    return (
        <div className={style.chatsContainer}> 
            <div className={style.conversationsContainer}>

                <TabsSlider page={tab}>
                    <TabView>
                        <div className={style.conversationsSectionContainer}>
                            <ChatMine />
                        </div>
                    </TabView>
                    <TabView>
                        <div className={style.conversationsSectionContainer}>
                            <ChatUnassigned />
                        </div>
                    </TabView>
                    <TabView>
                        <div className={style.conversationsSectionContainer}>
                            <ChatAll />
                        </div>
                    </TabView>
                </TabsSlider>
            </div>
        </div>
    )
}

function ChatMine(){
    return (
        <div>
            chat mine
        </div>
    )
}
function ChatUnassigned(){
    return (
        <div>
            chat unassigned
        </div>
    )
}
function ChatAll(){
    const sse = useSSE()

    const setConversationId = useConversationStore(state => state.setConversationId)
    const setContact = useConversationStore(state => state.setContact)
    const [ conversations, setConversations] = useState<ConversationType[]>([])

    useEffect(()=>{
        getAllConversations().then(setConversations)
    }, [])

    useEffect(()=>{
        if(sse){
            const listener = sse.on("update-conversation-last-message", (data) => {
                const { conversationId, lastMessage, lastMessageDate } = data
                document.startViewTransition(() => {
                  flushSync(() => {
                    setConversations(conversations => conversations.map(c => c.id === conversationId ? {...c, lastMessage, lastMessageDate}:{...c}))
                  })
                })
            })
            return ()=> { sse.remove("update-conversation-last-message", listener)}
        }
    }, [sse])
    
    const handleClick = (conversation:ConversationType)=>{
        setConversationId(conversation)
        setContact(conversation.contact)
    }

    return (
        <>
        {
            conversations.sort((a, b)=> new Date(b.lastMessageDate).getTime() - new Date(a.lastMessageDate).getTime()).map((c)=>(
                <ChatCard 
                    key={`chat_all_${c.id}`}
                    viewTransitionName={`chat-card-${c.id}`}
                    inboxName={c.inbox.name}
                    contactName={c.contact.name}
                    shortMessage={c.lastMessage}
                    avatarUrl={`https://ui-avatars.com/api/?name=${c.contact.name.replace(" ", "+")}`}
                    onClick={()=>handleClick(c)}
                />
            ))
        }
        </>
    )
}