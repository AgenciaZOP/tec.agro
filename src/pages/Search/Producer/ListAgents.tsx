import React from "react"
import { Box } from "@mui/material"
import { useNavigationList } from "../../../hooks/useNavigationList"
import { BottomNavigation } from "../../../components/BottomNavigation"
import { CardCrop } from "../../../components/PanelProducerAgent/CardCrop"
import { SearchInput } from "../../../components/SearchInput"

interface ListAgentsProps {
    user: User
}

export const ListAgents: React.FC<ListAgentsProps> = ({ user }) => {
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
                padding: "20vw 0",
                gap: "4vw",
            }}
        >
            <SearchInput placeholder="safras pagas" onChange={() => {}} />
            <Box
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    padding: "4vw",
                    gap: "4vw",
                    height: "91%",
                    overflowY: "auto",
                }}
            >
                <CardCrop user={agent} type="agent" name="Corretor" />
                <CardCrop user={agent} type="agent" name="Corretor" />
                <CardCrop user={agent} type="agent" name="Corretor" />
                <CardCrop user={agent} type="agent" name="Corretor" />
                <CardCrop user={agent} type="agent" name="Corretor" />
            </Box>
        </Box>
    )
}
