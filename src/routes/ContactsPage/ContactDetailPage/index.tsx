import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactType } from "../../../types";
import { getContactById } from "../../../service/api";
import styles from "./index.module.css"
import PrevPageButton from "../../../components/button/PrevPageButton";
import CircleAvatar from "../../../components/avatar/CircleAvatar";
import SocialMediaDisplay from "../../../components/SocialMediaDisplay";
import { TabsSlider, Tab } from "../../../components/TabsSlider";
import ContactEditForm from "../../../components/form/ContactForm";

export default function ContactDetailPage(){
    const [ page, setPage ] = useState(1)
    const { contactId } = useParams() as { contactId:string};
    const [contactInfo, setContactInfo] = useState<ContactType>()

    useEffect(()=>{
        const getData = async ()=>{
            const contact = await getContactById(Number(contactId))
            document.title = `Contact - ${contact.name}`
            setContactInfo(contact)
        }
        const prevTitle = document.title
        getData()
        return () => {
            document.title = prevTitle
        }
    }, [contactId])

    if(!contactInfo){
        return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <PrevPageButton title="Contacts" />
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.avatarContainer}>
                    <CircleAvatar src={contactInfo.avatarUrl} alt={contactInfo.email} size="full" />
                </div>
                <div className={styles.contactData}>
                    <h3 className={styles.contactName}>{contactInfo.name}</h3>
                    <div>{contactInfo.email}</div>
                    <div>{contactInfo.phoneNumber}</div>
                </div>
                <div className={styles.socialMedia}>
                    {
                        contactInfo.socialMedia.map(el => <SocialMediaDisplay socialMedia={el} /> )
                    }
                </div>
                <div className={styles.changeTabsButton}>
                    <button onClick={() => setPage(1)}><span>Edit Data</span><span>&gt;</span></button>
                    <button onClick={() => setPage(2)}><span>Set Social Media</span><span>&gt;</span></button>
                    <button onClick={() => setPage(3)}><span>Set Labels </span><span>&gt;</span></button>
                </div>
            </div>
            <div className={styles.tabs}>
                <TabsSlider page={page}>
                    <Tab>
                        <ContactEditForm edited={contactInfo} onEdit={(contact) => setContactInfo(contact) } />
                    </Tab>
                    <Tab>

                    </Tab>
                    <Tab>
                        <button onClick={()=> alert("Felicidades si funciona")}>3</button>
                    </Tab>
                </TabsSlider>
            </div>
        </div>
    )
}