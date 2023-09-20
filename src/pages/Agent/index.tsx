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
import { useLocation } from "react-router-dom"
interface AgentProps {
    user: User
}

export const Agent: React.FC<AgentProps> = ({ user }) => {
    const location = useLocation()
    const { pathname } = location
    const bottomMenu = useNavigationList()

    const renderHeaderMenu = () => {
        if (pathname === "/agent/analysis") {
            return (
                <>
                    <Header back location="/agent/requests" />
                    <BottomNavigation section={bottomMenu.agent} external/>
                </>
            )
        }else if (pathname === "/agent/register") {
            return (
                <>
                    <Header back location="/agent/analysis" />
                    <BottomNavigation section={bottomMenu.agent} external/>
                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <BottomNavigation section={bottomMenu.agent} />
                </>
            )
        }
    }
    return (
        <>
            {" "}
            {renderHeaderMenu()}
            <Box sx={{ width: "100%", padding: "7vh 0 10vh" }}>
                {user.agent ? (
                    user.agent.active ? (
                        <></>
                    ) : (
                        <Verification />
                    )
                ) : (
                    <Box sx={{ padding: "10vw 0 0", width: "100vw" }}>
                        <Routes>
                            <Route index element={<Signup user={user}></Signup>} />
                            <Route path="form" element={<Form user={user}></Form>} />
                            <Route path="panel" element={<Panel user={user}></Panel>} />
                            <Route path="requests" element={<Requests />} />
                            <Route
                                path="analysis"
                                element={<Analysis user={user} button="Aceitar Solicitação" location="agent/register" />}
                            />
                            <Route path="chats" element={<Chats channel="buyer" />} />
                            <Route path="register" element={<RegisterCrop />} />
                        </Routes>
                    </Box>
                )}
            </Box>
        </>
    )
}
