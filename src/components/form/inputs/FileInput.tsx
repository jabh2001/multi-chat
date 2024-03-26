import { Control, Controller } from "react-hook-form"
import { useEffect, useRef } from "react"
import ArrowIcon from "../../icons/ArrowIcon"
import styles from "./index.module.css"

type Props = {
    label?:string
    name:string
    control: Control<any, any, any>
}

export default function FileInput({ label="", name, control}:Props){
    return (
        <Controller 
            control={control}
            name={name}
            render={({ field:{ onChange, value, ref, ...field} }) =>{
                const inputRef = useRef<HTMLInputElement | null>()
                useEffect(()=>{
                    console.log({ field, value })
                }, [value])
                return (
                    <div className={styles.fileInputGroup}>
                        
                        <button type="button" className={`${styles.input} ${styles.button} ${value?.name && styles.file}`} onClick={()=>inputRef.current?.click()}>
                            <span>{value? value.name : label}</span>
                            <ArrowIcon  />
                        </button>
                        <input 
                            {...field}
                            ref={input => {
                                ref(input)
                                inputRef.current = input
                            }}
                            type="file"
                            onChange={evt => onChange(evt.target.files ? evt.target.files[0] : undefined)}
                            className={`${styles.fileInput}`} 
                        />
                    </div>
                )
            }}
        />
    )
}

