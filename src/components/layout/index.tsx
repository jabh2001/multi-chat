import { Outlet } from "react-router-dom";
import VerticalMenu from "./VerticalMenu";
import styles from "./index.module.css"
import SSEProvider from "../SSEProvider";

export default function Layout(){
    return (
        <SSEProvider>
            <div className={styles.layout}>
                <div>
                    <VerticalMenu />
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </SSEProvider>
    )
}