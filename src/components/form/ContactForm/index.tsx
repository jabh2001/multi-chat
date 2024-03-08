import { useForm } from "react-hook-form"
import { ContactType } from "../../../types"
import { useEffect } from "react"
import { postContact, putContact } from "../../../service/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "../../../libs/schemas"

type Props = {
    edited?:ContactType
    onEdit?:(contact:ContactType) => void
    onAdd?:(contact:ContactType) => void
}
type Inputs = {
    name: ContactType["name"]
    email: ContactType["email"]
    phoneNumber: ContactType["phoneNumber"]
}

type Keys = "name" | "email" | "phoneNumber"
export default function ContactEditForm({ edited, onEdit, onAdd }:Props){
    const { handleSubmit, register, setValue, reset, formState:{ errors } } = useForm<Inputs>({ resolver:zodResolver(contactSchema.omit({ id:true, avatarUrl:true })) })

    useEffect(()=> {
        if(edited !== undefined) {
            for (const key of Object.keys(edited)) {
                if(["name", "email", "phoneNumber"].includes(key)){
                    const KEY = key as Keys
                    setValue(KEY, edited[KEY])
                }
                
            }
        } else {
            reset()
        }
    }, [edited])
    return (
        <form onSubmit={handleSubmit(async (data)=>{
            
            if(edited){
                const contact = await putContact(edited.id, data)
                onEdit && onEdit(contact)
                reset()
            } else {
                const contact = await postContact({ ...data})
                onAdd && onAdd(contact)
                reset()
            }
        })}>
            <label className="input">
                <span>Nombre:</span>
                <input type="text" {...register("name")} />
                { errors.name && <p className="error">{errors.name.message}</p> }
            </label>
            <label className="input">
                <span>Correo: </span>
                <input type="text" {...register("email")} />
                { errors.email && <p className="error">{errors.email.message}</p> }
            </label>
            <label className="input">
                <span>Número: </span>
                <input type="text" {...register("phoneNumber")} />
                { errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p> }
            </label>
            <div>
                <button className="btn">Guardar</button>
                
            </div>
        </form>
    )
}