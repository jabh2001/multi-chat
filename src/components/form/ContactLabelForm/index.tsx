import { useEffect, useState } from "react"
import LabelsCheckboxes from "../inputs/LabelsCheckboxes"
import { LabelType } from "../../../types"
import styles from "./index.module.css"
import { putContactLabel } from "../../../service/api"

export default function ContactLabelForm({ contactId, name, labels, setLabels }:{ contactId:any, name:string, labels:LabelType[], setLabels:any }){
    const [selectedIds, setSelectedIds] = useState<number[]>([])
    useEffect(()=> {
        setSelectedIds(labels.map(l =>  l.id))
    }, [labels])

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()
        const labels = await putContactLabel(contactId, selectedIds)
        setLabels(labels)
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.title}> Etiquetas de {name}</h3>
        <div className={styles.labels}>
            <LabelsCheckboxes selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
        </div>
        <div className={styles.button}>
            <button className="btn primary">guardar</button>
        </div>
    </form>
}