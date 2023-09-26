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
import { NewCategory as NewZone } from "../../components/PanelBusinessShipping/NewCategory"
import { useLocation } from "react-router-dom"
interface ShippingProps {
    user: User
}

export const Shipping: React.FC<ShippingProps> = ({ user }) => {
    const bottomMenu = useNavigationList()

    const location = useLocation()
    const { pathname } = location

    const shipping: Shipping = {
        active: false,
        name: "Transportadora Feed",
        phone: "00000000000",
        document: "",
        user: user,
        image: "https://encurtador.com.br/bgrtZ",
        email: "transportadorafeed@gmail.com",
        id: 0,
        date: "",
        userId: 0,
        rating: 0,
        ratings: 0,
    }

    const car: Car = {
        image: "",
        name: "trator",
        type: "",
    }

    const renderHeaderMenu = () => {
        console.log(pathname)
        if (pathname === "/shipping/newZone") {
            return (
                <>
                    {" "}
                    <Header back location="/shipping/panel" />
                    <BottomNavigation external section={bottomMenu.shipping} />
                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <BottomNavigation section={bottomMenu.shipping} />
                </>
            )
        }
    }

    return (
        <Box sx={{ width: "100%" }}>
            {renderHeaderMenu()}
            {user.shipping ? (
                user.shipping.active ? (
                    <></>
                ) : (
                    <Verification />
                )
            ) : (
                <Box sx={{ width: "100vw" }}>
                    <Routes>
                        <Route index element={<Signup user={user} />} />
                        <Route path="form" element={<Form user={user} />} />
                        <Route path="account" element={<MyShipping shipping={shipping} />} />
                        {/* <Route path="new" element={<NewCar shipping={shipping}></NewCar>} /> */}
                        <Route path="/newZone" element={<NewZone user={user} product={car} />} />
                        <Route path="/panel" element={<Panel />} />
                    </Routes>
                </Box>
            )}
        </Box>
    )
}
