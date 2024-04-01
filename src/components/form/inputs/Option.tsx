import styles from "./index.module.css"
import { useMultiSelect } from "../../../hooks/useMultiSelect"

export default function Option({ label, value }:{ label:string, value:any }){
    const { value:pValue, setValue, name} = useMultiSelect()
    
    return (
        <label className={`${styles.option}`}>
            <input 
                type="radio" 
                value={value} 
                checked={value == pValue}
                onChange={(evt)=>{
                    const { checked, value } = evt.target
                    if(checked) setValue({value, label})
                }}
                name={name}
            />
            <span>{label}</span>
        </label>
    )
}