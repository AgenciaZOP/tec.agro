import React from "react"
import { Box, Paper } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { CardCategory } from "../Business/Panel/CardCategory"
import { BottomNavigation } from "../../components/BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
interface ListCategoriesProps {
    title: string
    type: boolean
    category: Category
    user: User
}

export const ListCategories: React.FC<ListCategoriesProps> = ({ title, type, category, user }) => {
    const bottomMenu = useNavigationList()

    return (
        <Box
            sx={{
                width: "100%",
                padding: "0 5vw",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                paddingBottom: "5vw",
            }}
        >
            <SearchInput placeholder="categorias" onChange={() => {}}></SearchInput>
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
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                    <CardCategory activeCategory={type} category={category}></CardCategory>
                </Box>
            </Paper>
            <BottomNavigation section={bottomMenu.business} />
        </Box>
    )
}
