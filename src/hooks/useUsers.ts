import { useContext } from "react"
import UsersContext from "../contexts/usersContext"

export const useUsers = () => {
    const usersContext = useContext(UsersContext)
    const update = (user: User) => {
        usersContext.setUsers([...usersContext.users.filter((item) => item.id != user.id), user])
    }
    return { ...usersContext, update }
}
