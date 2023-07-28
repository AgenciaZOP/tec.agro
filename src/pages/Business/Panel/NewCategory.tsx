import React, { useEffect } from "react"
import { Box, Paper, TextField, Button } from "@mui/material"
import { CardProduct } from "./CardProduct"
import { useHeader } from "../../../hooks/useHeader"
import AddIcon from "@mui/icons-material/Add"
import { Formik, Form } from "formik"
import { CardCategory } from "./CardCategory"
import { ListTitle } from "../../../components/ListTitle"
import { useNavigate } from "react-router-dom"

interface NewCategoryProps {
    product: Product
}
interface FormValues {
    name: String
}
export const NewCategory: React.FC<NewCategoryProps> = ({ product }) => {
    const navigate = useNavigate()

    const category: Category = { name: "Veículos", id: 1, crops: [] }

    const handleSubmit = (values: FormValues) => {}

    return (
        <Box sx={{ width: "100%", padding: "0 5vw", height: "100%", overflow: "auto" }}>
            {" "}
            <Box sx={{ width: "100%", flexDirection: "column", gap: "3vw" }}>
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
                    <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
                        {({ values, handleChange }) => (
                            <Form>
                                <TextField
                                    label="Nome da Categoria"
                                    variant="standard"
                                    sx={{
                                        "& .MuiInputBase-input": {
                                            textAlign: "center",
                                            fontSize: "3vw",
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontSize: "3vw",
                                        },
                                    }}
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{ width: "40%", fontSize: "2vw", alignSelf: "flex-end" }}
                                >
                                    Solicitar Cadastro
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
                <Paper
                    elevation={2}
                    sx={{
                        borderRadius: "2vw",
                        padding: "4vw 3vw",
                        flexDirection: "column",
                        gap: "3vw",
                        height: "30vh",
                    }}
                >
                    <ListTitle title="Categorias em Análise" location="categories"></ListTitle>
                    <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                        <CardCategory category={category} activeCategory={false} />
                        <CardCategory category={category} activeCategory={false} />
                    </Box>
                </Paper>
                <Paper
                    elevation={2}
                    sx={{
                        height: "29vh",
                        borderRadius: "2vw",
                        padding: "4vw 3vw",
                        flexDirection: "column",
                        gap: "2vw",
                    }}
                >
                    <ListTitle title="Categorias Aprovadas" location="approved"></ListTitle>
                    <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                        <CardCategory category={category} activeCategory={true} />
                        <CardCategory category={category} activeCategory={true} />
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
