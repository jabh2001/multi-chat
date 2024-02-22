import { useRef, useState } from "react"
import { menuContext } from "../../hooks/useMenu"
import styles from "./index.module.css"
import { ButtonListItem, LinkListItem, ListItem } from "./ListItem"
import { MenuItem, MenuSection } from "../menu"
import { BellIcon, CommentIcon, ConfigIcon, HomeIcon, PhoneIcon, ProfileIcon } from "../icons"

export default function VerticalNavBar(){
    const optionsRef = useRef<HTMLDivElement>(null)
    const [openedMenuName, setOpenedMenuName] = useState("off")
    return (
        <menuContext.Provider value={{ ref:optionsRef, openedMenuName, setOpenedMenuName}}>
            <div className={styles.navbarContainer}>

                <ul className={styles.navbar}>
                    <ListItem icon={<CommentIcon />} title="Conversaciones" name="conversations">
                        <MenuItem icon={<HomeIcon />} title="All Conversations" to="/conversations" />
                        <MenuItem icon={<PhoneIcon />} title="Pending" to="/conversations/pending" />
                        <MenuSection title="Entradas">
                            <MenuItem icon={<HomeIcon />} title="Item grupo 1" to="/" />
                            <MenuItem icon={<HomeIcon />} title="Item grupo 2" to="#" />
                            <MenuItem icon={<HomeIcon />} title="Añadir" to="/config/inboxes/new" />
                        </MenuSection>
                        <MenuSection title="Etiquetas">
                            <MenuItem icon={<PhoneIcon />} title="Item grupo 1" to="#" />
                            <MenuItem icon={<PhoneIcon />} title="Item grupo 2" to="3" />
                            <MenuItem icon={<HomeIcon />} title="Añadir" to="/config/labels/new" />
                        </MenuSection>
                    </ListItem>
                    <ListItem icon={<PhoneIcon />} title="Contactos" name="contacts">
                        <MenuItem icon={<PhoneIcon />} title="Ver todos" to="/contacts" />
                        <MenuSection title="Buscar por etiquetas">
                            <MenuItem icon={<HomeIcon />} title="Item grupo 1" to="/" />
                            <MenuItem icon={<HomeIcon />} title="Item grupo 2" to="#" />
                        </MenuSection>
                    </ListItem>
                    <ListItem icon={<HomeIcon />} title="" name="A2"></ListItem>
                    <ListItem icon={<ConfigIcon />} title="Configuraciones" name="config">
                        <MenuItem icon={<HomeIcon />} title="Cuenta" to="/config/account" />
                        <MenuItem icon={<HomeIcon />} title="Agentes" to="/config/agents" />
                        <MenuItem icon={<HomeIcon />} title="Entradas" to="/config/inboxes" />
                        <MenuItem icon={<HomeIcon />} title="Etiquetas" to="/config/labels" />
                        <MenuItem icon={<HomeIcon />} title="Equipos" to="/config/teams" />
                    </ListItem>
                    <span className={styles.separator}></span>
                    <ButtonListItem><BellIcon /></ButtonListItem>
                    <LinkListItem to="/profile"><ProfileIcon /></LinkListItem>
                </ul>
                {/* <div className={openedMenuName === "off" ? styles.closeMenuOption} ref={optionsRef}></div */}
                <div className={`${styles.menuOption} ${openedMenuName === "off" && styles.closeMenuOption}`} ref={optionsRef}></div>
            </div>
        </ menuContext.Provider>
    )
}