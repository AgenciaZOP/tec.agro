import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"
import { MyShipping } from "../../components/MyShipping"


interface ShippingProps {
    user: User
}

export const Shipping: React.FC<ShippingProps> = ({ user }) => {
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
        ratings: 0
    }
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
                <Box sx={{ padding: "12vh 0vw 10vh 0vw" , width: "100vw" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                        <Route path="form" element={<Form user={user}></Form>} />
                        <Route path="account" element={<MyShipping shipping={user?.shipping || shipping} />} />
                    </Routes>
                </Box>
            )}
        </Box>
    )
}
