import React, { useEffect } from "react"
import { Box, Button, Paper } from "@mui/material"
import { useHeader } from "../../../hooks/useHeader"
import { useNavigate } from "react-router"

interface SignupProps {
    user: User
}

export const Signup: React.FC<SignupProps> = ({ user }) => {
    const header = useHeader()
    const navigate = useNavigate()

    useEffect(() => {
        header.setTitle("Minha Transportadora")
    }, [])

    return (
        <Paper
            sx={{
                flexDirection: "column",
                justifyContent: "space-evenly",
                width: "100%",
                padding: "10vw",
                textAlign: "center",
                borderRadius: "2vw",
                marginBottom: "10vw",
            }}
        >
            <p style={{ fontSize: "6vw" }}>Você ainda não é cadastrado como Transportadora</p>
            <p style={{ fontSize: "4vw" }}>
                Complete seu cadastro e envie para análise para desbloquear outras funcionalidades
            </p>
            <Button variant="contained" onClick={() => navigate("/shipping/form")}>
                Começar cadastro
            </Button>
            <Button variant="contained" onClick={() => navigate("/shipping/account")}>
                Meu perfil
            </Button>
        </Paper>
    )
}
