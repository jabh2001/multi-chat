import { create } from "zustand";
import { TeamType } from "../types";
import { useEffect } from "react";
import { deleteTeam, getTeams, postTeam, putTeam } from "../service/api";

type TeamStoreType = {
    firstFetch:boolean,
    teams: TeamType[]
    setTeams: (teams: TeamType[]) => void
    addTeam:(team: TeamType) => void
    updateTeam:(id:TeamType["id"], newData:Partial<TeamType>) => void
    deleteTeam:(id:TeamType["id"]) => void
}

const useTeamStore = create<TeamStoreType>((set) =>({
    firstFetch:true,
    teams: [],
    setTeams : (teams)=>set(()=>({ teams})),
    addTeam:(team) => set(state => ({ teams:[...state.teams, team]})),
    updateTeam:(id,newData)=>set(state => ({...state, teams:state.teams.map(t => t.id === id ? { ...t , ...newData} : {...t})})),
    deleteTeam: (id) => set((state) => ({ teams: state.teams.filter((teams) => teams.id !== id) })),
}))

const useTeam = ()=>{
    const store = useTeamStore()
    const {firstFetch, teams} = store

    useEffect(()=>{
        if(firstFetch){
            const getData = async () => {
                const teams = await getTeams()
                store.setTeams(teams)
            }
            getData()
        }
    }, [])


    return {
        teams,
        addTeam: async(newTeam:Omit<TeamType, "id">) => {
            const provId = -2
            store.addTeam({...newTeam, id:provId})
            try{
                const team = await postTeam(newTeam)
                store.updateTeam(provId, team)
            } catch(e){
                store.deleteTeam(provId)
                throw e
            }
        },
        editTeam: async(id:TeamType["id"], newData:Partial<TeamType>) => {
            const team = await putTeam(id, newData)
            store.updateTeam(id, team)
        },
        deleteTeam: async(id:TeamType["id"]) => {
            await deleteTeam(id)
            store.deleteTeam(id)
        }
    }
}

export default useTeamStore

export {
    useTeam,
    useTeamStore
}