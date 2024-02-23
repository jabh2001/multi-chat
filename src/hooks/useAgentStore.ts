import { create } from "zustand"
type Agent = {
    id: number;
    name: string;
    type:"agent" | "admin";
    email:string
}
type AgentStoreState = {
    agents: Agent[];
    setAgents: (agents: Agent[]) => void;
    addAgent: (agent: Agent) => void;
    deleteAgent: (id: number) => void;
    editAgent: (id: number, newAgentData: Partial<Agent>) => void;
}
const useAgentStore = create<AgentStoreState>((set) =>({
    agents:[
        { id: 1, name: "Jhonder Bastidas", type: "admin", email: "jhonder@example.com" },
        { id: 2, name: "Reina", type: "agent", email: "reina@example.com" },
        { id: 3, name: "John Doe", type: "agent", email: "john@example.com" },
        { id: 4, name: "Jane Smith", type: "agent", email: "jane@example.com" }
    ],
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

export default useAgentStore