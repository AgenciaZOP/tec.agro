import React from "react"
import { Box, Paper, Radio } from "@mui/material"
import info from "../../../assets/info.png"
import info2 from "../../../assets/info2.png"
import { Details } from "./Details"
import { useNavigate } from "react-router-dom"

interface IntroCropProps {}

export const IntroCrop: React.FC<IntroCropProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "4vw",
                padding: "0",
            }}
        >
            <Paper
                elevation={1}
                sx={{
                    width: "92vw",
                    height: "65%",
                    overflow: "auto",
                    flexDirection: "column",
                    padding: "3vw",
                    gap: "2vw",
                    borderRadius: "3vw",
                    margin: "0 4vw",
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
                                <p
                                    style={{ fontSize: "5vw", textDecoration: "underline" }}
                                    onClick={() => {
                                        navigate("/search/zonespr")
                                    }}
                                >
                                    Corretor
                                </p>
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
                    overflow: "auto",
                    flexDirection: "column",
                    padding: "3vw",
                    gap: "2vw",
                    borderRadius: "3vw",
                    margin: "0 4vw",
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
                                <p
                                    style={{ fontSize: "5vw", textDecoration: "underline" }}
                                    onClick={() => {
                                        navigate("/producer/register")
                                    }}
                                >
                                    Cadastro Próprio
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
