
import { createContext, useContext, useEffect, useRef } from "react"
import { useCallback, useState } from "react"
import styles from "./index.module.css"
type TabsContext = {
    registryTab:(id:symbol) => void
    deleteTab:(id:symbol)=>void
}
const context = createContext<TabsContext>({ registryTab(){}, deleteTab(){} })

export function TabsSlider({ children, page=1 }:{ children:React.ReactNode, page?:number}){
    const [ tabs, setTabs] = useState<Set<symbol>>(new Set())

    const registryTab = useCallback((name:symbol) => {
        if(!tabs.has(name)){
            setTabs(tabs => new Set([...tabs, name]))
        }
    }, [setTabs, tabs])

    const deleteTab = useCallback((name:symbol) => {
        if(tabs.has(name)){
            tabs.delete(name)
            setTabs(tabs => new Set(tabs))
        }
    }, [setTabs, tabs])

    return (
        <context.Provider value={{ registryTab, deleteTab }}>
            <div className={styles.tabsView}>
                <div
                    className={styles.tabs}
                    style={{ 
                        ["--tabs" as any]:tabs.size, 
                        ["--page" as any]:page - 1,
                    }}
                >
                    { children }
                </div>
            </div>
        </context.Provider>
    )
}
export function Tab({ children }:any){
    const refId = useRef(Symbol())
    const { registryTab, deleteTab } = useContext(context)
    useEffect(()=>{
        registryTab(refId.current)
        return () => deleteTab(refId.current)
    }, [])
    return (
        <div className={styles.tab}>
            { children }
        </div>
    )
}