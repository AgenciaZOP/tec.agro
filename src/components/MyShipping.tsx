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
                flexDirection: "column",
                height: "100%",
                width: "100%",
                padding: "20vw 0",
                gap: "4vw",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    padding: "4vw",
                    flexDirection: "column",
                    gap: "2vw",
                    overflow: "auto",
                }}
            >
                <Account object={shipping} editingMode={!!location.state?.editing} />
                <InfoDetails object={shipping} editingMode={!!location.state?.editing} />
            </Box>
        </Box>
    )
}
