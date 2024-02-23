import { FC } from 'react'
import './sideBar.css'
import Avatar from '../avatar/avatar'
import Label, { NewLabel } from '../label/label'
import { SocialMediaButtons } from '../socialMediaButton/socialMediaButton'
interface sideBarProps {
    avatar: string
    contact: string
    description: string
    phoneNumber: string
    email: string

}
export const SideBar: FC<sideBarProps> = (props: sideBarProps) => {
    const { avatar, contact, description, email, phoneNumber } = props
    return <div className='sideBar'>

        <div className='avatarSideBar'>
            <Avatar svgData={avatar} />

        </div>
        <div className='info'>
            <p>{contact}</p>
            <p>{description}</p>
            <SocialMediaButtons logo='<path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/> ' />
            <p>{email}</p>
            <p>{phoneNumber}</p>
        </div>
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
        <NewLabel/>
            <Label></Label>
        
        </div>
    </div>
}