import { useRef } from "react"
import ArrowIcon from "../icons/ArrowIcon"
import styles from "./index.module.css"

type  Props = React.TextareaHTMLAttributes <HTMLTextAreaElement> & {

}
export default function MessageTextarea({ ...textArea}:Props){
    const buttonRef = useRef<HTMLButtonElement>(null)
    const handleKeyDown = (e : React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter' && !e.shiftKey){
            e.preventDefault()
            buttonRef.current?.click()
        } 
    }
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <textarea className={`${styles.textarea}`} {...textArea} onKeyDown={handleKeyDown}></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} type="submit" ref={buttonRef}>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    )
}