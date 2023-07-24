import { useContext } from "react"
import AgentsContext from "../contexts/agentContext"
import { useIo } from "./useIo"

export const useAgents = () => {
    const io = useIo()
    const agentsContext = useContext(AgentsContext)

    const newAgent = (data: Agent & { file: File }) => {
        console.log(data)

        agentsContext.setLoading(true)
        io.emit("agent:new", data)
    }

    return { ...agentsContext, new: newAgent }
}
