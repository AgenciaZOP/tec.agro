import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"
import { Panel } from "./Panel"
import { BottomNavigation } from "../../components/BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import { Requests } from "./Requests"
import { Analysis } from "../../components/PanelProducerAgent/Analysis"
import { Chats } from "../../pages/Chats"
import { RegisterCrop } from "../../components/RegisterCrop"

interface AgentProps {
    user: User
}

export const Agent: React.FC<AgentProps> = ({ user }) => {
    const bottomMenu = useNavigationList()
    return (
        <Box sx={{ width: "100%", padding: "7vh 0 10vh" }}>
            <Header />
            {user.agent ? (
                user.agent.active ? (
                    <></>
                ) : (
                    <Verification />
                )
            ) : (
                <Box sx={{ padding: "10vw 4vw 0", width: "100vw" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                        <Route path="form" element={<Form user={user}></Form>} />
                        <Route path="panel" element={<Panel user={user}></Panel>} />
                        <Route path="requests" element={<Requests></Requests>} />
                        <Route
                            path="analysis"
                            element={
                                <Analysis user={user} button="Aceitar Solicitação" location="agent/register"></Analysis>
                            }
                        />
                        <Route path="chats" element={<Chats channel="buyer" />} />
                        <Route path="register" element={<RegisterCrop></RegisterCrop>} />
                    </Routes>
                    <BottomNavigation section={bottomMenu.agent} />
                </Box>
            )}
        </Box>
    )
}
