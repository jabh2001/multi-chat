import { useEffect } from "react";
import { MessageType } from "../../types";
import ChatMessage from "../ChatMessage";
import { useWebSocket } from '../chatContainer';


export default function MessageList({ messages, addMessage }:{ messages:MessageType[], addMessage:(msg:MessageType) => void}){
    const ws= useWebSocket()
    useEffect(()=>{
        if (ws) {
            const receiptMessage = ({ data }:MessageEvent<any>)=>{
                let message = JSON.parse(data);
                console.log({ message})
                addMessage(message)
            }
            ws.onmessage = receiptMessage
            return () => {ws.onmessage = null}
        }
    }, [ws])
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