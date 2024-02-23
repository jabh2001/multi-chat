import './inboxDiv.css'

import { InboxCategory } from "../inboxCategory/inboxCategory.tsx";
import { SearchInbox } from "../searchInbox/searchInbox.tsx";
import { DeployBar } from "../deployBar/deployBar.tsx";
import { ConversationTitle } from '../conversationTitle/conversationTitle.tsx';
export const InboxDive: React.FC = () => {
    return (
        <div className='contenedorConversation'>

            <SearchInbox></SearchInbox>
            <ConversationTitle/>
            <DeployBar></DeployBar>
            <InboxCategory></InboxCategory>
        </div>
    );
}
