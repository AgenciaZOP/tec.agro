import React, { useState } from "react"
import { Box, Avatar } from "@mui/material"
import profile from "../../../assets/person.jpg"
import { useNavigate } from "react-router-dom"

interface CardNotificationProps {}

export const CardNotification: React.FC<CardNotificationProps> = ({}) => {
    const navigate = useNavigate()
    const [name, setname] = useState("Georgina Hamelt")

    return (
        <Box
            sx={{ display: "flex", flexDirection: "row", gap: "4vw", width: "100%", padding: "1.5vw 3vw" }}
            onClick={() => {
                navigate("/agent/analysis")
            }}
        >
            <Avatar src={profile} sx={{ width: "12vw", height: "12vw" }} />

            <Box sx={{ display: "flex", flexDirection: "column", width: "80%", whiteSpace: "pre-wrap" }}>
                <p style={{ fontSize: "3.4vw" }}>
                    <span style={{ fontWeight: "bold" }}>{name}</span> está solicitando o serviço de corretagem
                </p>
                <p style={{ color: "gray", fontSize: "2.9vw" }}>5 h atrás</p>
            </Box>
        </Box>
    )
}
