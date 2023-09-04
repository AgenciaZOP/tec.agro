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
    const bottomMenu = useNavigationList()

    return (
        <Box
            sx={{
                width: "100%",
                padding: "0 4vw",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                paddingBottom: "5vw",
            }}
        >
            <SearchInput placeholder="veículos" onChange={() => {}} />

            <Paper
                elevation={2}
                sx={{
                    width: "100%",
                    height: "70vh ",
                    borderRadius: "2vw",
                    padding: "3vw 5vw",
                    flexDirection: "column",
                    gap: "3vw",
                    overflow: "auto",
                }}
            >
                <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                    <p style={{ fontSize: "4vw", fontWeight: "600", textAlign: "center" }}>{title}</p>
                    <hr style={{ width: "100%" }} />
                </Box>
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    {/* <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory> */}
                </Box>
            </Paper>
            <BottomNavigation section={bottomMenu.shipping} />
        </Box>
    )
}
