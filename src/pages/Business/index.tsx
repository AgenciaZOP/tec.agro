import React, { useEffect } from "react"
import { Signup } from "./Signup"
import { Box, Paper, SxProps } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"
import { useHeader } from "../../hooks/useHeader"

import { BottomNavigation } from "../../components/BottomNavigation"

import { MyBusiness } from "../../components/MyBusiness"
import { useNavigationList } from "../../hooks/useNavigationList"
import { Panel } from "./Panel"
import { NewCategory } from "../../components/PanelBusinessShipping/NewCategory"
import { Category } from "../Search/Business/Category"
import { NewService } from "../../components/PanelBusinessShipping/NewService"
import { useLocation } from "react-router-dom"
import { Chats } from "../Chats"
//import { Carousel } from "react-responsive-carousel"

interface BusinessProps {
    user: User
}

export const Business: React.FC<BusinessProps> = ({ user }) => {
    const bottomMenu = useNavigationList()
    const header = useHeader()

    const location = useLocation()
    const { pathname } = location

    const product: Product = {
        name: "Fertilizante",
        type: "Produto",
        image: "",
    }

    const renderHeader = () => {
        console.log(pathname)
        if (pathname === "/business/new") {
            return (
                <>
                    {" "}
                    <Header back location="/business" />
                    <BottomNavigation section={bottomMenu.business} external />
                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <BottomNavigation section={bottomMenu.business} />{" "}
                </>
            )
        }
    }

    useEffect(() => {
        header.setTitle("Meu Negócio")
    }, [])
    return (
        <>
            {renderHeader()}
            <Box sx={{ width: "100%", padding: "10vh 0 10vh" }}>
                {user.business ? (
                    user.business.active ? (
                        <>
                            <Routes>
                                <Route index element={<Panel business={user.business} product={product} />} />
                                {/* <Route path="/newCategory" element={<NewCategory user={user} product={product} />} /> */}
                                <Route path="/account" element={<MyBusiness business={user.business} />} />
                                <Route path="/new" element={<NewService />} />
                                <Route path="chats" element={<Chats channel="buyer" />} />
                            </Routes>
                        </>
                    ) : (
                        <Verification />
                    )
                ) : (
                    <Box sx={{ padding: "10vw 0 0", width: "100%" }}>
                        <Routes>
                            <Route index element={<Signup user={user}></Signup>} />
                            <Route path="form" element={<Form user={user}></Form>} />
                        </Routes>
                    </Box>
                )}
            </Box>
        </>
    )
}
