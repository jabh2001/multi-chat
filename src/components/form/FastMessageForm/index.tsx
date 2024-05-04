import { useForm } from "react-hook-form";
import NormalInput from "../inputs/NormalInput";
import KeyWordsInput from "./KeyWordsInput";
import MediaMessageInput from "./MediaMessageInput";
import styles from "./index.module.css"
import { useState } from "react";
import { convertFileToBase64 } from "../../../service/file";

type Inputs = {
    title:string
    keyWord:string
} & {
    [key in `fastMediaMessageText${number}`]: string;
} & {
    [key in `fastMediaMessageFile${number}`]: File;
}

export default function FastMessageForm(){
    const { control, handleSubmit } = useForm<Inputs>()
    const [quantity, setQuantity] =useState(1)
    const decrement = () => {
        setQuantity(state => state - 1)
    }
    const increment = () => {
        setQuantity(state => state + 1)
    }
    return (
        <form className={styles.container} onSubmit={handleSubmit(async (data) => {
            const { title, keyWord, ...rest } = data
            const sendData:any = { title, keyWord, messages : []}
            for (let i = 0; i < quantity; i++) {
                const file = rest[`fastMediaMessageFile${i}`]
                const text = rest[`fastMediaMessageText${i}`]
                const base64 = file ? await convertFileToBase64(file) : undefined
                const messageType = file ? "" : "text"

                sendData.messages.push({
                    text,
                    messageType,
                    base64,
                    order:i + 1,
                })
            }
            console.log({ sendData })
            /*
                AQUÍ VA EL CONSUMO A LA API
            */
        })}>
            <div className={styles.title}>
                <NormalInput control={control} name="title" label="Titulo" />  
            </div>
            <div className={styles.keyWords}>
                <KeyWordsInput name="keyWord" control={control} />
            </div>
            <div className={styles.media}>
                <div className={styles.mediaControl}>
                    <button type="button" onClick={decrement}>-</button>
                    <span>Mensajes - {quantity}</span>
                    <button type="button" onClick={increment}>+</button>
                </div>
                <MediaMessageInput name="fastMediaMessage" control={control} quantity={quantity} />
            </div>
            <div className={styles.send}>
                <button className="btn primary">Enviar</button>
            </div>
        </form>
    )
}

// Array(keyWordsCount).map((_, i) => <NormalInput key={`key-words-input-${name}-${i}`} name={`${name}-${i}`} control={control} />)