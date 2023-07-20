import React from "react"
import { Box } from "@mui/material"

interface MessageNotificationProps {
    name: string
    avatarIcon?: React.ReactElement
    color?: string
}

export const MessageNotification: React.FC<MessageNotificationProps> = ({ avatarIcon, name, color }) => {
    const Avatar = () => avatarIcon || <></>
    return (
        <Box sx={{ display: "flex", flexDirection: "row", gap: "4vw" }}>
            <Box sx={{ alignItems: "center", gap: " 2vw" }}>
                <Box sx={{ backgroundColor: `${color}`, width: "1.3vw", height: "1.3vw", borderRadius: "50%" }}> </Box>
                <Avatar />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", width: "75%", whiteSpace: "pre-wrap" }}>
                <p style={{ fontSize: "3.4vw" }}>
                    <span style={{ fontWeight: "bold" }}>{name}</span> lhe enviou uma mensagem
                </p>
                <p style={{ color: "gray", fontSize: "2.9vw" }}>5 h atrás</p>
            </Box>
        </Box>
    )
}
