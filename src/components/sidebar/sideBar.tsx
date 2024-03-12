import { FC } from 'react'
import './sideBar.css'
import Label, { NewLabel } from '../label/label'
import { ContactType } from '../../types'
import ContactCard from '../cards/ContactCard'
import { useConversationStore } from '../../hooks/useConversations'
interface sideBarProps {
    contact?: ContactType
}
export const SideBar: FC<sideBarProps> = () => {
    const contact = useConversationStore(state => state.contact)
    return <div className='sideBar'>
        <ContactCard contact={contact} />
        <div className="buttons">
            <div id='message' className='actionButton'>
                a1
            </div>
            <div id='edit' className='actionButton'>
                a2
            </div>
            <div id="hide" className='actionButton'>
                a3
            </div>
            <div id="delete" className='actionButton'>
                a4
            </div>

        </div>
        <div className="actions">
            <p>Conversation actions</p>
        </div>
        {/* estos serán selectores */}
        <div className="agentInfo">
            <div className="asigned">

                <h4>
                    Angent Asigned
                </h4>
                <div className='agentName'>
                    <div className='identificador'>
                        h1
                    </div>
                    <p>Nombre</p></div>
            </div>

            <div className="asigned">
                <h4>
                    Team Asigned
                </h4>
                <div className='agentName'>
                    <div className='identificador'>
                        h2
                    </div>
                    <p>Nombre</p></div>
            </div>
            <div className="asigned">
                <h4>
                    priority
                </h4>

                <div className='agentName'>
                    <div className='identificador'>
                        h3
                    </div>
                    <p>Nombre</p></div>
            </div>
        </div>
        {/* hasta aquí */}
        <div>
            <NewLabel />
            <Label></Label>

        </div>
    </div>
}