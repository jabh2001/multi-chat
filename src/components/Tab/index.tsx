import { createContext, useContext, useEffect, useState } from "react"
import style from "./index.module.css"

const context = createContext<{ value:any, setValue:(value:any)=>void}>({ value:0, setValue:(_:any) => {}})

function Tabs({ children, value, setValue }:{ children:any, value?:any, setValue?:(value:any)=>void}){
    const [ intValue, setIntValue ] = useState<any>(value ?? 0)
    useEffect(()=> {
        setIntValue(value)
    }, [value])
    return (
        <context.Provider value={{ value:intValue, setValue:(value) => setValue ? setValue(value) : setIntValue(value)}}>
            <div className={style.radioInputs}>
                {children}
            </div>
        </context.Provider>
    )
}

function Tab({ value, name, notifications=0 }:{ value:any, name:string, notifications?:number }){
    const { value:selectedValue, setValue} = useContext(context)
    return (
        <label className={style.radio}>
            <input type="radio" name="radio" checked={selectedValue === value} onChange={(e) => setValue((v:any) => e.target.checked ? value : v)} />
            <span className={style.name}>
                {name}
                { !!notifications && <span className={style.notifications}>{notifications}</span> }
            </span>
        </label>
    )
}
export {
    Tabs,
    Tab
}