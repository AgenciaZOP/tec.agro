import { createContext, useState, useEffect } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface UsersContextValue {
    users: User[]
    setUsers: (value: User[]) => void

    loading: boolean
    setLoading: (value: boolean) => void
}

interface UsersProviderProps {
    children: React.ReactNode
}

const UsersContext = createContext<UsersContextValue>({} as UsersContextValue)

export default UsersContext

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const io = useIo()

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        io.on("users:update", (data: User) => {
            setUsers((users) => [...users.filter((item) => item.id != data.id), data])
        })

        return () => {
            io.off("users:update")
        }
    }, [users])

    useEffect(() => {
        io.on("user:list", (data: User[]) => {
            setUsers(data)
        })

        return () => {
            io.off("user:list")
        }
    }, [])

    return <UsersContext.Provider value={{ users, setUsers, loading, setLoading }}>{children}</UsersContext.Provider>
}
