/* eslint-disable react-refresh/only-export-components */
import { useConversation, useConversationStore } from "../../hooks/useConversations";
import styles from './index.module.css'
import MessageList from "../MessageList";
import ContactHeader from "../contactHeader/contactHeader";
import MessageForm from "../messageForm/messageForm";
import { createContext, useState, useEffect, useContext } from "react";

const WebSocketContext = createContext<WebSocket | undefined>(undefined);
function ChatContainer() {
    const { handleAddMessage, messages, ref } = useConversation();
    const conversation = useConversationStore(state => state.conversation);
    const [ws, setWs] = useState<WebSocket | undefined>(undefined);

    useEffect(() => {
        console.log(conversation)
        if (conversation) {
            console.log(conversation)
            const newWs = new WebSocket('ws://localhost:3000/ws/conversation/' + conversation.id);
            setWs(newWs);

            return () => {
                newWs.close();
            };
        }
    }, [conversation]);

    return (
        <WebSocketContext.Provider value={ws}>
            <ContactHeader />
            <div className={styles.layout} ref={ref}>
                <MessageList messages={messages} />
            </div>
            <MessageForm addMessage={handleAddMessage} />
        </WebSocketContext.Provider>
    );
}
export function useWebSocket() {
    return useContext(WebSocketContext);
}

export default ChatContainer