import { type RouteObject } from "react-router-dom";
import styles from './index.module.css';
import SearchBar from "../../../components/SearchBar";
import TeamForm from "../../../components/form/TeamForm";
import { useTeam } from "../../../hooks/useTeamStore";
import { useState } from "react";
import { TeamType } from "../../../types";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import { ActionButtons } from "../../../components/TableData/ActionButtons";

const baseName = "/config/teams"

const teamRoutes : RouteObject[] = [
    {
        
        path:baseName,
        element:<IndexPage />
    },

];
function IndexPage(){
    const { teams, deleteTeam } = useTeam()
    const [edited, setEdited] = useState<TeamType | undefined>(undefined)

    const handleEdit = (row:TeamType) => setEdited(row)
    const handleDelete = ({ id }:TeamType) => deleteTeam(id)
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <h3>Team</h3>
                <SearchBar   placeholder="Search team..." />
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
                    data={teams}
                />
            </div>
            <div className={styles.explain}>
                <TeamForm edited={edited} resetEdited={()=>setEdited(undefined)} />
            </div>
        </div>
    )
}

export default teamRoutes