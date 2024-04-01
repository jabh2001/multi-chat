import ArrowIcon from "../icons/ArrowIcon"
import styles from "./index.module.css"

type  Props = React.TextareaHTMLAttributes <HTMLTextAreaElement> & {

}
export default function MessageTextarea({ ...textArea}:Props){
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <textarea className={`${styles.textarea}`} {...textArea}></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} type="submit">
                    <ArrowIcon />
                </button>
            </div>
        </div>
    )
}