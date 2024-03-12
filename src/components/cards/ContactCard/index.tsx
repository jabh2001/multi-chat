import styles from "./index.module.css"
import CircleAvatar from "../../../components/avatar/CircleAvatar";
import SocialMediaDisplay from "../../../components/SocialMediaDisplay";
import { ContactType } from "../../../types";

export default function ContactCard({ contact }:{ contact?:ContactType }){
    return (
        <div className={styles.container}>
            <div className={styles.avatarContainer}>
                <CircleAvatar src={`https://ui-avatars.com/api/?name=${contact?.name.replace(" ", "+") ?? "private"}`} alt={contact?.email ?? ""} size="full" />
            </div>
            <div className={styles.contactData}>
                <h3 className={styles.contactName}>{contact?.name}</h3>
                <div>{contact?.email}</div>
                <div>{contact?.phoneNumber}</div>
            </div>
            <div className={styles.socialMedia}>
                {
                    contact?.socialMedia?.map(el => <SocialMediaDisplay socialMedia={el} /> )
                }
            </div>
        </div>
    )
}