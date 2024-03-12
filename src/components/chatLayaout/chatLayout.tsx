import { FC, useEffect, useState } from "react";
import style from './chatLayaout.module.css'
import IncomingMessage from "../incomingMessage/incomingMessage";
import OutgoingMessage from "../outgoingMessage/outgoingMessage";
// import Assigned from "../asigned/asigned";
import MessageForm from "../messageForm/messageForm";
import { useConversations } from "../../hooks/useConversations";
import { getAllMessage, getSocialMedia } from "../../service/api";
import { MessageType } from "../../types";

export const ChatLayout: FC = () => {
    return <div></div>
}
