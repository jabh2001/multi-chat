import { Control, Controller, useForm } from "react-hook-form"
import codes from "../../../constantes"
import Select from "./Select"
import NormalInput from "./NormalInput"
import Option from "./Option"
import styles from "./index.module.css"
import { useEffect } from "react"

type Props = {
    label:string
    name:string
    control: Control<any, any, any>
}
export default function PhoneNumberInput({label, name, control}:Props){
    
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => {

                const { onChange } = field
                const { control, watch } = useForm<{code:string, number:number}>()

                useEffect(() => {
                  const subscription = watch(({ code, number }) =>
                    onChange(`${code}${number}`)
                  )
                  return () => subscription.unsubscribe()
                }, [watch])

                return (
                    <label className={styles.phoneNumber}>
                        <Select control={control}  label="Cod"name="code" search>
                                {
                                    codes.map((code,index) =>(
                                        <Option
                                            label={code}
                                            key={index} 
                                            value={code}
                                        />
                                    ))
                                }
                        </Select>
                        <NormalInput control={control} name="number" label={label} />
                    </label>
                )
            }}
        />
    )
}

// const regex = /^\+[1-9]{1}[0-9]{3,14}$/