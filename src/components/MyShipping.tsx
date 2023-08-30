import React from "react"
import { Box } from "@mui/material"
import { Account } from "./Account"
import { InfoDetails } from "./InfoDetails"
import { useLocation } from "react-router-dom"

interface MyShippingProps {
    shipping: Shipping 
}

export const MyShipping: React.FC<MyShippingProps> = ({ shipping }) => {
    const location = useLocation()
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
