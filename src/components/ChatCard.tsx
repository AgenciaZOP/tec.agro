import React from "react"
import { Avatar, Box, Paper } from "@mui/material"
import { useUser } from "../hooks/useUser"
import avatarImage from "../assets/person2.jpg"

interface ChatCardProps {
    chat: Chat
    newMessage: boolean
    onClick: () => void
}

export const ChatCard: React.FC<ChatCardProps> = ({ chat, newMessage, onClick }) => {
    const {user} = useUser()
    
    return (
        <Paper onClick={onClick} elevation={0} sx={{ alignItems: "center", background: "white", padding: "1.5vw 3vw", borderRadius: "3vw", gap: "3vw" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "2vw", width: "100%" }}>
                {/* {chat.id} */}
                <Avatar src={avatarImage} sx={{ width: "12vw", height: "12vw" }} />
                <Box
                    sx={{
                        flex: 1,
                        gap: "1vw",
                        justifyContent: "space-between",
                        alignItems: "center",
                        whiteSpace: "pre-wrap",
                    }}
                >
                    <Box sx={{ flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                        <Box sx={{ justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ flexDirection: "column" }}>
                                <p style={{
                                    fontSize: "3.75vw",
                                    fontWeight: "700",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    }}>
                                    {chat.users.find((item) => item.id != user?.id)?.name}
                                </p>
                                <p style={{ fontSize: "3vw", fontWeight: "600" }}>Função</p>
                            </Box>
                        </Box>
                        <Box sx={{ fontSize: "2.75vw", justifyContent: "space-between" }}>
                            <p>7 h atrás</p>
                        </Box>
                    </Box>
                        <Box>
                            <Box sx={{
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid",
                                borderColor: 'primary.main',
                                borderRadius: "50%",
                                fontSize: "4vw",
                                height: "7vw",
                                width: "7vw"
                            }}>
                                {chat.messages.length}
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: newMessage ? "#FF4747" : "transparent",
                                    width: "1.3vw",
                                    height: "1.3vw",
                                    borderRadius: "50%",
                                    marginLeft: "-1vw"
                                }}
                            >
                                {" "}
                            </Box>
                        </Box>
                </Box>
            </Box>
        </Paper>
    )
}
