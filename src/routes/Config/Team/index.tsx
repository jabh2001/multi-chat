import { type RouteObject } from "react-router-dom";
import styles from './index.module.css';
import TableData from "../../../components/TableData";
import SearchBar from "../../../components/SearchBar";
import TeamForm from "../../../components/form/TeamForm";

const baseName = "/config/teams"

const teamRoutes : RouteObject[] = [
    {
        
        path:baseName,
        element:<IndexPage />
    },

];
function IndexPage(){
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <h3>Team</h3>
                <SearchBar   placeholder="Search team..." />
                <button className="btn secondary">Filtrar</button>
            </div>
            <div className={styles.labelsContainer}>
                <TableData
                    color={"red"}
                    columns={[
                        {name:"name", "title":"Nombre", type:"string"},
                    ]}
                    data={[
                        { name:"Socios", },
                        { name:"Empleados", },
                        { name:"Externos", },
                    ]}
                />
            </div>
            <div className={styles.explain}>
                <TeamForm />
            </div>
        </div>
    )
}

export default teamRoutes