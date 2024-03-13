import { createContext, useContext } from "react";

export const context = createContext<EventSource | null>(null)

export const useSSE = () => useContext(context)