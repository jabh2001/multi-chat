import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactType, LabelType } from "../../../types";
import { getContactById, getContactLabel, getSocialMedia } from "../../../service/api";
import styles from "./index.module.css"
import PrevPageButton from "../../../components/button/PrevPageButton";
import CircleAvatar from "../../../components/avatar/CircleAvatar";
import SocialMediaDisplay from "../../../components/SocialMediaDisplay";
import { TabsSlider, Tab } from "../../../components/TabsSlider";
import ContactEditForm from "../../../components/form/ContactForm";
import SocialMediaForm from "../../../components/form/SocialMediaForm";
import ContactLabelForm from "../../../components/form/ContactLabelForm";

export default function ContactDetailPage(){
    const [ page, setPage ] = useState(1)
    const { contactId } = useParams() as { contactId:string};
    const [contactInfo, setContactInfo] = useState<ContactType>()

    useEffect(()=>{
        const getData = async ()=>{
            const retContact = getContactById(Number(contactId))
            const retSocialMedia = getSocialMedia(Number(contactId));
            const retLabels = getContactLabel(Number(contactId));
            const [contact, socialMedia, labels] = await Promise.all([ retContact, retSocialMedia, retLabels])
            document.title = `Contact - ${contact.name}`
            setContactInfo({...contact, socialMedia, labels})
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
                        <div className={styles.SocialMediaFormContainer}>
                            {
                                contactInfo.socialMedia?.map(sm => (
                                    <SocialMediaForm
                                        edited={sm}
                                        onEdit={(newSocialMedia) => {
                                            setContactInfo(old => {
                                                return old ? {...old, socialMedia: old.socialMedia.map(sm => sm.id === newSocialMedia.id ? newSocialMedia : sm)} : undefined;
                                            })
                                        }}
                                    />
                                ))
                            }
                            <div className={styles.separated}></div>
                            <p>Nuevo</p>
                            <SocialMediaForm onAdd={(newSocialMedia) => {
                                setContactInfo(old => {
                                    return old ? {...old, socialMedia: [...old.socialMedia, newSocialMedia]} : undefined;
                                })
                            }}/>
                        </div>
                    </Tab>
                    <Tab>
                        <ContactLabelForm contactId={contactId} name={contactInfo.name} labels={contactInfo.labels} setLabels={(labels:LabelType[]) => setContactInfo(({...contactInfo, labels}))} />
                    </Tab>
                </TabsSlider>
            </div>
        </div>
    )
}