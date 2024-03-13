import axios from "axios";
import { AgentType, ContactType, ConversationType, InboxType, LabelType, MessageType, SocialMediaType, TeamType } from "../types";

const baseURL = import.meta.env.VITE_API_URL

const instance = axios.create({ baseURL, withCredentials:true })

export async function testCookie(){
    await instance.post("/login", {"email":import.meta.env.VITE_ADMIN_EMAIL, "password":import.meta.env.VITE_ADMIN_PASSWORD})
}
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
export async function getAgentTeam(id:AgentType["id"]){
    const { data } = await instance.get<{ teams:TeamType[] }>(`/agent/${id}/teams`)
    const { teams } = data
    return teams
}
export async function putAgentTeam(id:AgentType["id"], teamIds:TeamType["id"][]){
    const { data } = await instance.put<{ teams:TeamType[] }>(`/agent/${id}/teams`, teamIds)
    const { teams } = data
    return teams
}
/************************************* CONTACTS ******************************************************************/
export async function getContacts(label:undefined | number = undefined) {
    const { data } = await instance.get<{ contacts:ContactType[]}>("/contact", { params:{label}})
    const { contacts } = data
    return contacts
}
export async function getContactById(contactId:number) {
    const { data } = await instance.get<{contact:ContactType}>("/contact/" + contactId )
    const { contact } = data
    return contact
}
export async function postContact(contact:Partial<ContactType>) {
    const { data } = await instance.post<{ contact:ContactType}>("/contact", contact)
    const { contact:newContact } = data
    return newContact
}
export async function putContact(id:ContactType["id"], newData:Partial<ContactType>) {
    const { data } = await instance.put<{ contact:ContactType}>("/contact/" + id, newData)
    const { contact } = data
    return contact
}
export async function deleteContact(id:ContactType["id"]) {
    const { data } = await instance.delete<{ contact:ContactType}>("/contact/" + id)
    const { contact } = data
    return contact
}
export async function getContactLabel(id:ContactType["id"]){
    const { data } = await instance.get<{ labels:LabelType[]}>("/contact/" + id + "/labels")
    const { labels } = data
    return labels
}
export async function putContactLabel(id:ContactType["id"], labelIds:LabelType["id"][]){
    const { data } = await instance.put<{ labels:LabelType[]}>("/contact/" + id + "/labels",labelIds)
    const { labels } = data
    return labels
}
export async function getSocialMedia(id:ContactType["id"]) {
    const { data } = await instance.get<{ socialMedia:SocialMediaType[]}>(`/contact/${id}/social-media`)
    const { socialMedia } = data
    return socialMedia
}
export async function postSocialMedia(id:ContactType["id"], newData:Omit<SocialMediaType, "id">) {
    const { data } = await instance.post<{ socialMedia:SocialMediaType}>(`/contact/${id}/social-media`, newData)
    const { socialMedia } = data
    return socialMedia
}
export async function putSocialMedia(contactId:ContactType["id"], socialMediaId:SocialMediaType["id"], newData:Partial<SocialMediaType>) {
    const { data } = await instance.put<{ socialMedia:SocialMediaType}>(`/contact/${contactId}/social-media/${socialMediaId}`, newData)
    const { socialMedia } = data
    return socialMedia
}
/************************************* CONVERSATIONS ******************************************************************/

export async function getInboxes(){
    const { data } = await instance.get<{ inboxes:InboxType[] }>( "/inbox" )
    return data.inboxes
}

export async function postInbox(inbox:{ name:string, channelType:string}){
    const { data } = await instance.post<{ inbox:InboxType }>( "/inbox", inbox )
    return data.inbox
}
export async function getAllConversations(){
    const { data } = await instance.get<{ conversations:ConversationType[] }>( "/conversation" )
    return data.conversations
}

export async function getAllMessage(inboxId:InboxType["id"], conversationId:ConversationType["id"]){
    const { data } = await instance.get<{ messages:MessageType[] }>(`/inbox/${inboxId}/conversation/${conversationId}/message`)
    return data.messages
}