import React from "react"
import { Box } from "@mui/material"
import { Account } from "./Account"
import { InfoDetails } from "./InfoDetails"
import { useLocation } from "react-router-dom"
import { Header } from "./Header"

interface MyBusinessProps {
    business: Business
}

export const MyBusiness: React.FC<MyBusinessProps> = ({ business }) => {
    const location = useLocation()
    return (
        <>
            <Header />
            <Box
                sx={{
                    width: "100%",
                    gap: "3vw",
                    flexDirection: "column",
                    overflow: "auto",
                    padding: "0 8vw",
                    paddingBottom: "5vw",
                }}
            >
                <Account object={business} editingMode={!!location.state?.editing} />
                <InfoDetails object={business} editingMode={!!location.state?.editing} />
            </Box>
        </>
    )
}
