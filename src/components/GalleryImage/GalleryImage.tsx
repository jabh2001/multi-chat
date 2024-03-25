import { useRef, useState } from "react"
import styles from "./GalleryImage.module.css"
import ReactDOM, { flushSync } from "react-dom"

type Props = {
    src?: string
    alt?:string
    className?:string
}

const container = document.getElementById("bigImage") as HTMLElement
export default function GalleryImage({ className, ...rest}:Props){
    const [ open, setOpen ] = useState(false)
    const ref = useRef(generateString(10))

    const toggle = () => {
            if(document.startViewTransition) {
                document.startViewTransition(()=>{
                    flushSync(()=>{
                        setOpen(value => !value)
                    })
                })
            } else {

                setOpen(value => !value)
            }
    }

    return (
        <>
            <div className={`${styles.container} ${className}`} onClick={toggle}>
            {!open ? <img className={styles.img + " " + styles.anim} {...rest} style={{ viewTransitionName: ref.current}} /> : <div className={styles.placeholder} />}
            </div>
            { 
            ReactDOM.createPortal((
                open && <div className={styles.modalBg}>
                    <div className={styles.modal}>
                        <button className={styles.modalClose} onClick={toggle}>x</button>
                        <img className={styles.modalImg + " " + styles.anim} {...rest} style={{ viewTransitionName: ref.current}} /> 
                    </div>
                </div>
            ), container)}
        </>
    )
}
const characters ='abcdefghijklmnopqrstuvwxyz';

function generateString(length:number) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}