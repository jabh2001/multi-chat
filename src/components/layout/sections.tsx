import { MenuItem, MenuSection } from "../menu"
import { HomeIcon, PhoneIcon } from "../icons"

export function LabelSection({ basePath }:{ basePath:string }){
    const fakeData = [
        { id:1, name:"Trabajo"},
        { id:2, name:"Vacaciones"},
        { id:3, name:"Cumpleaños"},
    ]
    return (
        <MenuSection title="Etiquetas">
            {
                fakeData.map((el) => {
                    return(
                        <MenuItem icon={<PhoneIcon />} title={el.name} to={`${basePath}?label=${el.id}`} />
                    )
                })
            }
            <MenuItem icon={<HomeIcon />} title="Añadir" to="/config/labels" />
        </MenuSection>
    )
}
export function InboxSection({ basePath }:{ basePath:string }){
    const fakeData = [
        { id:1, name:"Trabajo"},
        { id:2, name:"Vacaciones"},
        { id:3, name:"Cumpleaños"},
    ]
    return (
        <MenuSection title="Entradas">
            {
                fakeData.map((el) => {
                    return(
                        <MenuItem icon={<PhoneIcon />} title={el.name} to={`${basePath}?inbox=${el.id}`} />
                    )
                })
            }
            <MenuItem icon={<HomeIcon />} title="Añadir" to="/config/inboxes/new" />
        </MenuSection>
    )
}