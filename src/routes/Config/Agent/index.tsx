import { type RouteObject } from "react-router-dom";
import { useAgent } from "../../../hooks/useAgent";
import styles from './index.module.css';
import AgentForm from "../../../components/form/AgentForm";
import SearchBar from "../../../components/SearchBar";
import { useState } from "react";
import { AgentType } from "../../../types";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import { ActionButtons } from "../../../components/TableData/ActionButtons";

const baseName = "/config/agents"

const agentsRoutes : RouteObject[] = [
    {
        
        path:baseName,
        element:<IndexPage />
    },

];
function IndexPage(){
    const { agents, deleteAgent } = useAgent()
    const [edited, setEdited] = useState<AgentType | undefined>(undefined)

    const handleEdit = (row:AgentType) => setEdited(row)
    const handleDelete = ({ id }:AgentType) => deleteAgent(id)
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <h3>Agent</h3>
                <SearchBar   placeholder="Search agent..." />
                <button className="btn secondary">Filtrar</button>
            </div>
            <div className={styles.agentsContainer}>
                <ReactTabulator
                    options={{
                        layout:"fitColumns"
                    }}
                    columns={[
                        {field:"name", "title":"Nombre", widthGrow:2 },
                        {field:"email", "title":"Correo",  widthGrow:3},
                        {field:"role", "title":"Tipo", widthGrow:1 },
                        {title:"actions", formatter:reactFormatter(<ActionButtons onEdit={handleEdit} onDelete={handleDelete} />) }
                    ]}
                    data={agents}
                />
            </div>
            <div className={styles.explain}>
                <AgentForm edited={edited} resetEdited={()=>setEdited(undefined)} />
            </div>
        </div>
    )
}

export default agentsRoutes