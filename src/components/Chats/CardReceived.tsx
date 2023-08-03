import React, { useState } from "react"
import { Box, Avatar, Paper } from "@mui/material"
import { useNavigate } from "react-router-dom"
import profile from "../../assets/person2.jpg"

interface CardReceivedProps {
    newMessage: boolean
}

export const CardReceived: React.FC<CardReceivedProps> = ({ newMessage }) => {
    const navigate = useNavigate()
    const [name, setname] = useState("Omir Donin")
    return (
        <Paper elevation={0} sx={{ padding: "1vw 3vw", borderRadius: "3vw" }}>
            <Box
                sx={{ display: "flex", flexDirection: "row", gap: "4vw", width: "100%" }}
                onClick={() => {
                    navigate("/agent/analysis")
                }}
            >
                <Avatar src={profile} sx={{ width: "11.7vw", height: "11.7vw" }} />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        whiteSpace: "pre-wrap",
                        gap: "0.5vw",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{ display: "flex", flexDirection: "column", width: "70%", whiteSpace: "pre-wrap", gap: "0.5vw" }}
                    >
                        <p style={{ fontSize: "3.5vw" }}>
                            <span style={{ fontWeight: "700" }}>{name}</span>
                        </p>
                        <p style={{ fontSize: "2.7vw", fontWeight: "bold" }}>Corretor</p>
                        <p style={{ color: "gray", fontSize: "2.5vw" }}>5 h atrás</p>
                    </Box>
                    <Box sx={{ alignItems: "center", gap: "1vw" }}>
                        <Box
                            sx={{
                                width: "7.5vw",
                                height: "7.5vw",
                                borderRadius: "10vw",
                                border: "0.1vw solid black",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <p style={{ fontSize: "4vw" }}>15</p>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: newMessage ? "#FF4747" : "transparent",
                                width: "1.3vw",
                                height: "1.3vw",
                                borderRadius: "50%",
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
