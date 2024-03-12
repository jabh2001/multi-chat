import { create } from "zustand";
import { ContactType, ConversationType } from "../types";
import { useEffect, useRef } from "react";
import useChat from "./useChat";
import { getAllMessage, getSocialMedia } from "../service/api";
import { flushSync } from "react-dom";

type ConversationsStoreType = {
    conversation:ConversationType | undefined,
    setConversationId:(conversation:ConversationType) => void,
    contact:ContactType | undefined,
    setContact:(contact:ContactType) => void,
}
export const useConversationStore = create<ConversationsStoreType>(set=>({
    conversation: undefined,
    setConversationId:(conversation)=>set({ conversation }),
    contact:undefined,
    setContact:(c)=>set({  contact: c })
}))

export const useConversation = ()=>{
  const conversation = useConversationStore(state => state.conversation)
  const setContact = useConversationStore(state => state.setContact)
  const contact = useConversationStore(state => state.contact)
  const { messages, setMessages, pushMessages, insertMessages} = useChat({ key:["chat", conversation?.id ?? 0, contact?.id ?? 0]})
  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=>{
      if(conversation && contact){
          getAllMessage(conversation.inbox.id, conversation.id).then(setMessages)
          getSocialMedia(conversation.contact.id).then(socialMedia =>setContact({...contact, socialMedia}))
      }
  }, [conversation])

  useEffect(()=>{
    if(ref.current){
      ref.current.scroll(0, ref.current.scrollHeight)
    }
  }, [messages])

  const handleAddMessage = (msg:string)=>{
    document.startViewTransition(()=>{
      flushSync(()=>{
        const last = messages[messages.length -1]
        pushMessages({ ...last, id:last.id+1, content:msg, messageType:messages.length%2==1?"incoming":"outgoing"})
      })
    })
  }
  return {
    handleAddMessage,
    messages,
    ref,
    pushMessages,
    insertMessages
  }
}