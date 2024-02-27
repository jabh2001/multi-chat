import axios from "axios";
import { AgentType, LabelType, TeamType } from "../types";

const baseURL = import.meta.env.VITE_API_URL

const instance = axios.create({ baseURL, withCredentials:true })

/************************************* LABELS ******************************************************************/
export async function getLabels() {
    const { data } = await instance.get<{ labels:LabelType[]}>("/label")
    const { labels } = data
    return labels
}
export async function postLabel(label:Omit<LabelType, "id">) {
    const { data } = await instance.post<{ label:LabelType}>("/label", label)
    const { label:newLabel } = data
    return newLabel
}
export async function putLabel(id:LabelType["id"], newData:Partial<LabelType>) {
    const { data } = await instance.put<{ label:LabelType}>("/label/" + id, newData)
    const { label } = data
    return label
}
export async function deleteLabel(id:LabelType["id"]) {
    const { data } = await instance.delete<{ label:LabelType}>("/label/" + id)
    const { label } = data
    return label
}


/************************************* TEAMS ******************************************************************/
export async function getTeams() {
    const { data } = await instance.get<{ teams:TeamType[]}>("/team")
    const { teams } = data
    return teams
}
export async function postTeam(team:Omit<TeamType, "id">) {
    const { data } = await instance.post<{ team:TeamType}>("/team", team)
    const { team:newTeam } = data
    return newTeam
}
export async function putTeam(id:TeamType["id"], newData:Partial<TeamType>) {
    const { data } = await instance.put<{ team:TeamType}>("/team/" + id, newData)
    const { team } = data
    return team
}
export async function deleteTeam(id:TeamType["id"]) {
    const { data } = await instance.delete<{ team:TeamType}>("/team/" + id)
    const { team } = data
    return team
}


/************************************* AGENTS ******************************************************************/
export async function getAgents() {
    const { data } = await instance.get<{ agents:AgentType[]}>("/agent")
    const { agents } = data
    return agents
}
export async function postAgent(agent:Omit<AgentType, "id">) {
    const { data } = await instance.post<{ agent:AgentType}>("/agent", agent)
    const { agent:newAgent } = data
    return newAgent
}
export async function putAgent(id:AgentType["id"], newData:Partial<AgentType>) {
    const { data } = await instance.put<{ agent:AgentType}>("/agent/" + id, newData)
    const { agent } = data
    return agent
}
export async function deleteAgent(id:AgentType["id"]) {
    const { data } = await instance.delete<{ agent:AgentType}>("/agent/" + id)
    const { agent } = data
    return agent
}