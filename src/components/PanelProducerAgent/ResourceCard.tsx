import React from "react"
import { Box, Paper } from "@mui/material"
import { CardAgent } from "./CardAgent"
import { useNavigate } from "react-router-dom"
interface ResourceCardProps {
    agent: Agent
    location?: string
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ agent, location }) => {
    const navigate = useNavigate()
    return (
        <Paper
            elevation={3}
            sx={{
                backgroundColor: "white",
                width: "100%",
                height: "max-content",
                borderRadius: "2vw",
                flexDirection: "column",
                padding: "1vw",
                gap: "1vw",
            }}
            onClick={() => {
                navigate(`/${location}`)
            }}
        >
            <CardAgent user={agent} type="agent" name="Corretor" />
        </Paper>
    )
}
