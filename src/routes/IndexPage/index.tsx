import { ConversationDiv } from '../../components/conversationDiv/conversationDiv'
import { InboxDive } from '../../components/inboxDiv/inboxDiv'
import './index.css'

function IndexPage() {

  return (
    <div className='landing'>
      <InboxDive/>
      <ConversationDiv />
    </div>
  )
}

export default IndexPage