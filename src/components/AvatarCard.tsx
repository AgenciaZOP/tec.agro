import React from "react"
import { Box, Avatar } from "@mui/material"

interface AvatarCardProps {
    name: string
    typeAgent: string
    avatar?: React.ReactElement
}

export const AvatarCard: React.FC<AvatarCardProps> = ({ name, typeAgent, avatar }) => {
    const AvatarIcon = () => avatar || <></>

    return (
        <Box
            sx={{
                display: "flex",
                width: "28%",
                flexDirection: "column",
                gap: "0.3vw",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <AvatarIcon />
            <p style={{ fontSize: "3vw" }}>{typeAgent}</p>
            <p style={{ fontSize: "2.3vw" }}>{name}</p>
        </Box>
    )
}
