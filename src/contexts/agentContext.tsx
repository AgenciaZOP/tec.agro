import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface AgentsContextValue {
    agents: Agent[]
    setAgents: (value: Agent[]) => void

    loading: boolean
    setLoading: (value: boolean) => void
}

interface AgentsProviderProps {
    children: React.ReactNode
}

const AgentsContext = createContext<AgentsContextValue>({} as AgentsContextValue)

export default AgentsContext

export const AgentsProvider: React.FC<AgentsProviderProps> = ({ children }) => {
    const io = useIo()

    const [agents, setAgents] = useState<Agent[]>([])
    const [loading, setLoading] = useState(true)

    io.on("agent:list", (data: Agent[]) => {
        setAgents(data)
        setLoading(false)
    })

    io.on("agent:new", (agent: Agent) => {
        console.log({ agent })
        setAgents([...agents, agent])
    })

    useEffect(() => {
        console.log({ agents })
    }, [agents])

    return <AgentsContext.Provider value={{ agents, setAgents, loading, setLoading }}>{children}</AgentsContext.Provider>
}
