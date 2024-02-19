import { NavLink } from "react-router-dom"
import style from "./index.module.css"

type Props = {
    icon:React.ReactNode
    title:string
    to:string
}

export default function MenuItem({ icon, title, to }:Props){
    return <NavLink to={to} className={({ isActive }) => `${style.menuItem} ${isActive ? style.active : ""}`}>
        <span  className={style.icon}>{icon}</span>
        <span>{title}</span>
    </NavLink>
}