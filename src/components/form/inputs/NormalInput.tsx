import { RegisterOptions, UseFormRegister } from "react-hook-form"
import styles from "./index.module.css"

type Props = {
    label?:string
    name:string
    register: UseFormRegister<any>
    options?:RegisterOptions<any>
}

export default function NormalInput({ label="", name, register, options}:Props){
    return (
        <div className={styles.inputGroup}>
            <input required type="text" className={styles.input} {...register(name, options)} />
            { label && <label className={styles.label}>{label}</label>}
        </div>
    )
}