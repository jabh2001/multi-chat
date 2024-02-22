import ProviderCard from "../../../../components/cards/ProviderCard"
import useAgentStore from "../../../../hooks/useAgentStore"
import styles from "./index.module.css"

export function ChooseChannelView(){
    return (
        
        <View title="Choose a channel">
            <div className={styles.providerContainer}>
                <ProviderCard
                        title="WhatsApp"
                        src="https://assets.dryicons.com/uploads/icon/svg/8401/02dbf6c2-8309-4e89-8ff6-a7ea954b78c1.svg"
                        to="/config/inboxes/new/whats-app"
                    />
                    <ProviderCard
                        title="Telegram"
                        src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png"
                        to="/config/inboxes/new/telegram"
                    />
                    <ProviderCard
                        title="Api"
                        src="https://w7.pngwing.com/pngs/1020/679/png-transparent-application-programming-interface-computer-icons-api-management-world-wide-web-text-rectangle-logo.png"
                        to="/config/inboxes/new/api"
                    />
            </div>
        </View>
    )
}

export function ChannelView({ nextStep }:{ nextStep:()=>void}){
    return (
        <View title="Set a inbox data">
            <div>
                <input type="text" placeholder="Inbox name" />
                <h4>Scan the QR</h4>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR" />
                <button className="btn primary" onClick={nextStep}>Next step</button>
            </div>
        </View>
    )
}

export function AddAgents({ nextStep }:{ nextStep:()=>void}){
    const agents = useAgentStore(state => state.agents)
    return (
        <View title="Choose collaborators ">
            <div className={styles.agentsContainer}>
                <h4>Agents</h4>
                <div>
                    { agents.map(agent=>(
                        <label className={styles.checkbox} key={`agents_${agent.id}`}>
                            <span>{agent.name}</span>
                            <input type="checkbox" />
                        </label>
                    )) }
                </div>
                <div>
                    <button className="btn primary" onClick={nextStep}>Next step</button>
                </div>
            </div>
        </View>
    )
}
export function FinishView(){
    return (
        <View title="Inbox was created ">
            <div>
                
            </div>
        </View>
    )
}

function View({ title, children }:any){
    return (
        <div className={styles.viewContainer}>
            <div className={styles.viewTitle}>
                <h3>{title}</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum error nulla perferendis illum explicabo quisquam, voluptate provident excepturi sunt modi fuga, temporibus eos odio! Tenetur aliquid esse sed voluptatum. Necessitatibus.
                </p>
            </div>
            <div className={styles.viewMain}>
                {children}
            </div>
        </div>
    )
}