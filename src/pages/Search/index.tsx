import React from "react"
import { Box } from "@mui/material"
import { Route, Routes, useLocation } from "react-router-dom"
import { Header } from "../../components/Header"
import { Crops } from "./Crops"
import { Category } from "./Business/Category"
import { ListCategories } from "./Business/ListCategories"
import { ListCrops } from "../../components/PanelProducerAgent/ListCrops"
import { ListSheduleCrops } from "../../components/PanelProducerAgent/ListSheduleCrops"
import { ListZones as ListZonesPr } from "./Producer/ListZones"
import { ListAgents } from "./Producer/ListAgents"
import { useNavigationList } from "../../hooks/useNavigationList"
import { ListZones } from "./Shipping/ListZones"
import { Zone } from "./Shipping/Zone"

interface SearchProps {
    user: User
}

export const Search: React.FC<SearchProps> = ({ user }) => {
    const location = useLocation()
    const { pathname } = location

    const category: Category = {
        name: "Veículos",
        id: 1,
        //crops: ,
    }
    const renderHeader = () => {
        console.log(pathname)
        if (pathname === "/search/intro") {
            return <Header back location="/producer/intro" />
        } else if (pathname === "/search/cropsag") {
            return <Header back location="/agent/panel" />
        } else if (pathname === "/search/cropspr") {
            return <Header back location="/producer/panel" />
        } else if (pathname === "/search/scheduleag") {
            return <Header back location="/agent/panel" />
        } else if (pathname === "/search/schedulepr") {
            return <Header back location="/producer/panel" />
        } else if (pathname === "/search/zonespr") {
            return <Header back location="../../producer/intro" />
        } else if (pathname === "/search/agentspr") {
            return <Header back location="/search/zonespr" />
        } else if (pathname === "/search/category") {
            return <Header back location="/business" />
        } else if (pathname === "/search/zone") {
            return <Header back location="/shipping/panel" />
        } else if (pathname === "/search/crops") {
            return <Header back location="/home" />
        } else {
            return <Header />
        }
    }
    const bottomMenu = useNavigationList()

    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "10vh 0" }}>
            {renderHeader()}
            <Routes>
                <Route path="crops" element={<Crops />} />
                <Route path="category" element={<Category category={category} />} />
                <Route path="cropsag" element={<ListCrops user={user} type={bottomMenu.agent} />} />
                <Route path="cropspr" element={<ListCrops user={user} type={bottomMenu.producer} />} />
                <Route path="scheduleag" element={<ListSheduleCrops type={bottomMenu.agent} />} />
                <Route path="schedulepr" element={<ListSheduleCrops type={bottomMenu.producer} />} />
                <Route path="zonespr" element={<ListZonesPr user={user} />} />
                <Route path="agentspr" element={<ListAgents user={user} />} />
                <Route path="zonessh" element={<ListZones user={user} title="Veículos" />} />
                <Route path="zone" element={<Zone />} />
            </Routes>
        </Box>
    )
}
