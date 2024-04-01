import { createContext, useContext } from "react"

type Context = {
    name:string
    value:number | string
    setValue:(value:{ value:any, label:string}) => any
}
export const selectContext = createContext<Context>({ name:"", value:"", setValue:()=>{}})
export const useMultiSelect = () => useContext(selectContext)