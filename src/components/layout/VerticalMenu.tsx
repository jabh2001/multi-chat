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
                    <ListItem icon={<CommentIcon />} title="Conversaciones" name="A1">
                        <MenuItem icon={<HomeIcon />} title="All Conversations" to="/conversations/all" />
                        <MenuItem icon={<PhoneIcon />} title="Pending" to="/conversations/pending" />
                        <MenuSection title="Grupo 1">
                            <MenuItem icon={<HomeIcon />} title="Item grupo 1" to="/" />
                            <MenuItem icon={<HomeIcon />} title="Item grupo 2" to="#" />
                        </MenuSection>
                        <MenuSection title="Section 2">
                            <MenuItem icon={<PhoneIcon />} title="Item grupo 1" to="#" />
                            <MenuItem icon={<PhoneIcon />} title="Item grupo 2" to="3" />
                        </MenuSection>
                    </ListItem>
                    <ListItem icon={<HomeIcon />} title="" name="A2"></ListItem>
                    <ListItem icon={<PhoneIcon />} title="" name="A3"></ListItem>
                    <ListItem icon={<ConfigIcon />} title="" name="AA"></ListItem>
                    <span className={styles.separator}></span>
                    <ButtonListItem><BellIcon /></ButtonListItem>
                    <LinkListItem><ProfileIcon /></LinkListItem>
                </ul>
                {/* <div className={openedMenuName === "off" ? styles.closeMenuOption} ref={optionsRef}></div */}
                <div className={`${styles.menuOption} ${openedMenuName === "off" && styles.closeMenuOption}`} ref={optionsRef}></div>
            </div>
        </ menuContext.Provider>
    )
}