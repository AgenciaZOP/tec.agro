import { useIo } from "./useIo"

export const useSignup = () => {
    const io = useIo()

    const signup = (data:User) => {
        io.emit("user:signup", data)
    }

    return signup
}