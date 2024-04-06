import { RefObject, useEffect } from "react";
import { MessageType } from "../../types";
import ChatMessage from "../ChatMessage";
import { useWebSocket } from '../chatContainer';
import LoadingMoreMessage from "../ChatMessage/LoadingMoreMessage";

type Props = {
    messages:MessageType[]
    addMessage:(msg:MessageType) => void
    rootRef:RefObject<HTMLDivElement>
    observeRef:RefObject<HTMLDivElement>
    fetchMoreMessage?:() => void
    isLoading?:boolean
    isComplete?:boolean
}

export default function MessageList({ messages, addMessage, rootRef, observeRef, fetchMoreMessage, isLoading, isComplete }:Props){
    const ws= useWebSocket()
    useEffect(()=>{
        if (ws) {
            const receiptMessage = ({ data }:MessageEvent<any>)=>{
                const message = JSON.parse(data);
                addMessage(message)
            }
            ws.onmessage = receiptMessage
            return () => {ws.onmessage = null}
        }
    }, [ws])
    useEffect(()=>{
        if(rootRef.current && observeRef.current){
            const options:IntersectionObserverInit = { root:rootRef.current, rootMargin: '100px'}
            const observer = new IntersectionObserver((entries)=>{
                const loader = entries[0]
                if(loader.isIntersecting && !isLoading){
                    fetchMoreMessage && fetchMoreMessage()
                }
            }, options)

            observer.observe(observeRef.current)

            return () => { 
                observer.disconnect()
            }
        }
    }, [messages])
    return (
        <section style={{ width:"100%", display:"flex", flexDirection:"column-reverse"}}>
            {
                messages.map( (m, i)=>(
                    <ChatMessage key={`msg_${m.id}`} message={m} ref={i === messages.length-1 ? observeRef : undefined}/>
                ))
            }
            { isLoading && !isComplete && <LoadingMoreMessage /> }
        </section>
    )
}
