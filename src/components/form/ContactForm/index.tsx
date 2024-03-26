import { useForm } from "react-hook-form"
import { ContactType } from "../../../types"
import { useEffect } from "react"
import { postContact, putContact } from "../../../service/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "../../../libs/schemas"
import NormalInput from "../inputs/NormalInput"
import styles from "./contactForm.module.css"
import FileInput from "../inputs/FileInput"
import { z } from "zod"
import { convertFileToBase64 } from "../../../service/file"

type Props = {
    edited?:ContactType
    onEdit?:(contact:ContactType) => void
    onAdd?:(contact:ContactType) => void
}
type Inputs = {
    name: ContactType["name"]
    email: ContactType["email"]
    phoneNumber: ContactType["phoneNumber"]
    picture:File
}

type Keys = "name" | "email" | "phoneNumber"
const resolver = zodResolver(contactSchema.omit({ id:true, avatarUrl:true }).extend({ picture:z.any() }))

export default function ContactEditForm({ edited, onEdit, onAdd }:Props){
    const { control, handleSubmit, setValue, reset } = useForm<Inputs>({ resolver })

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
        <form className={styles.form} onSubmit={handleSubmit(async ({ picture, ...data})=>{
            if(edited){
                const contact = await putContact(edited.id, {...data})
                onEdit && onEdit(contact)
                reset()
            } else {
                const contact = await postContact({...data, picture:await convertFileToBase64(picture)})
                onAdd && onAdd(contact)
                reset()
            }
        })}>
            <NormalInput control={control} name="name" label="Nombre" />
            <NormalInput control={control} name="email" label="Correo" />
            <NormalInput control={control} name="phoneNumber" label="Número de teléfono" />
            <FileInput control={control} name="picture" label="Imagen" />
            <div>
                <button className="btn primary">Guardar</button>
                
            </div>
        </form>
    )
}