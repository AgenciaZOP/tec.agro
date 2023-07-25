import { useContext } from "react"
import ShippingsContext from "../contexts/shippingContext"
import { useIo } from "./useIo"

export const useShippings = () => {
    const io = useIo()
    const shippingsContext = useContext(ShippingsContext)

    const newShipping = (data: Shipping & { file: File }) => {
        console.log(data)

        shippingsContext.setLoading(true)
        io.emit("shipping:new", data)
    }

    return { ...shippingsContext, new: newShipping }
}
