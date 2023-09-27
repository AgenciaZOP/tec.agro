import React from "react"
import { Box, Paper, Button, TextField, IconButton, SxProps } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { Formik, Form } from "formik"
import { SearchInput } from "../../../components/SearchInput"
import { BottomNavigation } from "../../../components/BottomNavigation"
import { useNavigationList } from "../../../hooks/useNavigationList"
import DeleteIcon from "@mui/icons-material/Delete"
import { CardProduct } from "../../../components/PanelBusinessShipping/CardProduct"

import { iconButtonStyle, iconStyle } from "../../../components/style"
import { Header } from "../../../components/Header"

interface CategoryProps {
    category: Category
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
    const product: Product = {
        name: "Fertilizante",
        type: "Produto",
        image: "",
    }

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                flexDirection: "column",
                padding: "20vw 0",
                gap: "4vw",
            }}
        >
            <SearchInput placeholder={"produtos"} onChange={() => {}} />
            <Box sx={{ flexDirection: "column", gap: "4vw", height: "91%", padding: "4vw", overflow: "auto" }}>
                <Paper
                    elevation={2}
                    sx={{
                        width: "100%",
                        height: "30vw",
                        borderRadius: "2vw",
                        padding: "3vw 5vw",
                        flexDirection: "column",
                        gap: "3vw",
                    }}
                >
                    <TextField
                        label="Nome da Categoria"
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
                        value={category.name}
                        disabled
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ width: "40%", fontSize: "2vw", alignSelf: "flex-end" }}
                    >
                        Excluir categoria
                    </Button>
                </Paper>
                <Paper
                    elevation={2}
                    sx={{
                        width: "100%",
                        borderRadius: "2vw",
                        padding: "4vw 3vw",
                        flexDirection: "column",
                        gap: "4vw",
                        paddingBottom: "5vw",
                        overflowY: "auto",
                    }}
                >
                    <p style={{ fontSize: "3.5vw", fontWeight: "600", textAlign: "center" }}>Produtos</p>
                    <CardProduct
                        local={false}
                        product={product}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        subtitle=""
                        action=""
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
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
                            fontSize: "2.5vw",
                            flexDirection: "column",
                            position: "fixed",
                            bottom: "20vw",
                            right: "4vw",
                        }}
                        onClick={() => {}}
                    >
                        <AddIcon color="secondary" />
                        Produto ou Serviço
                    </Button>
                </Paper>
            </Box>
        </Box>
    )
}
