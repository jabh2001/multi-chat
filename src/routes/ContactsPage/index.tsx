import SearchBar from "../../components/SearchBar"
import TableData from "../../components/TableData"
import { PhoneIcon } from "../../components/icons"
import { type ContactType } from "../../types"
import styles from "./index.module.css"

export default function ContactsPage(){
    return (
        <div className={styles.container}>
            <div className={styles.sidePanel}>
                <div className={styles.title}>
                    <div>
                        <PhoneIcon />
                    </div>
                    <h3>Contacts</h3>
                </div>
                <div>
                    Options
                </div>
            </div>
            <div className={styles.tablePanel}>
                <div className={styles.searchBar}>
                    <h3>Contacts</h3>
                    <SearchBar placeholder="Search contact..." />
                    <button className="btn secondary">Filtrar</button>
                    <button className="btn primary">Add new contact</button>
                </div>
                <div className={styles.tableContainer}>
                  <div>
                    <TableData
                        columns={[
                            {name:"name", title:"Nombre", type:"string"},
                            {name:"email", title:"Correo", type:"string"},
                            {name:"phone", title:"Teléfono", type:"string"},
                        ]}
                        data={contacts}
                    />
                  </div>
                </div>
            </div>
        </div>
    )
}
  const contacts: ContactType[] = [
    { 
        id: 1, 
        name: 'John Doe', 
        email: 'john@example.com', 
        phoneNumber: '+1234567890', 
        avatarUrl: 'https://example.com/avatar.jpg', 
        labels:[],
        socialMedia: [
            { id: 1, name: 'Twitter', url: 'https://twitter.com/johndoe', displayText: '@johndoe' },
            { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe', displayText: 'John Doe' }
        ]
    },
    { 
        id: 2, 
        name: 'Jane Smith', 
        email: 'jane@example.com', 
        phoneNumber: '+1987654321', 
        avatarUrl: 'https://example.com/avatar2.jpg', 
        labels:[],
        socialMedia: [
            { id: 1, name: 'Twitter', url: 'https://twitter.com/janesmith', displayText: '@janesmith' }
        ]
    }
];
  