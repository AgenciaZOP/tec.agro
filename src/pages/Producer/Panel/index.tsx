import React, { useEffect } from "react"
import { Box, Button } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { Schedule } from "../../../components/PanelProducerAgent/Schedule"
import { ListTitle } from "../../../components/ListTitle"
import { CardCrop } from "../../../components/PanelProducerAgent/CardCrop"
import { useNavigate } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"
import { useHeader } from "../../../hooks/useHeader"

interface PanelProps {
    user: User
    agent: Agent
}

export const Panel: React.FC<PanelProps> = ({ user, agent }) => {
    const navigate = useNavigate()
    const header = useHeader()
    const producer: Producer = {
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
    useEffect(() => {
        return () => {
            header.setTitle("Minhas Safras")
        }
    }, [])

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
            <SearchInput placeholder="safras" onChange={() => {}} />

            <Box
                sx={{
                    width: "100%",
                    height: "91%",
                    padding: "0 4vw",
                    flexDirection: "column",
                    gap: "2vw",
                    overflow: "auto",
                }}
            >
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <ListTitle title="Safras Pagas" location="paid" />
                    <Schedule status="pending" />
                    <Schedule status="contact" />
                </Box>
                <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                    <ListTitle title="Suas Safras" location="cropspr"></ListTitle>
                    <CardCrop
                        variant={true}
                        user={agent}
                        type="agent"
                        name="Corretor"
                        transactions={false}
                        handleClick={() => {}}
                    />
                    <Schedule status="schedule" />
                </Box>
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <ListTitle title="Agendadas" location="schedulepr"></ListTitle>
                    <Schedule status="schedule" />
                </Box>
            </Box>
            <Button
                variant="contained"
                type="submit"
                sx={{
                    borderRadius: "3vw",
                    fontSize: "3vw",
                    flexDirection: "column",
                    position: "fixed",
                    bottom: "9vh",
                    right: "4vw",
                }}
                onClick={() => {
                    navigate("/producer/intro")
                }}
            >
                <AddIcon color="secondary" />
                Safra
            </Button>
        </Box>
    )
}
