import { InboxDive } from '../../components/inboxDiv/inboxDiv'
import styles from './index.module.css'
import ContactHeader from '../../components/contactHeader/contactHeader'
import MessageForm from '../../components/messageForm/messageForm'
import { SideBar } from '../../components/sidebar/sideBar'
import { useConversation } from '../../hooks/useConversations'
import MessageList from '../../components/MessageList'

function ConversationsPage() {
  const {handleAddMessage, pushMessages, insertMessages, messages, ref} = useConversation()
  
  return (
    <div className={styles.landing}>
      <InboxDive/>
      <div className={styles.chatContainer}>
          <ContactHeader />
          <div className={styles.layout} ref={ref}>
            <MessageList messages={messages} />
          </div>
          <MessageForm addMessage={handleAddMessage}/>
      </div >
      <div>
        <SideBar />
      </div>
    </div>
  )
}

export default ConversationsPage