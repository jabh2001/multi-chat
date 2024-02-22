import ArrowIcon from "../icons/ArrowIcon";
import CloseIcon from "../icons/CloseIcon";
import GlassIcon from "../icons/GlassIcon";
import styles from "./index.module.css"

export default function SearchContactBar(){
    return (
            <label className={styles.container}>
                <div className={styles.iconContainer}>
                    <GlassIcon />
                </div>
                <input className={styles.input} type="text" placeholder="Search contact..." />
                <button className={styles.closeContainer}>
                    <CloseIcon />
                </button>
                <button className={styles.arrowContainer}>
                    <ArrowIcon />
                </button>
            </label>
    )
}