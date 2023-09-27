import React, { useEffect } from "react"
import { Box, Paper, TextField, Button } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { useNavigationList } from "../../../hooks/useNavigationList"
import { BottomNavigation } from "../../../components/BottomNavigation"
import AddIcon from "@mui/icons-material/Add"
import { CardProduct as CardCar } from "../../../components/PanelBusinessShipping/CardProduct"
import { useHeader } from "../../../hooks/useHeader"

interface ZoneProps {}

export const Zone: React.FC<ZoneProps> = ({}) => {
    const header = useHeader()

    const car: Car = {
        image: "",
        name: "cdb",
        type: "",
    }

    useEffect(() => {
        return header.setTitle("Região #")
    }, [])
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "20vw 0",
                gap: "4vw",
            }}
        >
            <SearchInput placeholder={"veículos"} onChange={() => {}} />
            <Box
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    padding: "4vw",
                    gap: "4vw",
                    height: "91%",
                    overflowY: "auto",
                }}
            >
                <Paper
                    elevation={2}
                    sx={{
                        width: "100%",
                        borderRadius: "2vw",
                        padding: "4vw",
                        flexDirection: "column",
                        gap: "4vw",
                    }}
                >
                    <TextField
                        label="Nome da Região"
                        variant="standard"
                        sx={{
                            "& .MuiInputBase-input": {
                                textAlign: "center",
                                fontSize: "4vw",
                            },
                            "& .MuiInputLabel-root": {
                                fontSize: "3vw",
                            },
                        }}
                        name="name"
                        value="Zabelê"
                        disabled
                    />
                    <Button variant="contained" type="submit" sx={{ width: "40%", fontSize: "2vw", alignSelf: "flex-end" }}>
                        Excluir região
                    </Button>
                </Paper>
                <Paper
                    elevation={2}
                    sx={{
                        width: "100%",
                        borderRadius: "2vw",
                        padding: "4vw",
                        flexDirection: "column",
                        gap: "2vw",
                        paddingBottom: "4vw",
                        overflowY: "auto",
                    }}
                >
                    <p style={{ fontSize: "3.5vw", fontWeight: "600", textAlign: "center" }}>Veículos</p>
                    <CardCar
                        local={false}
                        product={car}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            width: "25%",
                            borderRadius: "3vw",
                            fontSize: "2vw",
                            flexDirection: "column",
                            position: "fixed",
                            bottom: "20vw",
                            right: "4vw",
                        }}
                        onClick={() => {}}
                    >
                        <AddIcon color="secondary" />
                        Adicionar caminhão
                    </Button>
                </Paper>
            </Box>
        </Box>
    )
}
