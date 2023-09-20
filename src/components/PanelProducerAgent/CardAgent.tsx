import React, { useState } from "react"
import { Box, Paper, Avatar } from "@mui/material"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import SquareIcon from "@mui/icons-material/Square"
import profile from "../../assets/person.jpg"
import { Tag } from "../Tag"
import { useDate } from "../../hooks/useDate"

interface CardAgentProps {
    user: Agent | Producer
    type: SubaccountType
    name: string
    handleClick?: () => void
}

export const CardAgent: React.FC<CardAgentProps> = ({ user, type, name, handleClick }) => {
    const { getDifference } = useDate()
    return (
        <Paper
            elevation={3}
            sx={{
                alignItems: "center",
                justifyContent: "space-between",
                background: "white",
                padding: "2vw 4vw",
                borderRadius: "3vw",
                gap: "0vw",
            }}
            onClick={handleClick}
        >
            <Avatar src={profile} sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column", width: "65vw", gap: "0vw" }}>
                <Box sx={{ justifyContent: "space-between", width: "100%" }}>
                    <p style={{ fontSize: "3.4vw" }}>{user.name}</p>
                    <Box sx={{ gap: "1vw" }}>
                        <Tag variant={type} name={name} style={"2.3vw"} />
                    </Box>
                </Box>

                <Box sx={{ fontSize: "2.5vw", gap: "1.5vw", alignItems: "center" }}>
                    <Box sx={{ alignItems: "center", gap: "0.5vw" }}>
                        <p>{user.rating.toLocaleString("pt-br")} </p>
                        <StarSharpIcon sx={{ width: "2.5vw" }} />
                    </Box>
                    <p>Vendas: {user.user.sold}</p>
                    <SquareIcon
                        sx={{
                            width: "1vw",
                            transform: "rotate(45deg)",
                        }}
                    />
                    <p>Compras: {user.user.bought}</p>
                    <SquareIcon sx={{ width: "1vw", transform: "rotate(45deg)" }} />
                    <p>{getDifference(new Date(user.date))} meses</p>
                </Box>
            </Box>
        </Paper>
    )
}
