import { FC } from "react"
import ContactHeader from "./contactHeader"
import { ChatLayout } from "./chatLayout"
import '../styles/conversationDiv.css'
import { SideBar } from "./sideBar"

export const ConversationDiv: FC = () => {
    return (
        <div style={{ display: 'flex', width: '100%'}}>

            <div className="chatContainer">

                <ContactHeader contactName="contacto" avatar='<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />' inboxName="inbox name" />
                <ChatLayout />
            </div >
            <SideBar avatar='<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />' contact="ejemplo" description="CEO en no se donde" email="xxxx@xx.com" phoneNumber="xxxxxxx" />
        </div>
    )
}