import ArrowIcon from "../icons/ArrowIcon";
import CloseIcon from "../icons/CloseIcon";
import GlassIcon from "../icons/GlassIcon";
import styles from "./index.module.css"

type Props = {
    placeholder:string
    value?:string
    onChange?:(value: string) => void
    onRemove?:()=>void
    onSearch?:()=>void
}
export default function SearchBar({ placeholder, value, onChange, onRemove, onSearch }:Props){
    return (
            <label className={styles.container}>
                <div className={styles.iconContainer}>
                    <GlassIcon />
                </div>
                <input className={styles.input} type="text" placeholder={placeholder} value={value} onChange={evt => onChange && onChange(evt.target.value)} />
                <button className={styles.closeContainer} onClick={onRemove}>
                    <CloseIcon />
                </button>
                <button className={styles.arrowContainer} onClick={onSearch}>
                    <ArrowIcon />
                </button>
            </label>
    )
}