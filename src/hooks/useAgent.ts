import { create } from "zustand"
import { AgentType } from "../types";
import { useEffect } from "react";
import { deleteAgent, getAgents, postAgent, putAgent } from "../service/api";

type AgentStoreState = {
    agents: AgentType[]
    setAgents: (agents: AgentType[]) => void
    addAgent: (agent: AgentType) => void
    deleteAgent: (id: number) => void
    editAgent: (id: number, newAgentData: Partial<AgentType>) => void
}
const useAgentStore = create<AgentStoreState>((set) =>({
    agents:[],
    setAgents: (agents) => set({ agents }),
    addAgent: (agent) => set((state) => ({ agents: [...state.agents, agent] })),
    deleteAgent: (id) => set((state) => ({ agents: state.agents.filter((agent) => agent.id !== id) })),
    editAgent: (id, newAgentData) =>
        set((state) => ({
            agents: state.agents.map((agent) =>
                agent.id === id ? { ...agent, ...newAgentData } : agent
            ),
        })),
}))

const useAgent = () => {
    const store = useAgentStore()
    const { agents } = store

    useEffect(()=>{
        const getData = async () => {
            const agents = await getAgents()
            store.setAgents(agents)
        }
        getData()
    }, [])


    return {
        agents,
        addAgent: async(newAgent:Omit<AgentType, "id">) => {
            const provId = -2
            store.addAgent({...newAgent, id:provId})
            try{
                const agent = await postAgent(newAgent)
                store.editAgent(provId, agent)
            } catch(e){
                store.deleteAgent(provId)
                throw e
            }
        },
        editAgent: async(id:AgentType["id"], newData:Partial<AgentType>) => {
            const agent = await putAgent(id, newData)
            store.editAgent(id, agent)
        },
        deleteAgent: async(id:AgentType["id"]) => {
            await deleteAgent(id)
            store.deleteAgent(id)
        }
    }
}

export { useAgentStore, useAgent }