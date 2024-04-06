import { forwardRef } from "react";
import styles from './index.module.css'
import { MessageType } from "../../types";
import GalleryImage from "../GalleryImage/GalleryImage";
import ChatAudioPlayer from "../ChatAudioPlayer";

interface ChatMessageProps {
    message: MessageType
}

const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>((props: ChatMessageProps, ref) => {
    return (
        <div className={styles.container} ref={ref} id={`message-${props.message.id}`}>
            <div className={`${styles.message} ${props.message.messageType === "incoming" ? styles.incoming : styles.outgoing}`}>


                {props.message.buffer && props.message.contentType === 'imageMessage' && (
                    <>
                        <GalleryImage src={`data:image/jpeg;base64,${props.message.buffer}`} alt="Message Image" />
                        <p>{props.message.content}</p>
                    </>
                )}
                {props.message.buffer && props.message.contentType === 'audioMessage' && (
                    <ChatAudioPlayer msg={props.message} />
                )}
                {props.message.contentType == "text" && props.message.content !== 'undefined' && (
                    <p>{props.message.content}</p>
                )}
            </div>
        </div>
    );
})

export default ChatMessage;