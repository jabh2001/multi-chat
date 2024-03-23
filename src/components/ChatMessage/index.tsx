import { FunctionComponent } from "react";
import styles from './index.module.css'

interface ChatMessageProps {
    message: string
    typeChatMessage: 'incoming' | 'outgoing';
    image: string | null
}

const ChatMessage: FunctionComponent<ChatMessageProps> = (props: ChatMessageProps) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.message} ${props.typeChatMessage === "incoming" ? styles.incoming : styles.outgoing}`}>
                <p>
                    {props.message}

                </p>
                {props.image && (
                    <img src={`data:image/jpeg;base64,${props.image}`} alt="Message Image" />
                )}
            </div>
        </div>
    );
}

export default ChatMessage;