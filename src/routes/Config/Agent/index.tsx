import { type RouteObject } from "react-router-dom";
import useAgentStore from "../../../hooks/useAgentStore";
import styles from './index.module.css';
import AgentForm from "../../../components/form/AgentForm";
import TableData from "../../../components/TableData";
import SearchBar from "../../../components/SearchBar";

const baseName = "/config/agents"

const agentsRoutes : RouteObject[] = [
    {
        
        path:baseName,
        element:<IndexPage />
    },

];
function IndexPage(){
    const agents = useAgentStore(state => state.agents);
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <h3>Agent</h3>
                <SearchBar   placeholder="Search agent..." />
                <button className="btn secondary">Filtrar</button>
            </div>
            <div className={styles.agentsContainer}>
                <TableData
                    color={"yellow"}
                    columns={[
                        {name:"name", "title":"Nombre", type:"string"},
                        {name:"email", "title":"Correo", type:"string"},
                        {name:"type", "title":"Tipo", type:"string"},
                    ]}
                    data={agents}
                />
            </div>
            <div className={styles.explain}>
                <AgentForm />
            </div>
        </div>
    )
}

export default agentsRoutes