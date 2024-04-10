import { Link, type RouteObject } from "react-router-dom";
import NewInboxPage from "./NewInboxPage";
import styles from "./index.module.css"
import TrashIcon from "../../../components/icons/TrashIcon";
import { useEffect } from "react";
import { useSSE } from "../../../hooks/useSSE";
import useInboxStore from "../../../hooks/useInboxStore";

import RightFromBracket from "../../../components/icons/RightFromBracket";
import { deleteInbox, inboxLogout } from "../../../service/api";

function IndexPage(){
    const inboxes = useInboxStore(state => state.inboxes)
    const updateInboxByName = useInboxStore(state => state.updateInboxByName)
    const fetchInboxes = useInboxStore(state => state.fetch)
    const deleteInboxS = useInboxStore(store => store.deleteInbox)
    
    const handleLogout = async (inboxId:any) => {
        try{
            await inboxLogout(inboxId)
        } catch(e){

        }
    }
    const handleDelete = async (inboxId:any) => {
        try{
            await deleteInbox(inboxId)
            deleteInboxS(inboxId)
        } catch(e){

        }
    }
    
    const evtSrc = useSSE()
    useEffect(()=>{fetchInboxes()}, [])

    useEffect(()=>{
        if(evtSrc){
            const func = (e:MessageEvent<any>) => {
                const inbox = JSON.parse(e.data)
                updateInboxByName(inbox)
            }
            evtSrc.addEventListener("qr-update", func)
            return  ()=>evtSrc!.removeEventListener("qr", func)
        }
    }, [evtSrc])
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <h3>Inbox</h3>
                <Link to={"new"} className="btn primary">Create new inbox</Link>
            </div>
            <div className={styles.main}>
                <ul className={styles.list}>
                    {
                        inboxes.map(el =>(
                            <li key={`inbox_list_${el.id}`} className={styles.inboxesListItem}>
                                <div className={styles.cardTitle}>
                                    <h4 className={styles.name}>{el.name}</h4>
                                    <h5 className={styles.provider}>{el.channelType}</h5>
                                    <div className={styles.status}>
                                        <span>Status: </span><div className={el.user ? styles.on : styles.off} ></div>
                                    </div>
                                    <div className={styles.actions}>
                                        <button className={styles.deleteButton} onClick={async() =>await handleDelete(el.id)}>
                                            <TrashIcon />
                                        </button>
                                        <button className={styles.deleteButton} onClick={async() =>await handleLogout(el.id)}>
                                            <RightFromBracket />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.qrContainer}>
                                    {el.user && <div className={styles.shade}></div> }
                                    <img className={styles.qr} src={`data:image/png;base64,${el.qr}`} alt="" />
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className={styles.description}>
                    <h3>Description</h3>
                    <p>
                        las entradas son las conexiones disponibles que tendrás a la distinta plataforma Ponle un nombre único que te permita reconocer desde qué dispositivo o
                        plataforma estás enviando los mensajes al estar conectada todos los mensajes Que recibas a esto esta plataforma serán redirigidas a tu buzón de mensaje 
                        del sistema esto también te permitirá responder  mensajes desde dicha plataforma los mensajes que lleguen de contactos no registrados serán guardados 
                        automáticamente con el nombre que brinde esta plataforma para ese contacto
                    </p>
                </div>
            </div>
        </div>
    )
}
const baseName = "/config/inboxes"
const inboxesRoutes : RouteObject[] = [
    {
        
        path:baseName,
        element:<IndexPage />
    },
    {
        
        path:baseName + "/new",
        element:<NewInboxPage />
    },
    {
        
        path:baseName + "/new/api",
        element:<NewInboxPage channel="api" />
    },
    {
        
        path:baseName + "/new/whats-app",
        element:<NewInboxPage channel="whats-app" />
    },
    {
        
        path:baseName + "/new/telegram",
        element:<NewInboxPage channel="telegram" />
    },

];
export default inboxesRoutes