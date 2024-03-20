import React from 'react';
import './messageForm.css'
import { FunctionComponent } from "react";
import { useWebSocket } from '../chatContainer';
import { useConversationStore } from '../../hooks/useConversations';
import { MessageType } from '../../types';

const MessageForm: FunctionComponent<{ addMessage: (message: MessageType) => void }> = ({ addMessage }) => {
    const ws = useWebSocket();
    const conversationId = useConversationStore(store => store.conversation)?.id
    const sender = useConversationStore(store => store.conversation)?.contact
    const inbox = useConversationStore(store => store.conversation)?.inbox
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        const { message } = e.target as any;
        const messageContent = message.value;
        const datosEnviar = {
            conversationId,
            sender,
            messageType: 'outgoing',
            message: messageContent,
            inbox: inbox?.name
        }

        if (ws && ws.readyState === WebSocket.OPEN) {
            console.log({datosEnviar})
            ws.send(JSON.stringify(datosEnviar));
            
            
        }

        addMessage({ id:Math.round(Math.random() * 10000), content:messageContent, contentType:"text", private:true, messageType:"outgoing", created_at:new Date()});
        message.value = "";
    };

    return (
        <form className="sender" onSubmit={handleSubmit}>
            <div className="replay">
                <textarea name="message" placeholder="type the answer" />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default MessageForm;
