import React, { useEffect } from "react"
import { Box, Paper, TextField, Button } from "@mui/material"
import { CardProduct } from "./CardProduct"
import { useHeader } from "../../hooks/useHeader"
import AddIcon from "@mui/icons-material/Add"
import { Formik, Form } from "formik"
import { CardCategory } from "./CardCategory"
import { ListTitle } from "../ListTitle"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"

interface NewCategoryProps {
    product: Product | Car
    user: User
}
interface FormValues {
    name: String
}
export const NewCategory: React.FC<NewCategoryProps> = ({ product }) => {
    const navigate = useNavigate()
    const user = useUser()
    const header = useHeader()

    const category: Category = { name: "Veículos", id: 1 }

    const handleSubmit = (values: FormValues) => {}

    useEffect(() => {
        header.setTitle("Nova Região")
    }, [])
    return (
        <>
            <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "20vw 0",
                gap: "4vw",
            }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        padding: "4vw",
                        flexDirection: "column",
                        gap: "4vw",
                        overflow: "auto",
                    }}
                >
                    <Paper
                        elevation={2}
                        sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "2vw",
                            padding: "4vw",
                            flexDirection: "column",
                            gap: "4vw",
                        }}
                    >
                        <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
                            {({ values, handleChange }) => (
                                <Form>
                                    <TextField
                                        label="Nome da Região"
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
                            padding: "4vw",
                            flexDirection: "column",
                            gap: "4vw",
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
                            padding: "4vw",
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
        </>
    )
}
