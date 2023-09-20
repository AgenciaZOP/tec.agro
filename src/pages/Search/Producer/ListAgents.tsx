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
                width: "100%",
                height: "100%",
                flexDirection: "column",
                padding: "0",
                gap: "3vw",
            }}
        >
            <SearchInput placeholder="safras pagas" onChange={() => {}} />
            <Box
                sx={{
                    height: "90%",
                    padding: "3vw 4vw",
                    overflow: "auto",
                    flexDirection: "column",
                    gap: "3vw",
                    paddingBottom: "4vw ",
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
