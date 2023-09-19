import React from "react"
import { Box, makeStyles } from "@mui/material"
import { Header } from "../../components/Header"
import { BottomNavigation } from "../../components/BottomNavigation"
import { Route, Routes } from "react-router-dom"
import { Panel } from "./Panel"
import { Reviews } from "./Reviews"
import { ReviewProfile } from "./ReviewProfile"
import { useNavigationList } from "../../hooks/useNavigationList"
import { useLocation } from "react-router-dom"
import { ListTransactions } from "./ListTransactions"
import { DescriptionCrop } from "../../components/DescriptionCrop"
import { Chats } from "../Chats"
import { UserstoApprove } from "./UserstoApprove"
import { Users } from "./Users"

interface AdmProps {
    user: User
}

export const Adm: React.FC<AdmProps> = ({ user }) => {
    const bottomMenu = useNavigationList()
    const location = useLocation()
    const { pathname } = location

    const renderHeader = () => {
        if (pathname === "/adm/review") {
            return <Header back location="/adm/reviews" />
        } else if (pathname === "/adm/transactions/description") {
            return <Header back location="/adm/transactions" />
        } else if (pathname === "/adm/users") {
            return <Header back location="/adm/" />
        } else if (pathname === "/adm/users/user") {
            return <Header back location="/adm/users" />
        } else {
            return <Header />
        }
    }
    const renderMenu = () => {
        console.log(pathname)
        if (pathname === "/adm/review") {
            return <BottomNavigation section={bottomMenu.admin} external={true} />
        } else if (pathname === "/adm/transactions/description") {
            return <BottomNavigation section={bottomMenu.admin} external />
        } else if (pathname === "/adm/users") {
            return <BottomNavigation section={bottomMenu.admin} external />
        } else if (pathname === "/adm/users/user") {
            return <BottomNavigation section={bottomMenu.admin} external />
        } else {
            return <BottomNavigation section={bottomMenu.admin} />
        }
    }
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                overflowY: "auto",
            }}
        >
            {renderHeader()}
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                }}
            >
                <Routes>
                    <Route index element={<Panel />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="review" element={<ReviewProfile />} />
                    <Route path="users" element={<UserstoApprove user={user} />} />
                    <Route path="users/user" element={<Users />} />
                    <Route path="chats" element={<Chats channel="buyer" />} />
                    <Route path="transactions" element={<ListTransactions producer={user} />} />
                    <Route path="/transactions/description" element={<DescriptionCrop user={user} />} />
                </Routes>
            </Box>
            {renderMenu()}
        </Box>
    )
}
