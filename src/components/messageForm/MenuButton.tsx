import { useRef, useState } from "react"
import { ProfileIcon } from "../icons"
import CameraIcon from "../icons/CameraIcon"
import MicrophoneIcon from "../icons/MicrophoneIcon"
import XMarkIcon from "../icons/XMarkIcon"
import styles from "./menuButton.module.css"
import useClickOutside from "../../hooks/useClickOutside"

export default function MenuButton(){
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, () => setOpen(false))
    return (
        <div ref={ref} className={styles.container}>
            <div className={`${styles.menuContainer} ${open && styles.visible}`}>
                <div className={styles.menu}>
                    <MenuFileInputOption icon={<CameraIcon/>} title="Imagen"/>
                    <MenuFileInputOption icon={<MicrophoneIcon/>} title="Audio"/>
                    <MenuFileInputOption icon={<ProfileIcon/>} title="Contacto"/>
                    <MenuFileInputOption icon={<XMarkIcon/>} title="Close"/>
                </div>
            </div>
            <button type="button" className={styles.button} onClick={() => setOpen(open => !open)}>
                <XMarkIcon />
            </button>
        </div>
    )
}

function MenuFileInputOption({ title, icon }:{ title:string, icon:JSX.Element }){
    
    return (
        <label className={styles.option}>
            <input type="file" className={styles.fileInput} onChange={e => console.log(e.target.files)} multiple />
            <span className={styles.optionIcon}>{icon}</span>
            <span className={styles.optionTitle}>{title}</span>
        </label>
    )
}