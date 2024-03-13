const baseURL = import.meta.env.VITE_SSE_URL

export function getEventSource(){
    return new EventSource(baseURL, { withCredentials:true })
}