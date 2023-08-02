import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"
import { MyShipping } from "../../components/MyShipping"
import { BottomNavigation } from "../../components/BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import { Panel } from "./Panel"

interface ShippingProps {
    user: User
}

export const Shipping: React.FC<ShippingProps> = ({ user }) => {
    const bottomMenu = useNavigationList()
    return (
        <Box sx={{ paddingTop: "5vh" }}>
            <Header />
            {user.shipping ? (
                user.shipping.active ? (
                    <></>
                ) : (
                    <Verification />
                )
            ) : (
                <Box sx={{ padding: "7vh 0vw 10vh 0vw", width: "100vw" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                        <Route path="form" element={<Form user={user}></Form>} />
                        <Route path="account" element={<MyShipping shipping={user?.shipping}></MyShipping>} />
                        <Route path="/panel" element={<Panel></Panel>} />
                    </Routes>
                    <BottomNavigation section={bottomMenu.shipping} />
                </Box>
            )}
        </Box>
    )
}
