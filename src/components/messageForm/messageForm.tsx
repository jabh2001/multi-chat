import React from 'react';
import './messageForm.css'
import { FunctionComponent } from "react";
import { useWebSocket } from '../chatContainer';
import { useConversationStore } from '../../hooks/useConversations';

const MessageForm: FunctionComponent<{ addMessage: (message: string) => void }> = ({ addMessage }) => {
    const ws = useWebSocket();
    const conversationId = useConversationStore(store => store.conversation)?.id
    const sender = useConversationStore(store => store.conversation)?.contact
    const inbox = useConversationStore(store => store.conversation)?.inbox
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        const { message } = e.target as any;
        const messageContent = message.value;

        if (ws && ws.readyState === WebSocket.OPEN) {
            const datosEnviar = {
                conversationId,
                sender,
                messageType: 'outgoing',
                message: messageContent,
                inbox: inbox?.name
            }
            console.log(datosEnviar)
            ws.send(JSON.stringify(datosEnviar));
        }

        addMessage(messageContent);
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
