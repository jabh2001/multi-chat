import { FunctionComponent } from "react";
import styles from './index.module.css'
import { MessageType } from "../../types";

interface ChatMessageProps {
    message: MessageType
}

const ChatMessage: FunctionComponent<ChatMessageProps> = (props: ChatMessageProps) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.message} ${props.message.messageType === "incoming" ? styles.incoming : styles.outgoing}`}>

                {props.message.content !== 'undefined' && (
                    <p>{props.message.content}</p>
                )}

                {props.message.buffer && props.message.contentType === 'imageMessage' && (
                    <img src={`data:image/jpeg;base64,${props.message.buffer}`} alt="Message Image" />
                )}
            </div>
        </div>
    );
}

export default ChatMessage;