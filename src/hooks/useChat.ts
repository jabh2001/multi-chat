import { useCallback } from "react";
import { MessageType } from "../types";
import { useLocalStorage } from "./useLocalStorage";

type Key = string | number | boolean
type Params = {
    key: Key[];
}
export default function useChat({ key }:Params){
    const [messages, setMessages] = useLocalStorage<MessageType[]>(["multiChat", "conversation", "message", ...key].join("-"), [], { serializer:obj => JSON.stringify(obj), deserializer:(str) => JSON.parse(str) })

    const pushMessages = useCallback((...message:MessageType[])=>{
        setMessages(prev =>[...prev, ...message]);
    }, [setMessages])

    const insertMessages = useCallback((...message:MessageType[])=>{
        setMessages(prev =>[...message, ...prev]);
    }, [setMessages])


    return {
        messages,
        setMessages,
        pushMessages,
        insertMessages
    }
}