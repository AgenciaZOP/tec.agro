import React, { useEffect, useState } from "react"
import { Avatar, Box, Paper } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { EditInfoDetail } from "./EditInfoDetail"

interface InfoDetailsProps {
    object: Business | Shipping
    editingMode: boolean
}

export const InfoDetails: React.FC<InfoDetailsProps> = ({ object, editingMode }) => {
    const [isEditing, setEditing] = useState(editingMode)

    const handleEditing = () => {
        if (isEditing) {
            setEditing(false)
        } else {
            setEditing(true)
        }
    }

    useEffect(() => {
        console.log(isEditing)
    }, [isEditing])

    return (
        <Paper
            elevation={2}
            sx={{
                width: "100%",
                height: "max-content",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "2vw",
                padding: "4vw",
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
                        <Box
                            sx={{
                                alignSelf: "flex-end",
                                backgroundColor: isEditing ? "#F0C7FF" : "white",
                                padding: isEditing ? "0vw 3vw" : "0vw ",
                                borderRadius: "2vw",
                                alignItems: "center",
                                gap: "0.5vw",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "2.5vw",
                                    textDecoration: "underline",
                                    color: "black",
                                }}
                                onClick={handleEditing}
                            >
                                {isEditing ? "Salvar" : "Editar"}
                            </p>

                            {isEditing && <EditIcon sx={{ width: "3vw" }} />}
                        </Box>
                        <p style={{ fontSize: "3.5vw", fontWeight: "600", textAlign: "center" }}>Informações detalhadas</p>
                        <hr style={{ width: "100%" }} />
                    </Box>
                    {!isEditing ? (
                        <Box sx={{ width: "100%", height: "75%", flexDirection: "column", gap: "1vw", fontSize: "3.0vw" }}>
                            <Box sx={{ width: "100%", alignItems: "center" }}>
                                <Avatar
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
                    ) : (
                        <EditInfoDetail object={object} />
                    )}
                </Box>
            </Box>
        </Paper>
    )
}
