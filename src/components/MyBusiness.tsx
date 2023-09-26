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
                    <Account object={business} editingMode={!!location.state?.editing} />
                    <InfoDetails object={business} editingMode={!!location.state?.editing} />
                </Box>
            </Box>
        </>
    )
}
