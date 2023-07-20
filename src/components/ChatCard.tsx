import React from "react"
import { Avatar, Box, Paper } from "@mui/material"

interface ChatCardProps {
    chat: Chat
    onClick: () => void
}

export const ChatCard: React.FC<ChatCardProps> = ({ chat, onClick }) => {
    return (
        <Paper onClick={onClick} elevation={0} sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw", width: "90%", margin: "0 auto" }}>
            {/* {chat.id} */}
            <Avatar sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ height: "100%", width: "65vw", gap: "1vw", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                    <Box sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                            <p style={{ fontSize: "4vw", fontWeight: "700" }}>Nome Completo</p>
                            <p style={{ fontSize: "3vw", fontWeight: "600" }}>Função</p>
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: "3vw", justifyContent: "space-between" }}>
                        <p>7 h atrás</p>
                    </Box>
                </Box>
                    5 não lidas
            </Box>
        </Paper>
    )
}
