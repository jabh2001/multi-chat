import { SubmitHandler, useForm } from "react-hook-form"
import { AgentType, UserType } from "../../../types"
import styles from "./index.module.css"
import { useAgent } from "../../../hooks/useAgent"
import { useEffect } from "react"

type Inputs = {
    name:string
    email:string
    role:"admin" | "agent"
}
type Keys = "name" | "email" | "role"

export default function AgentForm({ edited, resetEdited }:{ edited:AgentType | UserType | undefined, resetEdited:()=>void }){
    const { register, handleSubmit, reset, setValue } = useForm<Inputs>()
    const {addAgent, editAgent} = useAgent()
    const onSubmit:SubmitHandler<Inputs> = async ({ name, email, role }) => {
        try{
            if(edited){
                await editAgent(edited.id,{ name, email, role })
            } else {
                await addAgent({ name, email, role, teams:[] })
            }
        } finally {
            reset()
            resetEdited && resetEdited()
        }

    }
    useEffect(()=>{
        if(edited){
            for (const key of Object.keys(edited)) {
                if(["name", "email", "role"].includes(key)){
                    setValue(key as Keys, edited[key as Keys])
                }
                
            }
        }
    }, [edited])
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3 className={styles.title}>Crea un nuevo agente</h3>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate debitis, ipsa vitae commodi molestiae totam nesciunt odio reprehenderit beatae laudantium perspiciatis animi atque. Mollitia odit deleniti illum aperiam suscipit labore.
                </p>
            </div>
            <div className={styles.inputsContainer}>
                <label className="input">
                    <span>Nombre</span>
                    <input type="text" {...register("name")} />
                </label>
                <label className="input">
                    <span>Correo</span>
                    <input type="text" {...register("email")} />
                </label>
                <label className="input">
                    <span>Rol</span>
                    <select {...register("role")}>
                        <option value="admin">Administrador</option>
                        <option value="agente">Agente</option>
                    </select>
                </label>
            </div>
            <div className={styles.buttonsContainer}>
                <button className="btn primary">Next</button>
                <button className="btn secondary">Clear</button>
            </div>
        </form>
    )
}