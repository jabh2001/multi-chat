import './messageForm.css'
import { FunctionComponent } from "react";


const MesaggeForm: FunctionComponent<{ addMessage:(message:string)=>void}> = ({ addMessage}) => {
    const handleSubmit:React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        const { message } = e.target as any
        addMessage(message.value)
        message.value = ""
    }
    return (
        <form className="sender" onSubmit={handleSubmit}>
            <div className="replay">
                <textarea name="message" placeholder="type the answer" />
            </div>
        </form>
    );
}

export default MesaggeForm;