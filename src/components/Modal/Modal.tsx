import ReactDom  from 'react-dom';
import styles from "./modal.module.css"
import { useEffect, useState } from 'react';

type Props = {
    open?:boolean
    handleClose?:()=>void
    children?:React.ReactNode
}

function Modal({ open=false, handleClose=()=>{}, children}:Props){
    const [ isFirstRender, setIsFirstRender ] = useState(!open)

    useEffect(()=>{isFirstRender && open && setIsFirstRender(false);}, [open])

    return (
        <div className={`${styles.modalBg} ${open ? styles.show : styles.hidden} ${ isFirstRender && styles.isFirstRender }`}>
            <div className={styles.modal}>
                <button onClick={handleClose} className={styles.close}>X</button>
                {children}
            </div>
        </div>
    )
}
export default function Main(props:Props){
    return ReactDom.createPortal(<Modal {...props} />, document.getElementById("modal") as HTMLElement)
}
export { 
    Main as Modal
}
