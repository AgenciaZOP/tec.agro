import React, { useEffect } from "react"
import { Box, Button } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { ListTitle } from "../../components/ListTitle"
import { useHeader } from "../../hooks/useHeader"
import { CardAgent } from "../../components/PanelProducerAgent/CardAgent"
import { useNavigate } from "react-router-dom"

interface UserstoApproveProps {
    user: User
}

export const UserstoApprove: React.FC<UserstoApproveProps> = ({ user }) => {
    const header = useHeader()
    const navigate = useNavigate()

    const agent: Agent = {
        id: 0,
        userId: 0,
        user: user,
        date: "29/05/2000",
        name: "Julian Galdino",
        email: "",
        document: "",
        phone: "",
        image: "",
        rating: 5,
        ratings: 5,
        active: false,
    }
    useEffect(() => {
        return () => {
            header.setTitle("Usuários")
        }
    }, [])

    return (
        <Box sx={{ height: "100%", padding: "0 4vw", flexDirection: "column", paddingTop: "23vw" }}>
            <SearchInput placeholder="usuário" onChange={() => {}} />
            <Box
                sx={{
                    overflow: "auto",
                    height: "80%",
                    padding: "3vw 0vw",
                    flexDirection: "column",
                    gap: "2vw",
                }}
            >
                <ListTitle title="Região #1" location="" />
                <CardAgent
                    name="Corretor"
                    type="agent"
                    user={agent}
                    handleClick={() => {
                        navigate("/adm/users/user")
                    }}
                />
                <CardAgent
                    name="Corretor"
                    type="agent"
                    user={agent}
                    handleClick={() => {
                        navigate("/adm/users/user")
                    }}
                />
                <CardAgent
                    name="Corretor"
                    type="agent"
                    user={agent}
                    handleClick={() => {
                        navigate("/adm/users/user")
                    }}
                />
                <ListTitle title="Região #2" location="" />
                <CardAgent
                    name="Corretor"
                    type="agent"
                    user={agent}
                    handleClick={() => {
                        navigate("/adm/users/user")
                    }}
                />
            </Box>
        </Box>
    )
}
