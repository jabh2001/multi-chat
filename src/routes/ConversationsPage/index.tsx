import { useLocation } from 'react-router-dom'
import { ConversationDiv } from '../../components/conversationDiv'
import { InboxDive } from '../../components/inboxDiv'
import './index.css'
import { useEffect } from 'react'

function ConversationsPage() {
  const { search } = useLocation()
  useEffect(()=>{
    console.log(search);
    
  }, [])
  return (
    <div className={`landing`}>

      <InboxDive/>
      <ConversationDiv />
    </div>
  )
}

export default ConversationsPage