import React from "react"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { Header } from "../../components/Header"
import { Crops } from "./Crops"
import { Category } from "./Business/Category"
import { ListCategories } from "./Business/ListCategories"
import { ListCrops } from "../../components/PanelProducerAgent/ListCrops"
import { ListSheduleCrops } from "../../components/PanelProducerAgent/ListSheduleCrops"
import { ListZones } from "./Producer/ListZones"
import { ListAgents } from "./Producer/ListAgents"
import { useNavigationList } from "../../hooks/useNavigationList"

interface SearchProps {
    user: User
}

export const Search: React.FC<SearchProps> = ({ user }) => {
    const category: Category = {
        name: "Veículos",
        id: 1,
        //crops: ,
    }
    const bottomMenu = useNavigationList()

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
                <Route path="cropsag" element={<ListCrops user={user} type={bottomMenu.agent} />} />
                <Route path="scheduleag" element={<ListSheduleCrops type={bottomMenu.agent} />} />
                <Route path="cropspr" element={<ListCrops user={user} type={bottomMenu.producer} />} />
                <Route path="schedulepr" element={<ListSheduleCrops type={bottomMenu.producer} />} />
                <Route path="zonespr" element={<ListZones user={user} />} />
                <Route path="agentspr" element={<ListAgents user={user} />} />
            </Routes>
        </Box>
    )
}
