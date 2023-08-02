import React from "react"
import { Box, Paper, Button, TextField } from "@mui/material"
import { CardProduct } from "../../components/Panel/CardProduct"
import AddIcon from "@mui/icons-material/Add"
import { Formik, Form } from "formik"
import { SearchInput } from "../../components/SearchInput"
import { BottomNavigation } from "../../components/BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import DeleteIcon from "@mui/icons-material/Delete"

interface CategoryProps {
    category: Category
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
    const bottomMenu = useNavigationList()

    const product: Product = {
        name: "Fertilizante",
        type: "Produto",
        image: "",
    }

    return (
        <Box
            sx={{
                width: "100%",
                padding: "0 5vw",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                paddingBottom: "8vh",
                
            }}
        >
            <SearchInput placeholder={"produtos"} onChange={() => {}} />
            <Box sx={{ flexDirection: "column", gap: "3vw", height: "100%",paddingBottom: "3vh",
                overflow: "auto",}}>
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
                    <Button variant="contained" type="submit" sx={{ width: "40%", fontSize: "2vw", alignSelf: "flex-end" }}>
                        Excluir Categoria
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
                    <p style={{ fontSize: "3.5vw", fontWeight: "600", textAlign: "center" }}>Produtos</p>
                    <CardProduct
                        local={false}
                        product={product}
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
                        image="https://static3.tcdn.com.br/img/img_prod/248016/fertilizante_organico_classe_a_biokashi_1198_1_361a04649ba7df17cd31213b1ce01c2d.jpg"
                    />
                    <CardProduct
                        local={false}
                        product={product}
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
                        Adicionar produto ou serviço
                    </Button>
                </Paper>
            </Box>
            <BottomNavigation section={bottomMenu.business} />
        </Box>
    )
}
