import React, { useState, useEffect } from "react"
import { Box, SxProps, TextField, Button } from "@mui/material"
import { Formik, Form } from "formik"
import { Avatar } from "@files-ui/react"

interface EditInfoDetailProps {
    object: Business | Shipping
}
interface FormValues {
    logo: string
    type: string
    products: number
    assesments: number
    local: string
}

export const EditInfoDetail: React.FC<EditInfoDetailProps> = ({ object }) => {
    const [image, setImage] = useState<File>()

    const _inputStyle: SxProps = {
        "& .MuiInputBase-input": {
            fontSize: "3vw",
            padding: 0,
        },
        "& .MuiInputLabel-root": {
            fontSize: "2.9vw",
        },
    }
    const initialValues = {
        logo: object?.image || "",
        type: object?.type || "",
        products: 120,
        assesments: 1.4,
        local: "Curitiba, PR",
    }
    const handleSubmit = (values: FormValues) => {
        console.log(values)
    }
    return (
        <Box sx={{ flexDirection: "column", width: "100%", height: "max-content", gap: "4vw" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <Box sx={{ width: "100%", height: "75%", flexDirection: "column", gap: "vw", fontSize: "3.0vw" }}>
                            <Box sx={{ width: "100%", alignItems: "center", gap: "7vw" }}>
                                <Avatar
                                    src={image || object?.image}
                                    onChange={(file) => setImage(file)}
                                    smartImgFit={"orientation"}
                                    changeLabel="Clique para trocar a imagem"
                                    emptyLabel="Clique para enviar uma imagem"
                                    style={{
                                        width: "35%",
                                        height: "20vw",
                                        fontSize: "2.5vw",
                                    }}
                                />
                                <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                    <TextField
                                        label="Tipo de Negócio"
                                        name="type"
                                        value={values.type}
                                        onChange={handleChange}
                                        variant="standard"
                                        sx={_inputStyle}
                                    />
                                    <TextField
                                        label="Produtos"
                                        name="products"
                                        value={values.products}
                                        onChange={handleChange}
                                        variant="standard"
                                        sx={_inputStyle}
                                    />

                                    <TextField
                                        label="Localização"
                                        name="local"
                                        value={values.local}
                                        onChange={handleChange}
                                        variant="standard"
                                        sx={_inputStyle}
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <Button type="submit"></Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
