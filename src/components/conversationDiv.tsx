import '../styles/conversationDiv.css'

import { InboxCategory } from "./inboxCategory.tsx";
import { SearchInbox } from "./searchInbox.tsx";
import { DeployBar } from "./deployBar.tsx";
import { ConversationTitle } from './conversationTitle.tsx';
export const ContactDive: React.FC = () => {
    return (
        <div className='contenedorConversation'>

            <SearchInbox></SearchInbox>
            <ConversationTitle/>
            <DeployBar></DeployBar>
            <InboxCategory></InboxCategory>
        </div>
    );
}
