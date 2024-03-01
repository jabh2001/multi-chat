import { MenuItem, MenuSection } from "../menu"
import { HomeIcon, PhoneIcon } from "../icons"
import { useLabel } from "../../hooks/useLabelStore"
import { useTeam } from "../../hooks/useTeamStore"

export function LabelSection({ basePath }:{ basePath:string }){
    const {labels} = useLabel()
    return (
        <MenuSection title="Etiquetas">
            {
                labels.map((el) => {
                    return(
                        <MenuItem key={`label_${el.id}`} icon={<PhoneIcon />} title={el.name} to={`${basePath}?label=${el.id}`} />
                    )
                })
            }
            <MenuItem icon={<HomeIcon />} title="Añadir" to="/config/labels" />
        </MenuSection>
    )
}
export function InboxSection({ basePath }:{ basePath:string }){
    const {teams} = useTeam()
    return (
        <MenuSection title="Entradas">
            {
                teams.map((el) => {
                    return(
                        <MenuItem key={`inbox_${el.id}`} icon={<PhoneIcon />} title={el.name} to={`${basePath}?inbox=${el.id}`} />
                    )
                })
            }
            <MenuItem icon={<HomeIcon />} title="Añadir" to="/config/inboxes/new" />
        </MenuSection>
    )
}