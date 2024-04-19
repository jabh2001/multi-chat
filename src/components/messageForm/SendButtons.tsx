import ArrowIcon from "../icons/ArrowIcon"
import CameraIcon from "../icons/CameraIcon"
import MicrophoneIcon from "../icons/MicrophoneIcon"
import styles from "./sendButton.module.css"

export default function SendButtons(){
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button + " " + styles.rotate}>
                <ArrowIcon />
            </button>
            <button className={styles.button}>
                <MicrophoneIcon />
            </button>
            <button className={styles.button}>
                <CameraIcon />
            </button>
        </div>
    )
}