import { useEffect, useState } from "react";
import { TabsSlider, Tab as TabView } from "../TabsSlider";
import { ConversationType } from "../../types";
import { getAllConversations } from "../../service/api";
import ChatCard from "../chatCard/chatCard";
import style from "./index.module.css"
import { useConversationStore } from "../../hooks/useConversations";

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
    const setConversationId = useConversationStore(state => state.setConversationId)
    const setContact = useConversationStore(state => state.setContact)
    const [ conversations, setConversations] = useState<ConversationType[]>([])
    useEffect(()=>{
        getAllConversations().then(setConversations)
    }, [])
    const handleClick = (conversation:ConversationType)=>{
        setConversationId(conversation)
        setContact(conversation.contact)
    }
    return (
        <>
        {
            [...conversations].map((c)=>(
                <ChatCard 
                    key={`chat_all_${c.id}`}
                    inboxName={c.inbox.name}
                    contactName={c.contact.name}
                    shortMessage=" Lorem ipsum dolor sit amet consectetur "
                    avatarUrl={`https://ui-avatars.com/api/?name=${c.contact.name.replace(" ", "+")}`}
                    onClick={()=>handleClick(c)}
                />
            ))
        }
        </>
    )
}