import { FC } from "react";
import './chatLayaout.css'
import IncomingMessage from "../incomingMessage/incomingMessage";
import OutgoingMessage from "../outgoingMessage/outgoingMessage";
import Asigned from "../asigned/asigned";
import MesaggeForm from "../messageForm/messageForm";
export const ChatLayout: FC = () => {
    return <div className="layaout">
        <section className="allMessages" style={{ overflowY: 'auto', maxHeight: '400px' }}>
            <IncomingMessage message="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!"/>
            <Asigned />
            <OutgoingMessage message="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!"/>
        </section>
        <MesaggeForm />
    </div>
}
