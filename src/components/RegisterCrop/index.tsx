import React, { useState } from "react"
import { Box, IconButton, Paper, TextField, Button, SxProps } from "@mui/material"
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"
import { Form, Formik } from "formik"
import MaskedInput from "../MaskedInput"
import { useDocumentMask } from "../../hooks/useDocumentMask"
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import { Avatar, ExtFile } from "@files-ui/react"
import { UploadDocuments } from "../UploadDocuments"

interface RegisterCropProps {}

interface FormValues {
    name: string
    document: string
    birth: string
}
export const RegisterCrop: React.FC<RegisterCropProps> = ({}) => {
    const document = useDocumentMask()
    const [gallery, setGallery] = useState<ExtFile[]>([])
    const [files, setFiles] = useState<ExtFile[]>([])

    const inputStyle = {
        "& .MuiInputBase-input": {
            padding: "0 1vw",
            fontSize: "3.5vw",
        },
        "& .MuiInputLabel-root": {
            fontSize: "3.2vw",
        },
    }

    const initialValues = {
        name: "",
        document: "",
        birth: "",
    }
    const handleSubmit = (values: FormValues) => {
        console.log(values)
        const formData = new FormData()

        if (files.length > 0) formData.append("file", files[0].file!)

        if (gallery.length > 0) {
            gallery.map((file) => {
                formData.append(`gallery-${gallery.indexOf(file)}`, file.file!)
            })
        }
    }
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                padding: "0",
            }}
        >
            <Box
                sx={{
                    width: "92vw",
                    height: "100%",
                    overflow: "auto",
                    flexDirection: "column",
                    gap: "2vw",
                    borderRadius: "2vw",
                    margin: "0 4vw",
                }}
            >
                <p style={{ width: "100%", textAlign: "center" }}>Preencha os dados abaixo</p>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, handleChange }) => (
                        <Form>
                            <Paper
                                sx={{
                                    width: "100%",
                                    border: "0.1vw solid gray",
                                    borderRadius: "3vw",
                                    padding: "5vw",
                                    flexDirection: "column",
                                    gap: "0vw",
                                }}
                            >
                                <p style={{ fontSize: "3.5vw", fontWeight: "600" }}>Informações Básicas</p>
                                <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                                    <Box sx={{ flexDirection: "column", gap: "4vw" }}>
                                        <TextField
                                            label="Responsável legal"
                                            name="name"
                                            variant="standard"
                                            value={values.name}
                                            onChange={handleChange}
                                            sx={inputStyle}
                                        />
                                        <TextField
                                            label="CPF/CNPJ"
                                            name="document"
                                            variant="standard"
                                            value={values.document}
                                            onChange={handleChange}
                                            sx={inputStyle}
                                            InputProps={{
                                                inputComponent: MaskedInput,
                                                inputProps: { mask: document(values.document) },
                                            }}
                                        />
                                        <TextField
                                            label="Data de Nascimento"
                                            name="birth"
                                            variant="standard"
                                            value={values.birth}
                                            onChange={handleChange}
                                            sx={inputStyle}
                                        />
                                    </Box>
                                    <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                                        <p style={{ fontSize: "3vw" }}>Documentação Enviada</p>
                                        <UploadDocuments
                                            gallery={gallery}
                                            setGallery={setGallery}
                                            style={{ gap: "1vw", width: "100%" }}
                                        />
                                    </Box>
                                </Box>
                            </Paper>
                            <Paper
                                sx={{
                                    width: "100%",
                                    border: "0.1vw solid gray",
                                    borderRadius: "3vw",
                                    flexDirection: "column",
                                    padding: "5vw",
                                }}
                            >
                                <p style={{ fontSize: "3.5vw" }}>Endereço</p>
                                <Box sx={{ flexDirection: "column", gap: "4vw" }}>
                                    <TextField
                                        label="Responsável legal"
                                        name="name"
                                        variant="standard"
                                        value={values.name}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                    />
                                    <TextField
                                        label="CPF/CNPJ"
                                        name="document"
                                        variant="standard"
                                        value={values.document}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                    />
                                    <TextField
                                        label="Data de Nascimento"
                                        name="birth"
                                        variant="standard"
                                        value={values.birth}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                    />
                                </Box>
                            </Paper>
                            <Paper
                                sx={{
                                    width: "100%",
                                    border: "0.1vw solid gray",
                                    borderRadius: "3vw",
                                    padding: "5vw",
                                    flexDirection: "column",
                                }}
                            >
                                <p style={{ fontSize: "3.5vw" }}>Valores</p>
                                <Box sx={{ flexDirection: "column", gap: "4vw" }}>
                                    <TextField
                                        label="Responsável legal"
                                        name="name"
                                        variant="standard"
                                        value={values.name}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                    />
                                    <TextField
                                        label="CPF/CNPJ"
                                        name="document"
                                        variant="standard"
                                        value={values.document}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                    />
                                    <TextField
                                        label="Data de Nascimento"
                                        name="birth"
                                        variant="standard"
                                        value={values.birth}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                    />
                                </Box>
                            </Paper>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {}}
                                style={{ alignItems: "center", gap: "2vw", margin: "2vw 0" }}
                            >
                                Publicar
                                <CheckCircleOutlineOutlinedIcon color="secondary" />
                            </Button>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "gray", alignItems: "center", gap: "2vw", marginBottom: "4vw" }}
                                onClick={() => {}}
                            >
                                Agendar
                                <DateRangeOutlinedIcon color="secondary" />
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}
