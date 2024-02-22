import { Link, type RouteObject } from "react-router-dom";
import NewInboxPage from "./NewInboxPage";
import styles from "./index.module.css"
import PencilIcon from "../../../components/icons/PencilIcon";
import TrashIcon from "../../../components/icons/TrashIcon";


const fakeData = [
    { id:1, name:"Número principal", provider:"Whats App"},
    { id:2, name:"Telegram secundario", provider:"Telegram"},
    { id:3, name:"Telegram principal", provider:"Telegram"},
]

function IndexPage(){
    return (
        <div>
            <div className={styles.title}>
                <h3>Inbox</h3>
                <Link to={"new"} className="btn primary">Create new inbox</Link>
            </div>
            <div className={styles.main}>
                <ul className={styles.list}>
                    {
                        fakeData.map(el =>(
                            <li key={`inbox_list_${el.id}`} className={styles.inboxesListItem}>
                                <h4 className={styles.name}>{el.name}</h4>
                                <h5 className={styles.provider}>{el.provider}</h5>
                                <div className={styles.actions}>
                                    <button className={styles.editButton}>
                                        <PencilIcon />
                                    </button>
                                    <button className={styles.deleteButton}>
                                        <TrashIcon />
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className={styles.description}>
                    <h3>Description</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A reprehenderit quia dignissimos unde consequatur, illum, ducimus alias dolorum necessitatibus distinctio, et rem ut? Earum molestiae saepe consequatur tenetur delectus voluptate!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A reprehenderit quia dignissimos unde consequatur, illum, ducimus alias dolorum necessitatibus distinctio, et rem ut? Earum molestiae saepe consequatur tenetur delectus voluptate!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A reprehenderit quia dignissimos unde consequatur, illum, ducimus alias dolorum necessitatibus distinctio, et rem ut? Earum molestiae saepe consequatur tenetur delectus voluptate!
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