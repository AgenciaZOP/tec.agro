import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { Account } from "./Account"
import { InfoDetails } from "./InfoDetails"
import { useLocation } from "react-router-dom"
import { Header } from "./Header"
import { useHeader } from "../hooks/useHeader"

interface MyBusinessProps {
    business: Business
}

export const MyBusiness: React.FC<MyBusinessProps> = ({ business }) => {
    const location = useLocation()
    const header = useHeader()

    useEffect(() => {
        header.setTitle("Meu Negócio")
    })
    return (
        <>
            <Header />
            <Box
                sx={{
                    width: "100%",
                    gap: "3vw",
                    flexDirection: "column",
                    overflow: "auto",
                    padding: "20vw 0"
                }}
            >
                <Account object={business} editingMode={!!location.state?.editing} />
                <InfoDetails object={business} editingMode={!!location.state?.editing} />
            </Box>
        </>
    )
}
