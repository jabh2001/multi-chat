import { useState } from "react";
import { Tab, Tabs } from "../Tab";
import styles from './contactHeader.module.css'
import { useConversationStore } from "../../hooks/useConversations";


export default function ContactHeader() {
    const contact = useConversationStore(state => state.contact)
    const [ tab, setTab] = useState(1)
    return <div className={styles.contactHeader}>
        <div className={styles.headerContainer}>
            <div className={styles.headerInfo}>
                <h3>{contact?.name}</h3>
                <div className={styles.inboxName}>

                    <p>inbox name</p>

                </div>
            </div>

        </div>
        <Tabs value={tab} setValue={setTab}>
            <Tab name="message" value={1} notifications={4} />
            <Tab name="dashboard" value={2} />
        </Tabs>
    </div>
}