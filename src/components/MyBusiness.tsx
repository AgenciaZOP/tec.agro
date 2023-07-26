import React from "react"
import { Box } from "@mui/material"
import { Account } from "./Account"
import { InfoDetails } from "./InfoDetails"

interface MyBusinessProps {
    business: Business
}

export const MyBusiness: React.FC<MyBusinessProps> = ({ business }) => {
    return (
        <Box
            sx={{
                width: "100%",
                gap: "3vw",
                flexDirection: "column",
                height: "100%",
                overflow: "auto",
                padding: "0 8vw",
                paddingBottom: "5vw",
            }}
        >
            <Account business={business} />
            <InfoDetails />
        </Box>
    )
}
