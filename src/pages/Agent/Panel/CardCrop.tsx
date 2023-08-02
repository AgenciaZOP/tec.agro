import React from "react"
import { Box, Paper } from "@mui/material"
import { HeaderInfo } from "./HeaderInfo"
import { CardAgent } from "./CardAgent"
interface CardCropProps {
    agent: Agent
}

export const CardCrop: React.FC<CardCropProps> = ({ agent }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                backgroundColor: "white",
                width: "100%",
                height: "max-content",
                borderRadius: "2vw",
                flexDirection: "column",
                padding: "2vw",
                gap: "1vw",
            }}
        >
            <HeaderInfo />
            <CardAgent agent={agent} />
            <p style={{ alignSelf: "center", fontSize: "2.5vw", textDecoration: "underline" }}>Editar</p>
        </Paper>
    )
}
