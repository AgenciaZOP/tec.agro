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
import { ListTransactions } from "../Adm/ListTransactions"
import { CropsPaid } from "./CropsPaid"
import { BottomNavigation } from "../../components/BottomNavigation"
import { TransactionsPending } from "./TransactionsPending"
import { TransactionsPaid } from "./TransactionsPaid"
import { TransactionsRecents } from "./TransactionsRecents"
import { Statistics } from "./Statistics"

interface SearchProps {
    user: User
}

export const Search: React.FC<SearchProps> = ({ user }) => {
    const location = useLocation()
    const { pathname } = location
    const bottomMenu = useNavigationList()
    const category: Category = {
        name: "Veículos",
        id: 1,
        //crops: ,
    }
    const renderHeaderMenu = () => {
        console.log(pathname)
        if (pathname === "/search/intro") {
            return (
                <>
                    {" "}
                    <Header back location="/producer/intro" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else if (pathname === "/search/cropsag") {
            return (
                <>
                    <Header back location="/agent/panel" />
                    <BottomNavigation section={bottomMenu.agent} external />
                </>
            )
        } else if (pathname === "/search/cropspr") {
            return (
                <>
                    {" "}
                    <Header back location="/producer/panel" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else if (pathname === "/search/scheduleag") {
            return (
                <>
                    <Header back location="/agent/panel" />
                    <BottomNavigation section={bottomMenu.agent} external />
                </>
            )
        } else if (pathname === "/search/schedulepr") {
            return (
                <>
                    {" "}
                    <Header back location="/producer/panel" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else if (pathname === "/search/zonespr") {
            return (
                <>
                    <Header back location="../../producer/intro" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else if (pathname === "/search/agentspr") {
            return (
                <>
                    {" "}
                    <Header back location="/search/zonespr" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else if (pathname === "/search/category") {
            return (
                <>
                    {" "}
                    <Header back location="/business" />
                    <BottomNavigation section={bottomMenu.business} external />
                </>
            )
        } else if (pathname === "/search/zone") {
            return (
                <>
                    <Header back location="/shipping/panel" />
                    <BottomNavigation section={bottomMenu.shipping} external />
                </>
            )
        } else if (pathname === "/search/crops") {
            return (
                <>
                    {" "}
                    <Header back location="/home" />
                    <BottomNavigation section={bottomMenu.home} external />
                </>
            )
        } else if (pathname === "/search/cropspaid") {
            return (
                <>
                    {" "}
                    <Header back location="/producer/panel" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else if (pathname === "/search/transrecents") {
            return (
                <>
                    {" "}
                    <Header back location="/adm/transactions" />
                    <BottomNavigation section={bottomMenu.admin} external />
                </>
            )
        } else if (pathname === "/search/transpaid") {
            return (
                <>
                    {" "}
                    <Header back location="/adm/transactions" />
                    <BottomNavigation section={bottomMenu.admin} external />
                </>
            )
        } else if (pathname === "/search/transpending") {
            return (
                <>
                    {" "}
                    <Header back location="/adm/transactions" />
                    <BottomNavigation section={bottomMenu.admin} external />
                </>
            )
        } else if (pathname === "/search/statistics") {
            return (
                <>
                    {" "}
                    <Header back location="/adm" />
                    <BottomNavigation section={bottomMenu.admin} external />
                </>
            )
        } else {
            return <Header />
        }
    }

    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "10vh 0" }}>
            {renderHeaderMenu()}
            <Routes>
                <Route path="crops" element={<Crops />} />
                <Route path="category" element={<Category category={category} />} />
                <Route path="cropsag" element={<ListCrops user={user} />} />
                <Route path="cropspr" element={<ListCrops user={user} />} />
                <Route path="scheduleag" element={<ListSheduleCrops />} />
                <Route path="schedulepr" element={<ListSheduleCrops />} />
                <Route path="zonespr" element={<ListZonesPr user={user} />} />
                <Route path="agentspr" element={<ListAgents user={user} />} />
                <Route path="zonessh" element={<ListZones user={user} title="Veículos" />} />
                <Route path="zone" element={<Zone />} />
                <Route path="cropspaid" element={<CropsPaid />} />
                <Route path="transrecents" element={<TransactionsRecents />} />
                <Route path="transpaid" element={<TransactionsPaid />} />
                <Route path="transpending" element={<TransactionsPending />} />
                <Route path="statistics" element={<Statistics />} />
                {/* <Route path="paid" element={<ListTransactions user={user}/>} /> */}
            </Routes>
        </Box>
    )
}
