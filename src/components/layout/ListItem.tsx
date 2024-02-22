import { createPortal } from "react-dom"
import { useMenuNavbar } from "../../hooks/useMenu"
import styles from "./index.module.css"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"

type ListItemProps = { 
    children?:React.ReactNode,
    icon:React.ReactNode,
    title:string,
    name:string
}
function ListItem({ children, icon, title, name }:ListItemProps){
    const { ref, openedMenuName, setOpenedMenuName } = useMenuNavbar()
    useEffect(()=> {
        if(location.pathname.startsWith(`/${name}`)){
            setOpenedMenuName(name)
        }
    }, [name])
    return <>
        <button className={`${styles.listItem} ${openedMenuName == name ? styles.active : ""}`} onClick={()=> setOpenedMenuName(oldName => oldName == name ? "off" : name)}>{icon}</button>
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
    return <button className={styles.listItem}>{children}</button>
}

function LinkListItem({ children, to }:{ children:React.ReactNode, to:string}){
    const { setOpenedMenuName } = useMenuNavbar()
    return (
        <NavLink onClick={()=>setOpenedMenuName("off")} to={to} className={({ isActive})=> `${styles.listItem} ${isActive ? styles.active : ""}`}>{children}</NavLink>
    )
}

export  {
    ListItem,
    ButtonListItem,
    LinkListItem,
}