import React, { useEffect } from "react"
import { Box, Paper } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { Schedule } from "../../../components/PanelProducerAgent/Schedule"
import { ListTitle } from "../../../components/ListTitle"
import { CardCrop } from "../../../components/PanelProducerAgent/CardCrop"
import { CardAgent } from "../../../components/PanelProducerAgent/CardAgent"
import { ResourceCard } from "../../../components/PanelProducerAgent/ResourceCard"
import { useHeader } from "../../../hooks/useHeader"
interface PanelProps {
    user: User
}

export const Panel: React.FC<PanelProps> = ({ user }) => {
    const header = useHeader()

    useEffect(() => {
        return () => {
            header.setTitle("Painel Corretor")
        }
    }, [])
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
                padding: "0",
                gap: "3vw",
            }}
        >
            <Box
                sx={{
                    flexDirection: "column",
                    padding: "0 4vw",
                    width: "100%",
                    height: "38vw",
                    gap: "2vw",
                }}
            >
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <p style={{ fontSize: "3.5vw" }}>Como os produtores veem</p>
                    <ResourceCard agent={agent} location="agent" />
                </Box>
                <SearchInput placeholder="safra" onChange={() => {}} />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "70%",
                    overflowY: "auto",
                    padding: "0vw 4vw",
                    paddingTop: "3vw",
                    paddingBottom: "5vw",
                    flexDirection: "column",
                    gap: "2vw",
                }}
            >
                <Schedule status="pending" />
                <Schedule status="contact" />
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <ListTitle title="Suas Safras" location="cropsag"></ListTitle>
                    <CardCrop
                        user={agent}
                        type="agent"
                        name="Corretor"
                        variant={true}
                        transactions={false}
                        handleClick={() => {}}
                    />
                </Box>
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <ListTitle title="Agendadas" location="scheduleag"></ListTitle>
                    <Schedule status="schedule" />
                </Box>
            </Box>
        </Box>
    )
}
