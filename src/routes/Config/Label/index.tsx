import { type RouteObject } from "react-router-dom";
import styles from './index.module.css';
import TableData from "../../../components/TableData";
import SearchBar from "../../../components/SearchBar";
import LabelForm from "../../../components/form/LabelForm";

const baseName = "/config/labels"

const labelRoutes : RouteObject[] = [
    {
        
        path:baseName,
        element:<IndexPage />
    },

];
function IndexPage(){
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <h3>Label</h3>
                <SearchBar   placeholder="Search label..." />
                <button className="btn secondary">Filtrar</button>
            </div>
            <div className={styles.labelsContainer}>
                <TableData
                    color={"green"}
                    columns={[
                        {name:"name", "title":"Nombre", type:"string"},
                    ]}
                    data={[
                        { name:"Trabajo", },
                        { name:"Privado", },
                        { name:"Proyecto", },
                    ]}
                />
            </div>
            <div className={styles.explain}>
                <LabelForm />
            </div>
        </div>
    )
}

export default labelRoutes