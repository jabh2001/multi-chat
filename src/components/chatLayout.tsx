import { FC } from "react";
import '../styles/chatLayaout.css'
import IncomingMessage from "./incomingMessage";
import Asigned from "./asigned";
import OutgoingMessage from "./outgoingMessage";
import MesaggeForm from "./mesajeForm";
export const ChatLayout: FC = () => {
    return <div className="layaout">
        <section className="allMessages" style={{ overflowY: 'auto', maxHeight: '400px' }}>
            <IncomingMessage message="esto es un mensaje de otra persona" />
            <Asigned />
            <OutgoingMessage message="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores quas, accusamus ad earum cupiditate enim expedita, tempora saepe numquam eaque doloremque est! Amet itaque laboriosam ea odio maxime sapiente!

"/>
        </section>
        <MesaggeForm />
    </div>
}
