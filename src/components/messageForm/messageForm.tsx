import React, { useState } from 'react';
import styles from './messageForm.module.css'
import { FunctionComponent } from "react";
import { useWebSocket } from '../chatContainer';
import { useConversationStore } from '../../hooks/useConversations';
import MessageTextarea from '../MessageTextarea';
import useAuth from '../../hooks/useAuth';
import SendButtons from './SendButtons';
import MenuButton from './MenuButton';
import useMessageMedia from '../../hooks/useMessageMedia';
import MediaItem from './MediaItem';

const MessageForm: FunctionComponent = () => {
    return <CopieMessageForm />
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
            ws.send(JSON.stringify(datosEnviar));
            
            
        }
        message.value = "";
    };

    return (
        <form className="sender" onSubmit={handleSubmit}>
            {/* <MessageTextarea name="message" placeholder="type the answer" /> */}
        </form>
    );
}

const CopieMessageForm = () => {
    const [ message, setMessage ] = useState("")
    const files = useMessageMedia(state => state.files)
    return (
        <form className={styles.sender}>
            <div className={styles.mediaMenu}>
                { files.map(f => <MediaItem item={f} key={`${f.name}-${f.size}`} /> )}
            </div>
            <MenuButton />
            <MessageTextarea setValue={setMessage} value={message} submitForm={() => {}}/>
            <SendButtons />
        </form>
    );
}

export default MessageForm;
