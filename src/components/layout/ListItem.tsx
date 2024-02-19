import { createPortal } from "react-dom"
import { useMenuNavbar } from "../../hooks/useMenu"
import styles from "./index.module.css"

type ListItemProps = { 
    children?:React.ReactNode,
    icon:React.ReactNode,
    title:string,
    name:string
}
function ListItem({ children, icon, title, name }:ListItemProps){
    const { ref, openedMenuName, setOpenedMenuName } = useMenuNavbar()
    return <>
        <li className={`${styles.listItem} ${openedMenuName == name ? styles.active : ""}`} onClick={()=> setOpenedMenuName(oldName => oldName == name ? "off" : name)}>{icon}</li>
        {
            name === openedMenuName && ref?.current && createPortal((
                <div className={styles.optionMenuContainer}>
                    <div>
                        <p>Vista actual:</p>
                        <h3>{title}</h3>
                    </div>
                    <nav>
                        {children}
                    </nav>
                </div>
            ), ref.current)
        }
    </>
}

function ButtonListItem({ children }:{ children:React.ReactNode, active?:boolean}){
    return <li className={styles.listItem}>{children}</li>
}

function LinkListItem({ children }:{ children:React.ReactNode}){
    return <li className={styles.listItem}>{children}</li>
}

export  {
    ListItem,
    ButtonListItem,
    LinkListItem,
}