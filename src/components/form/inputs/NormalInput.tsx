import { Control, Controller } from "react-hook-form"
import styles from "./index.module.css"
import { HTMLInputTypeAttribute, useState } from "react"

type Props = {
    type?:HTMLInputTypeAttribute
    label?:string
    name:string
    control: Control<any, any, any>
}

export default function NormalInput({ type="text", label="", name, control}:Props){
    const [ focus, setFocus ] = useState(false)
    return (
        <Controller 
            control={control}
            name={name}
            render={({ field }) =>{
                const { onBlur, name, onChange, value, ref, disabled } = field
                return (
                    <div className={styles.inputGroup}>
                        <input 
                            ref={ref}
                            name={name}
                            value={value}
                            onChange={onChange}
                            type={type} 
                            disabled={disabled}
                            className={`${styles.input} ${(focus || value) && styles.focus}`} 
                            onFocus={()=>setFocus(true)} 
                            onBlur={()=>{ onBlur();setFocus(false); }}
                        />
                        { label && <label className={styles.label}>{label}</label>}
                    </div>
                )
            }}
        />
    )
}