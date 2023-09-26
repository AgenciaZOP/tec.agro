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
import { Avatar, ExtFile } from "@files-ui/react"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { useProducers } from "../../../hooks/useProducers"
import { useSnackbar } from "burgos-snackbar"
import { inputStyle, paperStyle, styleBox } from "./../../styles"
import MaskedInput from "../../../components/MaskedInput"
import { useDocumentMask } from "../../../hooks/useDocumentMask"
import { UploadDocuments } from "../../../components/UploadDocuments"

interface FormProps {
    user: User
}

export const Form: React.FC<FormProps> = ({ user }) => {
    const producers = useProducers()

    const { snackbar } = useSnackbar()
    const documentMask = useDocumentMask()
    const [image, setImage] = useState<File>()
    const [gallery, setGallery] = useState<ExtFile[]>([])
    const [files, setFiles] = useState<ExtFile[]>([])

    const initialValues: Producer = {
        date: "",
        id: 0,
        userId: user.id,
        user: user,

        name: "",
        email: "",
        document: "",
        phone: "",

        image: "",

        active: false,
        rating: 5,
        ratings: 5,

        galleryDocuments: "",
    }

    const handleSubmit = (values: Producer) => {
        if (producers.loading) return

        if (!image) {
            snackbar({ severity: "error", text: "Envie uma imagem" })
            return
        }

        producers.new({ ...values, file: image })
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
                padding: "20vw 0",
                width: "100%",
            }}
            >
            <Box
                sx={{
                    gap: "4vw",
                    height: "100%",
                    flexDirection: "column",
                    width: "100%",
                    overflowY: "auto"
                }}
            >
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, handleChange }) => (
                        <Formu>
                            <Box
                                sx={{
                                    flexDirection: "column",
                                    gap: "4vw",
                                    width: "92vw",
                                    margin: "4vw"
                                }}
                            >
                                <Paper sx={paperStyle}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw", fontWeight: "600" }}>Informações Básicas</p>
                                        <hr />
                                    </Box>
                                    <Box sx={{ flexDirection: "column", gap: "3vw" }}>
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
                                            label="E-mail"
                                            name="email"
                                            value={values.email}
                                            sx={inputStyle}
                                            onChange={handleChange}
                                            required
                                        />
                                        <TextField
                                            variant="standard"
                                            label="CPF / CNPJ"
                                            name="document"
                                            value={values.document}
                                            onChange={handleChange}
                                            sx={inputStyle}
                                            InputProps={{
                                                inputComponent: MaskedInput,
                                                inputProps: { mask: documentMask(values.document) },
                                            }}
                                            required
                                        />
                                        <TextField
                                            variant="standard"
                                            label="Telefone"
                                            name="phone"
                                            value={values.phone}
                                            sx={inputStyle}
                                            onChange={handleChange}
                                            InputProps={{
                                                inputComponent: MaskedInput,
                                                inputProps: { mask: "(00) 0 0000-0000" },
                                            }}
                                            required
                                        />
                                    </Box>
                                </Paper>
                                <Paper sx={paperStyle}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw", fontWeight: "600", textAlign: "center" }}>Foto do perfil</p>
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
                                <Button variant="contained" type="submit" >
                                    {producers.loading ? <CircularProgress color="secondary" size="1.5rem" /> : "Confirmar"}
                                </Button>
                            </Box>
                        </Formu>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}
