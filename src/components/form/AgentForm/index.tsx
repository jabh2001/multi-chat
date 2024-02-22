import styles from "./index.module.css"

export default function AgentForm(){
    return (
        <form className={styles.form} onSubmit={(evt) => evt.preventDefault()}>
            <div>
                <h3 className={styles.title}>Crea un nuevo agente</h3>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate debitis, ipsa vitae commodi molestiae totam nesciunt odio reprehenderit beatae laudantium perspiciatis animi atque. Mollitia odit deleniti illum aperiam suscipit labore.
                </p>
            </div>
            <div className={styles.inputsContainer}>
                <label className="input">
                    <span>Nombre</span>
                    <input type="text" />
                </label>
                <label className="input">
                    <span>Correo</span>
                    <input type="text" />
                </label>
                <label className="input">
                    <span>Rol</span>
                    <select>
                        <option value="admin">Administrador</option>
                        <option value="agente">Agente</option>
                    </select>
                </label>
            </div>
            <div className={styles.buttonsContainer}>
                <button className="btn primary">Next</button>
                <button className="btn secondary">Clear</button>
            </div>
        </form>
    )
}