import React, { useState } from "react"
import { Box, Paper, Avatar } from "@mui/material"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import SquareIcon from "@mui/icons-material/Square"
import profile from "../../../assets/person.jpg"
import { Tag } from "../../../components/Tag"
import { useDate } from "../../../hooks/useDate"

interface CardAgentProps {
    agent: Agent
}

export const CardAgent: React.FC<CardAgentProps> = ({ agent }) => {
    const { getDifference } = useDate()
    return (
        <Paper
            elevation={0}
            sx={{
                alignItems: "center",
                justifyContent: "space-between",
                background: "white",
                padding: "1vw 2vw",
                borderRadius: "5vw",
                gap: "3vw",
            }}
        >
            <Avatar src={profile} sx={{ width: "13vw", height: "13vw" }} />
            <Box sx={{ flexDirection: "column", width: "65vw", gap: "0vw" }}>
                <Box sx={{ justifyContent: "space-between", width: "100%" }}>
                    <p style={{ fontSize: "3.4vw" }}>{agent.name}</p>
                    <Box sx={{ gap: "1vw" }}>
                        <Tag variant={"agent"} name="Corretor" style={"2.3vw"} />
                    </Box>
                </Box>

                <Box sx={{ fontSize: "2.5vw", gap: "1.5vw", alignItems: "center" }}>
                    <Box sx={{ alignItems: "center", gap: "0.5vw" }}>
                        <p>{agent.rating.toLocaleString("pt-br")} </p>
                        <StarSharpIcon sx={{ width: "2.5vw" }} />
                    </Box>
                    <p>Vendas: {agent.user.sold}</p>
                    <SquareIcon
                        sx={{
                            width: "1vw",
                            transform: "rotate(45deg)",
                        }}
                    />
                    <p>Compras: {agent.user.bought}</p>
                    <SquareIcon sx={{ width: "1vw", transform: "rotate(45deg)" }} />
                    <p>{getDifference(new Date(agent.date))} meses</p>
                </Box>
            </Box>
        </Paper>
    )
}
