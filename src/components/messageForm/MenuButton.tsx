import { useRef, useState } from "react"
import { ProfileIcon } from "../icons"
import CameraIcon from "../icons/CameraIcon"
import XMarkIcon from "../icons/XMarkIcon"
import styles from "./menuButton.module.css"
import useClickOutside from "../../hooks/useClickOutside"
import useMessageMedia from "../../hooks/useMessageMedia"

export default function MenuButton(){
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, () => setOpen(false))
    return (
        <div ref={ref} className={styles.container}>
            <div className={`${styles.menuContainer} ${open && styles.visible}`}>
                <div className={styles.menu}>
                    <MenuFileInputOption 
                        icon={<CameraIcon/>} 
                        title="Imágenes, audios y videos"
                        accept="image/png, image/jpeg, audio/mp3, audio/ogg, audio/opus, video/mp4"
                        onAppendFile={() => setOpen(false)}
                    />
                    <MenuFileInputOption icon={<ProfileIcon/>} title="Contacto"/>
                </div>
            </div>
            <button type="button" className={styles.button} onClick={() => setOpen(open => !open)}>
                <XMarkIcon />
            </button>
        </div>
    )
}

function MenuFileInputOption({ title, icon, accept, onAppendFile }:{ title:string, icon:JSX.Element, accept?:string, onAppendFile?:(fileList:FileList) => void }){
    const appendFile = useMessageMedia(state => state.appendFile)
    return (
        <label className={styles.option}>
            <input type="file" className={styles.fileInput} accept={accept} onChange={e => {
                if(!e.target.files){
                    return null
                }
                for(const f of e.target.files){
                    appendFile(f)
                }
                onAppendFile && onAppendFile(e.target.files)
            }} multiple />
            <span className={styles.optionIcon}>{icon}</span>
            <span className={styles.optionTitle}>{title}</span>
        </label>
    )
}