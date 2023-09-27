import React from "react"
import { Box, Paper } from "@mui/material"
import { useNavigationList } from "../../../hooks/useNavigationList"
import { BottomNavigation } from "../../../components/BottomNavigation"
import { SearchInput } from "../../../components/SearchInput"
import { CardCategory } from "../../../components/PanelBusinessShipping/CardCategory"

interface ListZonesProps {
    user: User
    title: string
}

export const ListZones: React.FC<ListZonesProps> = ({ title, user }) => {
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
            <SearchInput placeholder="veículos" onChange={() => {}} />

            <Paper
                elevation={2}
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    padding: "4vw",
                    gap: "4vw",
                    height: "91%",
                    overflowY: "auto",
                }}
            >
                <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                    <p style={{ fontSize: "4vw", fontWeight: "600", textAlign: "center" }}>{title}</p>
                    <hr style={{ width: "100%" }} />
                </Box>
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    {/* <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                  */}
                </Box>
            </Paper>
        </Box>
    )
}
