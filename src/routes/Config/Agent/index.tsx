import { type RouteObject } from "react-router-dom";
import useAgentStore from "../../../hooks/useAgentStore";
import styles from './index.module.css'; // Archivo CSS para estilos

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
            <div className={styles.agentsContainer}>
                {agents.map((agent) => (
                    <div key={agent.id} className={`${styles.agent} ${agent.type == "admin" ? styles.admin : ""}`}>
                        <div className={styles.name}>{agent.name}</div>
                        <div className={styles.email}>{agent.email}</div>
                        <div className={styles.type}>{agent.type}</div>
                    </div>
                ))}
            </div>
            <div className={styles.explain}>

            </div>
        </div>
    )
}

export default agentsRoutes