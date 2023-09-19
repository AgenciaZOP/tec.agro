import React from "react"
import { Box, Paper, TextField, Button } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { useNavigationList } from "../../../hooks/useNavigationList"
import { BottomNavigation } from "../../../components/BottomNavigation"
import AddIcon from "@mui/icons-material/Add"
import { CardProduct as CardCar } from "../../../components/PanelBusinessShipping/CardProduct"

interface ZoneProps {}

export const Zone: React.FC<ZoneProps> = ({}) => {
    const bottomMenu = useNavigationList()

    const car: Car = {
        image: "",
        name: "cdb",
        type: "",
    }
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                paddingBottom: "8vh",
            }}
            >
            <SearchInput placeholder={"veículos"} onChange={() => {}} />
            <Box
                sx={{
                    flexDirection: "column",
                    gap: "3vw",
                    height: "100%",
                    padding: "0 4vw 3vh",
                    overflow: "auto"
                }}
            >
                <Paper
                    elevation={2}
                    sx={{
                        width: "100%",
                        height: "15vh ",
                        borderRadius: "2vw",
                        padding: "3vw 5vw",
                        flexDirection: "column",
                        gap: "3vw",
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
                        padding: "4vw 3vw",
                        flexDirection: "column",
                        gap: "2vw",
                        paddingBottom: "5vw",
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
                            bottom: "11vh",
                            right: "5vw",
                        }}
                        onClick={() => {}}
                    >
                        <AddIcon color="secondary" />
                        Adicionar caminhão
                    </Button>
                </Paper>
            </Box>
            <BottomNavigation section={bottomMenu.shipping} />
        </Box>
    )
}
