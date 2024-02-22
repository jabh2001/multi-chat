import SearchBar from "../../components/SearchBar"
import TableData from "../../components/TableData"
import { PhoneIcon } from "../../components/icons"
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
                        data={exampleData}
                    />
                  </div>
                </div>
            </div>
        </div>
    )
}
const exampleData = [
    {
      "name": "Juan Perez",
      "email": "juanperez@example.com",
      "phone": "123-456-7890"
    },
    {
      "name": "Maria Garcia",
      "email": "mariagarcia@example.com",
      "phone": "987-654-3210"
    },
    {
      "name": "Luis Martinez",
      "email": "luismartinez@example.com",
      "phone": "555-555-5555"
    },
    {
      "name": "Ana Rodriguez",
      "email": "anarodriguez@example.com",
      "phone": "777-777-7777"
    },
    {
      "name": "Pedro Lopez",
      "email": "pedrolopez@example.com",
      "phone": "999-999-9999"
    },
    {
      "name": "Laura Fernandez",
      "email": "laurafernandez@example.com",
      "phone": "111-111-1111"
    },
    {
      "name": "Carlos Sanchez",
      "email": "carlossanchez@example.com",
      "phone": "222-222-2222"
    },
    {
      "name": "Sofia Ramirez",
      "email": "sofiaramirez@example.com",
      "phone": "333-333-3333"
    },
    {
      "name": "Diego Gonzalez",
      "email": "diegogonzalez@example.com",
      "phone": "444-444-4444"
    },
    {
      "name": "Elena Diaz",
      "email": "elenadiaz@example.com",
      "phone": "666-666-6666"
    }
  ]
  