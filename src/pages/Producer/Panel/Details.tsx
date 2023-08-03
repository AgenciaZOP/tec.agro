import React from "react"
import { Box } from "@mui/material"

interface DetailsProps {
    value: string
    subtitle: string
}

export const Details: React.FC<DetailsProps> = ({ value, subtitle }) => {
    return (
        <Box sx={{ flexDirection: "column", alignItems: "center", width: "25%", padding: "0" }}>
            <p style={{ fontSize: "6vw" }}>{value}</p>
            <p style={{ fontSize: "1.9vw", textAlign: "center", color: "gray" }}>{subtitle}</p>
        </Box>
    )
}
