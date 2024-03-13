import { useEffect, useState } from "react";
import { context } from "../../hooks/useSSE";
import { getEventSource } from "../../service/sse";

export default function SSEProvider({ children }: { children:JSX.Element}){
    const [ SSE, setSSE ] = useState<EventSource | null>(null)
    useEffect(()=>{
        const evtSrc = getEventSource()
        setSSE(evtSrc)
        return () => evtSrc.close()
    }, [])
    return (
        <context.Provider value={SSE}>
            {children}
        </context.Provider>
    )
}