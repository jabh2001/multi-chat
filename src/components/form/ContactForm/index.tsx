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
import codes from "../../../constantes"
import Select from "../inputs/Select"
import Option from "../inputs/Option"

type Props = {
    edited?: ContactType
    onEdit?: (contact: ContactType) => void
    onAdd?: (contact: ContactType) => void
}
type Inputs = {
    name: ContactType["name"]
    email: ContactType["email"]
    phoneNumber: ContactType["phoneNumber"]
    countryCode: ContactType["countryCode"]
    picture: File
}

type Keys = "name" | "email" | "phoneNumber" 
const resolver = zodResolver(contactSchema.omit({ id: true, avatarUrl: true }).extend({ picture: z.any() }))

export default function ContactEditForm({ edited, onEdit, onAdd }: Props) {
    const { control, handleSubmit, setValue, reset } = useForm<Inputs>({ resolver })

    useEffect(() => {
        if (edited !== undefined) {
            for (const key of Object.keys(edited)) {
                console.log('llaves', Object.keys(edited))
                if (["name", "email", "phoneNumber", ].includes(key)) {
                    const KEY = key as Keys
                    setValue(KEY, edited[KEY])
                }
            }
        } else {
            reset()
        }
    }, [edited])
    return (
        <form className={styles.form} onSubmit={handleSubmit(async ({ picture, countryCode,...data }) => {
            console.log(data, countryCode)
            if (edited) {
                const contact = await putContact(edited.id, { ...data, picture: await convertFileToBase64(picture) })
                onEdit && onEdit(contact)
                reset()
            } else {
                const phoneNumber = data.phoneNumber;
                const parsedPhoneNumber = parseInt(phoneNumber);

                if (isNaN(parsedPhoneNumber)) {
                    throw new Error('El número de teléfono no es válido.');
                }

                // const contact = await postContact({...data, picture:await convertFileToBase64(picture)})
                // onAdd && onAdd({...contact, avatarUrl:convertBase64ToImgString(contact.avatarUrl)})
                // reset()
            }
        })}>
            <NormalInput control={control} name="name" label="Nombre" />
            <NormalInput control={control} name="email" label="Correo" />
            <Select control={control}  label="country code"name="countryCode">
                    {
                        codes.map((code,index) =>(<Option
                        label={code}
                        key={index} 
                        value={code}
                        ></Option>))
                    }
            </Select>
            <NormalInput control={control} name="phoneNumber" label="Número de teléfono" />


            <FileInput accept="image/png" control={control} name="picture" label="Imagen" />
            <div>
                <button className="btn primary">Guardar</button>

            </div>
        </form>
    )
}