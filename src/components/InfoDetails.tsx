import React from "react"

import { Box, Paper } from "@mui/material"

interface InfoDetailsProps {}

export const InfoDetails: React.FC<InfoDetailsProps> = ({}) => {
    return (
        <Paper
            elevation={2}
            sx={{
                width: "100%",
                height: "max-content",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "2vw",
                padding: "5vw",
                minHeight: "43%",
            }}
        >
            <Box
                sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5vw",
                    width: "100%",
                }}
            >
                <Box sx={{ width: "100%", flexDirection: "column", gap: "4vw" }}>
                    <Box sx={{ width: "100%", flexDirection: "column", gap: "1vw" }}>
                        <p
                            style={{ fontSize: "2vw", textAlign: "end", textDecoration: "underline", color: "gray" }}
                            onClick={() => {}}
                        >
                            Editar
                        </p>
                        <p style={{ fontSize: "3.5vw", fontWeight: "600", textAlign: "center" }}>Informações detalhadas</p>
                        <hr style={{ width: "100%" }} />
                    </Box>

                    <Box sx={{ width: "100%", height: "75%", flexDirection: "column", gap: "1vw", fontSize: "3.0vw" }}>
                        <Box sx={{ width: "100%", alignItems: "center" }}>
                            <img
                                src="https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-agricultura-vetor-de-modelo-de-logotipo-de-agronegocio_194708-2343.jpg?w=2000"
                                alt=""
                                style={{ width: "40%", height: "100%", borderRadius: "2vw" }}
                            />
                            <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                <p>
                                    Tipo de negócio: <span style={{ fontWeight: "600" }}> Loja</span>
                                </p>
                                <p>
                                    Produtos:<span style={{ fontWeight: "600" }}> 25</span>
                                </p>
                                <p>
                                    Avaliações: <span style={{ fontWeight: "600" }}> 500</span>
                                </p>
                                <p>
                                    Localização:<span style={{ fontWeight: "600" }}> Curitiba, PR</span>{" "}
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
