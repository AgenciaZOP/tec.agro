import React from "react"
import { BottomNavigation } from "../../../components/BottomNavigation"
import { Box } from "@mui/material"
import { useNavigationList } from "../../../hooks/useNavigationList"
import { SearchInput } from "../../../components/SearchInput"
import { ListTitle } from "../../../components/ListTitle"
import { ResourceCard } from "../../../components/PanelProducerAgent/ResourceCard"

interface ListZonesProps {
    user: User
}

export const ListZones: React.FC<ListZonesProps> = ({ user }) => {
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
        <Box sx={{ height: "100%", padding: "0 2vw", flexDirection: "column" }}>
            <SearchInput placeholder="corretor" onChange={() => {}} />
            <Box
                sx={{
                    overflow: "auto",
                    height: "90%",
                    padding: "3vw 5vw",
                    flexDirection: "column",
                    gap: "1vw",
                }}
            >
                <ListTitle title="Região #1" location="agentspr" />
                <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                    <ResourceCard agent={agent} location="producer/analysis" />
                </Box>
                <ListTitle title="Região #2" location="" />
                <Box sx={{ flexDirection: "column", gap: "3vw" }}></Box>
            </Box>
            <BottomNavigation section={bottomMenu.producer} />
        </Box>
    )
}
