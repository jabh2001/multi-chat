import styles from './inboxDiv.module.css'
import { Tabs, Tab } from "../Tab";
import { SearchInbox } from "../searchInbox/searchInbox.tsx";
import ChatsDiv from '../ChatsDiv/index.tsx';
import { useState } from 'react';

export const InboxDive: React.FC = () => {
    const [tab, setTab] = useState(1)
    return (
        <div className={styles.contenedorConversation}>
            <SearchInbox></SearchInbox>
            <h2>Conversations</h2>
            <div>
                <Tabs value={tab} setValue={setTab}>
                    <Tab name="mine" value={1} notifications={4} />
                    <Tab name="unassigned" value={2} />
                    <Tab name="all" value={3} notifications={4} />
                </Tabs>
            </div>
            <ChatsDiv tab={tab} />
        </div>
    );
}
