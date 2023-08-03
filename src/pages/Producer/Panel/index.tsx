import React from "react"
import { Box, Button } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { Schedule } from "../../../components/PanelProducerAgent/Schedule"
import { ListTitle } from "../../../components/ListTitle"
import { CardCrop } from "../../../components/PanelProducerAgent/CardCrop"
import { useNavigate } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"

interface PanelProps {
    user: User
}

export const Panel: React.FC<PanelProps> = ({ user }) => {
    const navigate = useNavigate()
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
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "0 6vw",
                gap: "3vw",
            }}
        >
            <SearchInput placeholder="Buscar por safra" onChange={() => {}} />

            <Box
                sx={{
                    width: "100%",
                    height: "80%",
                    paddingBottom: "1vh",
                    flexDirection: "column",
                    gap: "2vw",
                }}
            >
                <Schedule status="pending" />
                <Schedule status="contact" />
                <Box sx={{ flexDirection: "column" }}>
                    <ListTitle title="Suas Safras" location="cropspr"></ListTitle>
                    <CardCrop user={producer} type="producer" />
                </Box>
                <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                    <ListTitle title="Agendadas" location="schedulepr"></ListTitle>
                    <Schedule status="schedule" />
                    <Schedule status="schedule" />
                </Box>
            </Box>
            <Button
                variant="contained"
                type="submit"
                sx={{
                    width: "20%",
                    height: "11%",
                    borderRadius: "3vw",
                    fontSize: "3vw",
                    flexDirection: "column",
                    position: "fixed",
                    bottom: "11vh",
                    right: "5vw",
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
