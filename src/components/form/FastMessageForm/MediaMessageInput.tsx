import { Control } from "react-hook-form"
import NormalInput from "../inputs/NormalInput"
import FileInput from "../inputs/FileInput"
import styles from "./index.module.css"

export default function MediaMessageInput({ name, control, quantity }:{name:string, control:Control<any, any, any>, quantity:number}){
    return (
        <>
            {
                Array(quantity).fill(0).map((_, i) => (
                    <div className={styles.mediaInput} key={`MediaMessageInput-${name}-${i}`} >
                        <NormalInput name={`${name}Text${i}`} control={control} />
                        <FileInput name={`${name}File${i}`} control={control} />
                    </div>
                ))
            }
        </>
    )
}