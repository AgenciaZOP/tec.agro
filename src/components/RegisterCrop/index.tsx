import React from "react"
import { Box, IconButton, Paper, TextField, Button, SxProps } from "@mui/material"
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"
import { Form, Formik } from "formik"
import MaskedInput from "../MaskedInput"
import { useDocumentMask } from "../../hooks/useDocumentMask"
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"

interface RegisterCropProps {}

interface FormValues {
    name: string
    document: string
    birth: string
}
export const RegisterCrop: React.FC<RegisterCropProps> = ({}) => {
    const document = useDocumentMask()
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
    }
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                padding: "0 4vw",
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "auto",
                    flexDirection: "column",
                    padding: "3vw",
                    gap: "2vw",
                    borderRadius: "2vw",
                }}
            >
                <p style={{ width: "100%", textAlign: "center" }}>Preencha os dados abaixo</p>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, handleChange }) => (
                        <Form>
                            <Box
                                sx={{
                                    width: "100%",
                                    border: "0.1vw solid gray",
                                    borderRadius: "3vw",
                                    padding: "3vw",
                                    flexDirection: "column",
                                    gap: "0vw",
                                }}
                            >
                                <p style={{ fontSize: "3.2vw", fontWeight: "600" }}>Informações Básicas</p>
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

                                        <Box sx={{ gap: "1vw", width: "100%" }}>
                                            <img
                                                src="https://contratocerto.com.br/wp-content/uploads/2020/07/Contrato-de-coaching-pdf.jpg"
                                                style={{ width: "12vw" }}
                                                alt="Documento"
                                            />
                                            <img
                                                src="https://s2-g1.glbimg.com/_bCeHe8l8gGuZ6XfL0C_rYHhNB4=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/K/iF7eHyTky2IZDMsAvVHQ/whatsapp-image-2019-04-04-at-4.55.07-pm.jpeg"
                                                style={{ width: "12vw", transform: "rotate(90deg)" }}
                                                alt=""
                                            />
                                            <img
                                                src="https://manuais.ifsp.edu.br/uploads/images/gallery/2022-07/scaled-1680-/image-1657389184596.png"
                                                style={{ width: "12vw" }}
                                                alt=""
                                            />
                                            <img
                                                src="https://contratocerto.com.br/wp-content/uploads/2020/07/Contrato-de-coaching-pdf.jpg"
                                                style={{ width: "12vw" }}
                                                alt="Documento"
                                            />
                                            <IconButton sx={{ display: "flex", justifyContent: "end" }} onClick={() => {}}>
                                                <ArrowCircleUpSharpIcon color="primary" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    border: "0.1vw solid gray",
                                    borderRadius: "3vw",
                                    padding: "3vw",
                                    flexDirection: "column",
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
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    border: "0.1vw solid gray",
                                    borderRadius: "3vw",
                                    padding: "3vw",
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
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {}}
                                size="small"
                                style={{ alignItems: "center", gap: "2vw" }}
                            >
                                Publicar
                                <CheckCircleOutlineOutlinedIcon color="secondary" />
                            </Button>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "gray", alignItems: "center", gap: "2vw" }}
                                onClick={() => {}}
                                size="small"
                            >
                                Agendar
                                <DateRangeOutlinedIcon color="secondary" />
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Box>
    )
}
