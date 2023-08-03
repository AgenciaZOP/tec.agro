import React from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { BottomNavigation } from "../../components/BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import { CardCrop } from "../../components/PanelProducerAgent/CardCrop"

interface ListCropsAgentProps {
    user: User
}

export const ListCropsAgent: React.FC<ListCropsAgentProps> = ({ user }) => {
    const bottomMenu = useNavigationList()
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
                gap: "3vw",
                padding: "1vw",
            }}
        >
            <SearchInput placeholder="conversas" onChange={() => {}} />
            <Box
                sx={{
                    width: "100%",
                    height: "91%",
                    overflow: "auto",
                    flexDirection: "column",
                    padding: "3vw",
                    gap: "3vw",
                }}
            >
                <CardCrop agent={agent} />
                <CardCrop agent={agent} />
                <CardCrop agent={agent} />
            </Box>

            <BottomNavigation section={bottomMenu.agent} />
        </Box>
    )
}
