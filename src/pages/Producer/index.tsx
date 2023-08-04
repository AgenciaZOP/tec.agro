import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"
import { BottomNavigation } from "../../components/BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import { Panel } from "./Panel"
import { Chats } from "../../components/Chats"
import { IntroCrop } from "./Panel/IntroCrop"
import { RegisterCrop } from "../../components/RegisterCrop"

interface ProducerProps {
    user: User
}

export const Producer: React.FC<ProducerProps> = ({ user }) => {
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
                <Box sx={{ padding: "10vw 0vw 18vw 0 ", width: "100vw" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                        <Route path="form" element={<Form user={user}></Form>} />
                        <Route path="panel" element={<Panel user={user}></Panel>} />
                        <Route path="chats" element={<Chats></Chats>} />
                        <Route path="intro" element={<IntroCrop />} />
                        <Route path="register" element={<RegisterCrop />} />
                    </Routes>
                    <BottomNavigation section={bottomMenu.producer} />
                </Box>
            )}
        </Box>
    )
}
