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

interface AdmProps {
    user: User
}

export const Adm: React.FC<AdmProps> = ({ user }) => {
    const bottomMenu = useNavigationList()
    const location = useLocation()
    const { pathname } = location

    const renderHeader = () => {
        console.log(pathname)
        if (pathname === "/adm/review") {
            return <Header back location="/adm/reviews" />
        } else {
            return <Header />
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
                </Routes>
            </Box>
            <BottomNavigation section={bottomMenu.admin} />
        </Box>
    )
}
