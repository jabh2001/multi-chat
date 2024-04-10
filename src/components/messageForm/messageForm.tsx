import React from 'react';
import './messageForm.css'
import { FunctionComponent } from "react";
import { useWebSocket } from '../chatContainer';
import { useConversationStore } from '../../hooks/useConversations';
import MessageTextarea from '../MessageTextarea';
import useAuth from '../../hooks/useAuth';

const MessageForm: FunctionComponent = () => {
    const ws = useWebSocket();
    const conversationId = useConversationStore(store => store.conversation)?.id
    const user = useAuth(state => state.user)
    const contact = useConversationStore(store => store.conversation?.contact)
    const inbox = useConversationStore(store => store.conversation)?.inbox
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        const { message } = e.target as any;
        const messageContent = message.value;
        const datosEnviar = {
            conversationId,
            contact,
            user,
            sender:user?.id || "",
            messageType: 'outgoing',
            message: messageContent,
            inbox: inbox?.name
        }

        if (ws && ws.readyState === WebSocket.OPEN) {
            console.log({datosEnviar})
            ws.send(JSON.stringify(datosEnviar));
            
            
        }
        message.value = "";
    };

    return (
        <form className="sender" onSubmit={handleSubmit}>
            <MessageTextarea name="message" placeholder="type the answer" />
        </form>
    );
}

export default MessageForm;
