import React from "react"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { Header } from "../../components/Header"
import { Crops } from "./Crops"
import { Category } from "./Category"
import { ListCategories } from "./ListCategories"
import { ListCropsAgent } from "./ListCropsAgent"
import { ListSheduleCrops } from "./ListSheduleCrops"

interface SearchProps {
    user: User
}

export const Search: React.FC<SearchProps> = ({ user }) => {
    const category: Category = {
        name: "Veículos",
        id: 1,
        //crops: ,
    }

    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "10vh 0" }}>
            <Header />
            <Routes>
                <Route path="crops" element={<Crops />} />
                <Route path="category" element={<Category category={category} />} />
                <Route
                    path="categories"
                    element={<ListCategories title="Categorias em Análise" type={false} category={category} user={user} />}
                />
                <Route
                    path="approved"
                    element={<ListCategories title="Categorias Aprovadas" type={true} category={category} user={user} />}
                />
                <Route path="cropsag" element={<ListCropsAgent user={user} />} />
                <Route path="scheduleag" element={<ListSheduleCrops />} />
                <Route path="cropspr" element={<ListCropsAgent user={user} />} />
                <Route path="schedulepr" element={<ListSheduleCrops />} />
            </Routes>
        </Box>
    )
}
