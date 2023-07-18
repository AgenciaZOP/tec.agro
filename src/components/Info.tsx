import React from "react"
import { Box } from "@mui/material"

interface InfoProps {
    name: number | undefined | string
    title: string
    icon?: React.ReactElement
}

export const Info: React.FC<InfoProps> = ({ name, title, icon }) => {
    const Icon = () => icon || <></>

    return (
        <Box sx={{ flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ alignItems: "center" }}>
                <p style={{ fontWeight: "500", fontSize: "6vw" }}>{name}</p>
                <Icon />
            </Box>
            <p style={{ fontSize: "2.2vw" }}>{title}</p>
        </Box>
    )
}
