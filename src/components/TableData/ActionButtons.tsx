import useAuth from "../../hooks/useAuth"
import PencilIcon from "../icons/PencilIcon"
import TrashIcon from "../icons/TrashIcon"
import styles from "./index.module.css"

type Props = {
    cell?:any
    onEdit:(rowData:any) => void
    onDelete:(rowData:any) => void
}
export const ActionButtons = ({ cell, onEdit, onDelete }:Props) => {
    const user = useAuth(store => store.user)
    return (
        <div className={styles.actions}>
            {user?.role == "admin" && <button onClick={() => onEdit(cell.getData())} className="btn icon warning"><PencilIcon /> </button>}
            {user?.role == "admin" && <button onClick={() => onDelete(cell.getData())} className="btn icon error"><TrashIcon /> </button>}
            {user?.role == "agent" && <>Eres agente</>}
        </div>
    )
}