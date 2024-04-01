import { useRef, useState } from "react"
import useClickOutside from "../../../hooks/useClickOutside"
import { Control, Controller } from "react-hook-form"
import styles from "./index.module.css"
import { selectContext } from "../../../hooks/useMultiSelect"

type Props = {
    label:string
    name:string
    control: Control<any, any, any>
    children?:React.ReactNode
}

export default function Select({ label, name, control, children }:Props){
    const [ inputLabel, setInputLabel ] = useState(label)
    const [ open, setOpen ] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    useClickOutside(containerRef, () => setOpen(false))
    
    return (
        <Controller 
            control={control}
            name={name}
            render={({ field }) =>{
                const { value, onChange:setValue } = field
                return (
                    <selectContext.Provider value={{ value, name, setValue:({value, label}) => {
                        setValue(value)
                        setOpen(false)
                        setInputLabel(label)
                    } }}>
                        <div className={`${styles.inputGroup} ${ open && styles.activeSelect}`} ref={containerRef}>
                            <label className={`${styles.input} ${styles.button}`}>
                                <input type="checkbox" checked={open} onChange={e => setOpen(e.target.checked)} className={styles.selectButton} />
                                <div>{inputLabel}</div>
                            </label>
                            <div className={`${styles.optionsMenu}`}>
                                { children }
                            </div>
                        </div>
                    </selectContext.Provider>
                )
            }}
        />
    )
}