import { MessageType } from "../../types";
import ChatMessage from "../ChatMessage";

export default function MessageList({ messages }:{ messages:MessageType[]}){
    return (
        <section style={{ width:"100%"}}>
            {
                messages.map(m =>(
                    <ChatMessage key={`msg_${m.id}`} message={m.content} typeChatMessage={m.messageType} />
                ))
            }
        </section>
    )
}