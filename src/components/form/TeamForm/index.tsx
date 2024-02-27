import { SubmitHandler, useForm } from "react-hook-form"
import { TeamType } from "../../../types"
import styles from "./index.module.css"
import { useTeam } from "../../../hooks/useTeamStore"
import { useEffect } from "react"

type Inputs = {
    name:string
    description:string
}
type Keys = "name" | "description"

export default function TeamForm({ edited, resetEdited }:{ edited:TeamType | undefined, resetEdited:()=>void }){
    const { register, handleSubmit, reset, setValue } = useForm<Inputs>()
    const {addTeam, editTeam} = useTeam()
    const onSubmit:SubmitHandler<Inputs> = async ({ name, description }) => {
        try{
            if(edited){
                await editTeam(edited.id,{ name, description })
            } else {
                await addTeam({ name, description })
            }
        } finally {
            reset()
            resetEdited && resetEdited()
        }

    }
    useEffect(()=>{
        if(edited){
            for (const key of Object.keys(edited)) {
                if(["name", "description"].includes(key)){
                    setValue(key as Keys, edited[key as Keys])
                }
                
            }
        }
    }, [edited])
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3 className={styles.title}>Crea un nuevo equipo</h3>
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
                    <span>Descripción</span>
                    <textarea cols={30} rows={10} {...register("description")}></textarea>
                </label>
            </div>
            <div className={styles.buttonsContainer}>
                <button className="btn primary">Guardar</button>
                <button className="btn secondary">Cancelar</button>
            </div>
        </form>
    )
}