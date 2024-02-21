import { ConversationDiv } from '../../components/conversationDiv'
import { InboxDive } from '../../components/inboxDiv'
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