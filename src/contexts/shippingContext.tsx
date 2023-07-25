import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface ShippingsContextValue {
    shippings: Shipping[]
    setShippings: (value: Shipping[]) => void

    loading: boolean
    setLoading: (value: boolean) => void
}

interface ShippingsProviderProps {
    children: React.ReactNode
}

const ShippingsContext = createContext<ShippingsContextValue>({} as ShippingsContextValue)

export default ShippingsContext

export const ShippingsProvider: React.FC<ShippingsProviderProps> = ({ children }) => {
    const io = useIo()

    const [shippings, setShippings] = useState<Shipping[]>([])
    const [loading, setLoading] = useState(true)

    io.on("shipping:list", (data: Shipping[]) => {
        setShippings(data)
        setLoading(false)
    })

    io.on("shipping:new", (shipping: Shipping) => {
        console.log({ shipping })
        setShippings([...shippings, shipping])
    })

    useEffect(() => {
        console.log({ shippings })
    }, [shippings])

    return (
        <ShippingsContext.Provider value={{ shippings, setShippings, loading, setLoading }}>
            {children}
        </ShippingsContext.Provider>
    )
}
