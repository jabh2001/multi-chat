import { MenuItem, MenuSection } from "../menu"
import { HomeIcon, PhoneIcon } from "../icons"
import useLabelStore from "../../hooks/useLabelStore"
import useTeamStore from "../../hooks/useTeamStore"

export function LabelSection({ basePath }:{ basePath:string }){
    const labels = useLabelStore(state => state.labels)
    return (
        <MenuSection title="Etiquetas">
            {
                labels.map((el) => {
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
    const teams = useTeamStore(state => state.teams)
    return (
        <MenuSection title="Entradas">
            {
                teams.map((el) => {
                    return(
                        <MenuItem icon={<PhoneIcon />} title={el.name} to={`${basePath}?inbox=${el.id}`} />
                    )
                })
            }
            <MenuItem icon={<HomeIcon />} title="Añadir" to="/config/inboxes/new" />
        </MenuSection>
    )
}