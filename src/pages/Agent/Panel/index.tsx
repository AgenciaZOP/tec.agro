import React from "react"
import { Box, Paper } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { Schedule } from "../../../components/PanelProducerAgent/Schedule"
import { ListTitle } from "../../../components/ListTitle"
import { CardCrop } from "../../../components/PanelProducerAgent/CardCrop"
import { CardAgent } from "../../../components/PanelProducerAgent/CardAgent"
import { ResourceCard } from "../../../components/PanelProducerAgent/ResourceCard"
interface PanelProps {
    user: User
}

export const Panel: React.FC<PanelProps> = ({ user }) => {
    const agent: Agent = {
        id: 0,
        userId: user.id,
        user: user,
        date: "29/05/2000",
        name: "Julian Galdino",
        email: "",
        document: "",
        phone: "",
        image: "",
        rating: 5,
        ratings: 5,
        active: false,
    }
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "0 3vw",
                gap: "3vw",
            }}
        >
            <Box sx={{ flexDirection: "column", width: "100%", height: "30%", gap: "3vw" }}>
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <p style={{ fontSize: "3.5vw" }}>Como os produtores veem</p>
                    <ResourceCard agent={agent} location="agent" />
                </Box>
                <SearchInput placeholder="Buscar por safra" onChange={() => {}} />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "65%",
                    overflow: "auto",
                    paddingBottom: "1vh",
                    flexDirection: "column",
                    gap: "2vw",
                }}
            >
                <Schedule status="pending" />
                <Schedule status="contact" />
                <Box sx={{ flexDirection: "column" }}>
                    <ListTitle title="Suas Safras" location="cropsag"></ListTitle>
                    <CardCrop user={agent} type="agent" />
                </Box>
                <Box sx={{ flexDirection: "column" }}>
                    <ListTitle title="Agendadas" location="scheduleag"></ListTitle>
                    <Schedule status="schedule" />
                </Box>
            </Box>
        </Box>
    )
}
