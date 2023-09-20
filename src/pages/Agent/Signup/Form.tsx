import React, { useState } from "react"
import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    FormControlLabel,
    IconButton,
    Paper,
    SxProps,
    TextField,
} from "@mui/material"
import { Formik, Form as Formu } from "formik"
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { useSnackbar } from "burgos-snackbar"
import { useAgents } from "../../../hooks/useAgents"
import MaskedInput from "../../../components/MaskedInput"
import { useDocumentMask } from "../../../hooks/useDocumentMask"
import { inputStyle, paperStyle, styleBox } from "./../../styles"
import { Avatar, ExtFile } from "@files-ui/react"
import { UploadDocuments } from "../../../components/UploadDocuments"

interface FormProps {
    user: User
}

export const Form: React.FC<FormProps> = ({ user }) => {
    const agents = useAgents()

    const { snackbar } = useSnackbar()
    const documentMask = useDocumentMask()

    const [image, setImage] = useState<File>()
    const [gallery, setGallery] = useState<ExtFile[]>([])
    const [files, setFiles] = useState<ExtFile[]>([])

    const initialValues: Agent = {
        id: 0,
        userId: user.id,
        user: user,
        date: "",
        name: "",
        email: "",
        document: "",
        phone: "",

        image: "",
        rating: 5,
        ratings: 5,
        active: false,
        galleryDocuments: "",
    }

    const handleSubmit = (values: Agent) => {
        if (agents.loading) return

        if (!image) {
            snackbar({ severity: "error", text: "Envie uma imagem" })
            return
        }

        agents.new({ ...values, file: image })

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
                overflowY: "auto",
                paddingBottom: "10vw",
            }}
        >
            <Box
                sx={{
                    gap: "5vw",
                    height: "100%",
                    flexDirection: "column",
                    width: "92vw",
                    margin: "0 4vw"
                }}
            >
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, handleChange }) => (
                        <Formu>
                            <Paper sx={paperStyle}>
                                <Box sx={styleBox}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw", fontWeight: "600" }}>Informações Básicas</p>
                                        <hr />
                                    </Box>
                                    <TextField
                                        variant="standard"
                                        label="Nome"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                        required
                                    />
                                    <TextField
                                        variant="standard"
                                        label="CPF"
                                        name="document"
                                        value={values.document}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                        InputProps={{
                                            inputComponent: MaskedInput,
                                            inputProps: { mask: "000.000.000-00" },
                                        }}
                                        required
                                    />
                                    <TextField
                                        variant="standard"
                                        label="E-mail"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                        required
                                    />
                                    <TextField
                                        variant="standard"
                                        label="Data de Nascimento"
                                        name="birth"
                                        value={values.date}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                    />
                                    <TextField
                                        variant="standard"
                                        label="Telefone"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        sx={inputStyle}
                                        InputProps={{
                                            inputComponent: MaskedInput,
                                            inputProps: { mask: "(00) 0 0000-0000" },
                                        }}
                                        required
                                    />
                                </Box>
                            </Paper>
                            <Paper sx={paperStyle}>
                                <Box sx={{ ...styleBox, gap: "4vw" }}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw", fontWeight: "600", textAlign: "center" }}>
                                            Foto do perfil
                                        </p>
                                        <hr />
                                    </Box>
                                    <Avatar
                                        src={image}
                                        onChange={(file) => setImage(file)}
                                        smartImgFit={"orientation"}
                                        changeLabel="Clique para trocar a imagem"
                                        emptyLabel="Clique para enviar uma imagem"
                                        // style={{ width: "100%", height: "30vw" }}
                                        style={{
                                            width: "25vw",
                                            height: "25vw",
                                            borderRadius: "20vw",
                                            fontSize: "2.5vw",
                                            alignSelf: "center",
                                        }}
                                    />
                                </Box>
                            </Paper>
                            <Paper sx={paperStyle}>
                                <Box sx={{ ...styleBox, gap: "4vw", justifyContent: "end" }}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw", fontWeight: "600" }}>Documentos</p>
                                        <hr />
                                    </Box>
                                    <UploadDocuments gallery={gallery} setGallery={setGallery} style={styleBox} />
                                </Box>
                            </Paper>
                            <Button variant="contained" type="submit">
                                {agents.loading ? <CircularProgress color="secondary" size="1.5rem" /> : "Confirmar"}
                            </Button>
                        </Formu>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}
