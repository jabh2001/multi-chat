import style from "./chatCard.module.css"
import CircleAvatar from "../avatar/CircleAvatar";

interface CardProps {
    avatarUrl: string,
    inboxName: string,
    contactName: string
    shortMessage: string
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}

const ChatCard: React.FC<CardProps> = (props) => {
    const { inboxName, contactName, shortMessage, avatarUrl, onClick } = props;

    return (
        <button className={style.card} onClick={onClick}>
            <CircleAvatar src={avatarUrl} alt={contactName} />
            <div className={style.info}>
                <p className={style.inboxName}> {inboxName}</p>
                <p className={style.contactName}>{contactName}</p>
                <p className={style.shortMessage}>{shortMessage.slice(0, 30)} {shortMessage.length > 30  ? '...' : ''}</p>
            </div>
        </button>
    );
};

export default ChatCard;