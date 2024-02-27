import { type RouteObject } from "react-router-dom";
import styles from './index.module.css';
import SearchBar from "../../../components/SearchBar";
import LabelForm from "../../../components/form/LabelForm";
import { useLabel } from "../../../hooks/useLabelStore";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import { ActionButtons } from "../../../components/TableData/ActionButtons";
import { LabelType } from "../../../types";
import { useState } from "react";

const baseName = "/config/labels"

const labelRoutes : RouteObject[] = [
    {
        
        path:baseName,
        element:<IndexPage />
    },

];

function IndexPage(){
    const { labels, deleteLabel } = useLabel()
    const [edited, setEdited] = useState<LabelType | undefined>(undefined)
    const handleEdit = (row:LabelType) => {
        setEdited(row)
        
    }
    const handleDelete = ({ id }:LabelType) => deleteLabel(id)

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <h3>Label</h3>
                <SearchBar placeholder="Search label..." />
                <button className="btn secondary">Filtrar</button>
            </div>
            <div className={styles.labelsContainer}>
                <ReactTabulator
                    options={{
                        layout:"fitColumns"
                    }}
                    columns={[
                        {field:"name", "title":"Nombre", widthGrow:2},
                        {field:"description", "title":"Descripción", widthGrow:3},
                        {title:"actions", formatter:reactFormatter(<ActionButtons onEdit={handleEdit} onDelete={handleDelete} />), widthShrink:2}
                    ]}
                    data={labels}
                />
            </div>
            <div className={styles.explain}>
                <LabelForm edited={edited} resetEdited={()=>setEdited(undefined)} />
            </div>
        </div>
    )
}

export default labelRoutes