import Avatar from "../avatar/avatar";
import { TextButton } from "../textButton/textButton";
import './contactHeader.css'

interface ContactHeaderProps {
    contactName: string;
    avatar: string;
    inboxName: string;
}

export default function ContactHeader(props: ContactHeaderProps) {
    const { contactName, avatar, inboxName } = props
    return <div className="contactHeader">
        <div className="headerContainer">
            <div className="avatarHeader">

                <Avatar svgData={avatar} />
            </div>
            <div className="headerInfo">
                <h3>{contactName}</h3>
                <div className="inboxName">

                    <p>{inboxName}</p>

                </div>
            </div>

        </div>
        <div className="textButtons">

            <TextButton text="Mesagges" isActive="true" />
            <TextButton text="Dashboard" isActive="false" />
        </div>

    </div>
}