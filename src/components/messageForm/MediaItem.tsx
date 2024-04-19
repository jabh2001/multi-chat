import styles from "./mediaItem.module.css"

export default function MediaItem({ item }:{ item:File}){
    return (
        <div className={styles.mediaItemContainer}>
            {item.name}
        </div>
    )
}