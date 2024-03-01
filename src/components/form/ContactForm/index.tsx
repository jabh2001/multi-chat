import { useForm } from "react-hook-form"
import { ContactType } from "../../../types"
import { useEffect } from "react"
import { putContact } from "../../../service/api"

type Props = {
    edited:ContactType
    onEdit?:(contact:ContactType) => void
}
type Inputs = {
    name: ContactType["name"]
    email: ContactType["email"]
    phoneNumber: ContactType["phoneNumber"]
}

type Keys = "name" | "email" | "phoneNumber"
export default function ContactEditForm({ edited, onEdit }:Props){
    const { handleSubmit, register, setValue } = useForm<Inputs>()

    useEffect(()=> {
        for (const key of Object.keys(edited)) {
            if(["name", "email", "phoneNumber"].includes(key)){
                const KEY = key as Keys
                setValue(KEY, edited[KEY])
            }
            
        }
    }, [edited])
    return (
        <form onSubmit={handleSubmit(async (data)=>{
            if(edited){
                const contact = await putContact(edited.id, data)
                onEdit && onEdit(contact)
            }
        })}>
            <label className="input">
                <span>Nombre:</span>
                <input type="text" {...register("name")} />
            </label>
            <label className="input">
                <span>Correo: </span>
                <input type="text" {...register("email")} />
            </label>
            <label className="input">
                <span>Número: </span>
                <input type="text" {...register("phoneNumber")} />
            </label>
            <div>
                <button className="btn">Guardar</button>
                
            </div>
        </form>
    )
}