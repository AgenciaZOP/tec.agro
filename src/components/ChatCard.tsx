import React from "react"
import { Avatar, Box, Paper } from "@mui/material"
import { useUser } from "../hooks/useUser"

interface ChatCardProps {
    chat: Chat
    onClick: () => void
}

export const ChatCard: React.FC<ChatCardProps> = ({ chat, onClick }) => {
    const {user} = useUser()
    
    return (
        <Paper onClick={onClick} elevation={0} sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw", width: "90%", margin: "0 auto" }}>
            {/* {chat.id} */}
            <Avatar sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ height: "100%", width: "66vw", gap: "1vw", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                    <Box sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ flexDirection: "column", gap: "1vw"}}>
                            <p style={{
                                fontSize: "4vw",
                                fontWeight: "700",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap", 
                                width: "55vw"
                                }}>
                                {chat.users.find((item) => item.id != user?.id)?.name}
                            </p>
                            <p style={{ fontSize: "3vw", fontWeight: "600" }}>Função</p>
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: "3vw", justifyContent: "space-between" }}>
                        <p>7 h atrás</p>
                    </Box>
                </Box>
                    <Box sx={{
                        border: "1px solid",
                        borderColor: 'primary.main',
                        borderRadius: "50%",
                        height: "8vw",
                        width: "8vw",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>{chat.messages.length}</Box>
            </Box>
        </Paper>
    )
}
