import React, { useEffect } from "react"
import { useHeader } from "../hooks/useHeader"
import { Box, Button } from "@mui/material"
import { ListTitle } from "./ListTitle"
import { CardAgent } from "./PanelProducerAgent/CardAgent"
import colors from "../style/colors"
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred"

interface DescriptionCropProps {
    // crop: Crop
    user: User
}

export const DescriptionCrop: React.FC<DescriptionCropProps> = ({ user }) => {
    const header = useHeader()

    const agent: Agent = {
        id: 0,
        userId: user.id,
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

    const producer: Producer = {
        id: 0,
        userId: user.id,
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
            header.setTitle("Safra de Soja 2022/23")
        }
    }, [])

    return (
        <Box sx={{ flexDirection: "column", padding: "10vh 4vw 7vw", gap: "3vw", width: "100%", height: "93vh" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "auto",
                    flexDirection: "column",
                    gap: "3vw",
                    paddingBottom: "5vw",
                }}
            >
                <ListTitle title="Participantes" location="" />
                <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                    <CardAgent name="Produtor" type="producer" user={producer} />
                    <CardAgent name="Corretor" type="agent" user={agent} />
                    <CardAgent name="Comprador" type="adm" user={producer} />
                </Box>

                <p style={{ fontSize: "4vw" }}>Safra</p>
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: colors.secondary,
                        height: "72%",
                        border: "1px solid black",
                        borderRadius: "1.5vw",
                        padding: "6vw",
                        flexDirection: "column",
                        gap: "4vw",
                    }}
                >
                    <Box sx={{ width: "100%", flexDirection: "column", gap: "0.8vw" }}>
                        <p style={{ fontSize: "5.5vw" }}>Safra de Soja 2022/23</p>
                        <p style={{ fontSize: "3.2vw" }}>9,15 toneladas - Companhia</p>
                    </Box>
                    <Box sx={{ width: "100%", flexDirection: "column", gap: "4vw" }}>
                        <p style={{ fontSize: "3.5vw" }}> Minim: veniam quis nostrud exercitation </p>
                        <hr />
                        <p style={{ fontSize: "3.5vw" }}> Cillum: dolore eu fugiat nulla pariatur </p>
                        <hr />
                        <p style={{ fontSize: "3.5vw" }}> Excepteur: sint occaecat cupidatat non </p>
                        <hr />
                        <p style={{ fontSize: "3.5vw" }}> Mi Sagitus: 16546545 </p>
                        <hr />
                        <p style={{ fontSize: "3.5vw" }}> Nascetur: 12154-4545 </p>
                        <hr />
                        <p style={{ fontSize: "3.5vw" }}> Excepteur: sint occaecat cupidatat non </p>
                        <hr />

                        <Box sx={{ flexDirection: "column" }}>
                            <p>Documentação enviada</p>
                            <img
                                src="https://contratocerto.com.br/wp-content/uploads/2020/07/Contrato-de-coaching-pdf.jpg"
                                alt=""
                                style={{ width: "12vw", transform: "rotate(90deg)" }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{}}
                    //onClick={handleReject}
                    color="error"
                    endIcon={<ReportGmailerrorredIcon />}
                >
                    Bloquear Safra
                </Button>
            </Box>
        </Box>
    )
}
