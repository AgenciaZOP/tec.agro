import React, { useEffect } from "react"
import { Box, Paper, Radio } from "@mui/material"
import info from "../../../assets/info.png"
import info2 from "../../../assets/info2.png"
import { Details } from "./Details"
import { useNavigate } from "react-router-dom"
import { useHeader } from "../../../hooks/useHeader"

interface IntroCropProps {}

export const IntroCrop: React.FC<IntroCropProps> = ({}) => {
    const navigate = useNavigate()
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Nova Safra")
    }, [])

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "4vw",
                padding: "20vw 0",
            }}
        >
            <Box
                sx={{
                    margin: "0 4vw 4vw",
                    flexDirection: "column",
                    gap: "4vw",
                    height: "100%",
                    width: "92vw",
                }}
            >
                <Paper
                    elevation={1}
                    sx={{
                        width: "92vw",
                        height: "65%",
                        flexDirection: "column",
                        padding: "4vw",
                        gap: "2vw",
                        borderRadius: "3vw",
                    }}
                >
                    <Box
                        sx={{
                            border: "0.1vw solid gray",
                            height: "100%",
                            width: "100%",
                            borderRadius: "2vw",
                            padding: "4vw",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        onClick={() => {
                            navigate("/search/zonespr")
                        }}
                    >
                        <Box
                            sx={{
                                alignItems: "center",
                                flexDirection: "column",
                                width: "100%",
                                gap: "1vw",
                                padding: "0 3vw",
                            }}
                        >
                            <Box sx={{ alignItems: "center", flexDirection: "column", width: "100%", gap: "1vw" }}>
                                <img src={info} alt="" style={{ width: "12vw" }} />
                                <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                    <p style={{ fontSize: "3.3vw" }}>Procurar por um</p>
                                    <p style={{ fontSize: "5vw", textDecoration: "underline" }}>Corretor</p>
                                </Box>
                            </Box>
                            <p style={{ fontSize: "3.3vw", fontWeight: "600" }}>Vantagens</p>
                        </Box>
                        <Box sx={{ padding: "3vw 10vw" }}>
                            <ul style={{ fontSize: "3.0vw", display: "flex", gap: "1.2vw", flexDirection: "column" }}>
                                <li>Lorem Ipsum is simply</li>
                                <li>Contrary to popular belief, Lorem Ipsum</li>
                                <li>Why do we use it?</li>
                                <li>The standard chunk of Lorem Ipsum</li>
                            </ul>
                        </Box>
                        <Box sx={{ flexDirection: "row", gap: "vw", width: "100%" }}>
                            <Details value="26" subtitle="Corretores" />
                            <Details value="53" subtitle="Vendas por corretores" />
                            <Details value="8" subtitle="Regiões" />
                            <Details value="5" subtitle="Corretores perto da sua região" />
                        </Box>
                    </Box>
                </Paper>
                <Paper
                    elevation={1}
                    sx={{
                        width: "92vw",
                        height: "30%",
                        flexDirection: "column",
                        padding: "4vw",
                        gap: "2vw",
                        borderRadius: "3vw",
                    }}
                >
                    <Box
                        sx={{
                            border: "0.1vw solid gray",
                            height: "100%",
                            width: "100%",
                            borderRadius: "2vw",
                            padding: "4vw",
                            flexDirection: "column",
                        }}
                        onClick={() => {
                            navigate("/producer/register")
                        }}
                    >
                        <Box
                            sx={{
                                alignItems: "center",
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                                gap: "1vw",
                                padding: "0 3vw",
                            }}
                        >
                            <Box
                                sx={{
                                    alignItems: "center",
                                    flexDirection: "column",
                                    width: "100%",
                                    height: "100%",
                                    gap: "1vw",
                                    justifyContent: "center",
                                }}
                            >
                                <img src={info2} alt="" style={{ width: "12vw" }} />
                                <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                                    <p style={{ fontSize: "3.3vw" }}>registrar sua safra</p>
                                    <p style={{ fontSize: "5vw", textDecoration: "underline" }}>Cadastro Próprio</p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
