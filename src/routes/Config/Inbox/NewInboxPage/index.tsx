import { useEffect, useState } from "react"
import {Stepper, Step} from "../../../../components/Stepper"
import styles from "./index.module.css"
import { AddAgents, ChannelView, ChooseChannelView, FinishView } from "./views"

type Props = {
    channel?:string
}
export default function NewInboxPage({ channel }:Props){
    const [ step, setStep] = useState(channel? 2 : 1)
    const nextStep = () => setStep(step => step+1)
    useEffect(()=>{
        setStep(!channel ? 1 : step>=1 && step <=2 ? 2 : step)
    }, [channel])

    return (
        <div className={styles.container}>
            <div className={styles.stepperBar}>
                <Stepper currentStep={step}>
                    <Step title="Chose a channel" step={1}>
                        Chose provider
                    </Step>
                    <Step title="Create Inbox" step={2}>
                        Create a inbox
                    </Step>
                    <Step title="Add Agents" step={3}>
                        add the agents
                    </Step>
                    <Step title="Finish" step={4}>
                        Finish the process, and save changes 
                    </Step>
                </Stepper>
            </div>
            <div>
                { step > 1 && step < 4 && <button>prev</button> }
                { step == 1 && <ChooseChannelView /> }
                { step == 2 && <ChannelView nextStep={nextStep} /> }
                { step == 3 && <AddAgents nextStep={nextStep} /> }
                { step == 4 && <FinishView /> }
            </div>
        </div>
    )
}
