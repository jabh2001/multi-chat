import { Outlet } from "react-router-dom";
import VerticalMenu from "./VerticalMenu";
import styles from "./index.module.css"

export default function Layout(){
    return (
        <div className={styles.layout}>
            <div>
                <VerticalMenu />
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}