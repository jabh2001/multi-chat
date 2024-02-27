import PencilIcon from "../icons/PencilIcon"
import TrashIcon from "../icons/TrashIcon"
import styles from "./index.module.css"

type Props = {
    cell?:any
    onEdit:(rowData:any) => void
    onDelete:(rowData:any) => void
}
export const ActionButtons = ({ cell, onEdit, onDelete }:Props) => {
    return (
        <div className={styles.actions}>
            <button onClick={() => onEdit(cell.getData())} className="btn icon warning"><PencilIcon /> </button>
            <button onClick={() => onDelete(cell.getData())} className="btn icon error"><TrashIcon /> </button>
        </div>
    )
}