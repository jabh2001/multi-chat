import { MessageType } from "../../types";
import ChatMessage from "../ChatMessage";
import { useWebSocket } from '../chatContainer';


export default function MessageList({ messages }:{ messages:MessageType[]}){
    const ws= useWebSocket()
    if(ws){
        ws.onmessage=(m)=>{
            console.log(m)
        }
    }
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