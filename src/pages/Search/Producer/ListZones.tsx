import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { ListTitle } from "../../../components/ListTitle"
import { ResourceCard } from "../../../components/PanelProducerAgent/ResourceCard"
import { useHeader } from "../../../hooks/useHeader"

interface ListZonesProps {
    user: User
}

export const ListZones: React.FC<ListZonesProps> = ({ user }) => {
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Escolha um Corretor")
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
        <Box sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "20vw 0",
                gap: "4vw",
            }}>
            <SearchInput placeholder="corretor" onChange={() => {}} />
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
                <ListTitle title="Região #1" location="agentspr" />
                <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                    <ResourceCard agent={agent} location="producer/analysisag" />
                </Box>
                <ListTitle title="Região #2" location="" />
                <Box sx={{ flexDirection: "column", gap: "3vw" }}></Box>
            </Box>
        </Box>
    )
}
