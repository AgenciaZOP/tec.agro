import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { Account } from "./Account"
import { InfoDetails } from "./InfoDetails"
import { useLocation } from "react-router-dom"
import { useHeader } from "../hooks/useHeader"

interface MyShippingProps {
    shipping: Shipping
}

export const MyShipping: React.FC<MyShippingProps> = ({ shipping }) => {
    const location = useLocation()
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Perfil")
    }, [])
    return (
        <Box
            sx={{
                width: "100%",
                gap: "3vw",
                flexDirection: "column",
                overflow: "auto",
                paddingBottom: "5vw",
            }}
        >
            <Account object={shipping} editingMode={!!location.state?.editing} />
            <InfoDetails object={shipping} editingMode={!!location.state?.editing} />
        </Box>
    )
}
