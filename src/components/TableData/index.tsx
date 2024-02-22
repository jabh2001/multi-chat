import { useCallback, useEffect, useState } from "react";
import OrderIcon from "../icons/OrderIcon";
import styles from "./index.module.css"
type TableColumnType = {
    title:string
    name: string;
    isPrimary?: boolean;
    type:"string" | "number" 
}

type Props = {
    columns:Array<TableColumnType>,
    data:Array<any>
}
type OrderType = {
    prop:string
    dir:"up" | "down" | "neutral"
}
export default function TableData({ columns, data }:Props){
    const [ copyData, setCopyData ] = useState<Array<any>>([...data])
    const [ order, setOrder] = useState<OrderType>({ prop:"none", dir:"up" })
    const switchDir = useCallback(() => setOrder(old => ({...old, dir:old.dir=="up" ? "down": "up" })), [setOrder])
    useEffect(() => {
        if(order.prop !== "none"){
            let sortedData = [...copyData]
            const { prop, dir } = order
            sortedData.sort((rowA, rowB) => {
                const compare = dir == "up" ? rowA[prop] > rowB[prop] : rowA[prop] < rowB[prop]
                return rowA[prop] == rowB[prop] ? 0 : compare ? 1 : -1
            })
            
            setCopyData(sortedData)
        }
    }, [order])

    const handleOrder = (name:string) => {
        if(order.prop!=name){
            setOrder({ prop:name, dir:"up" })
        } else {
            switchDir()
        }
    }
    return (
        <table className={styles.table} style={{ ["--cols" as any]:columns.length, ["--bg-head" as any]: "#639bdf"}}>
            <thead className={styles.head}>
                <tr className={styles.row}>
                    {
                        columns.map((column) => (
                            <th className={styles.col} key={`table_head_${column.name}`}>
                                {column.title}
                                <button onClick={()=>handleOrder(column.name)}>
                                    <OrderIcon order={order.prop == column.name ? order.dir : "neutral" } />
                                </button>
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className={styles.body}>
                {
                    copyData.map((row, index) => (
                        <tr className={styles.row} key={`${index}_${JSON.stringify(row)}`}>
                            {
                                columns.map((column) => (
                                    <td className={styles.col} key={`table_row_${column.name}`}>{row[column.name]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}