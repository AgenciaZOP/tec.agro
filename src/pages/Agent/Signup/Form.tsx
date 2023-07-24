import React, { useState } from "react"
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, Paper, SxProps, TextField } from "@mui/material"
import { Formik, Form as Formu } from "formik"
import { Avatar } from "@files-ui/react"

import { useSnackbar } from "burgos-snackbar"
import { useAgents } from "../../../hooks/useAgents"

interface FormProps {
    user: User
}

export const Form: React.FC<FormProps> = ({ user }) => {
    const agents = useAgents()

    const { snackbar } = useSnackbar()

    const [image, setImage] = useState<File>()

    const initialValues: Agent = {
        id: 0,
        userId: user.id,
        user: user,

        name: "",
        email: "",
        document: "",
        phone: "",

        image: "",

        active: false,
    }

    const paperStyle: SxProps = {
        flexDirection: "column",
        width: "100%",
        padding: "5vw",
        gap: "3vw",
        borderRadius: "5vw",
    }
    const styleBox = {
        flexDirection: "column",
        width: "100%",
        padding: "5.5vw",
        paddingTop: "3vw",
        // paddingBottom: "0",
        border: "1px solid gray",
        borderRadius: "2vw",
        gap: "2vw",
    }

    const inputStyle = {
        "& .MuiInputBase-input": {
            //padding: "0 1vw",
            fontSize: "3.5vw",
            height: "1vw",
        },
        "& .MuiInputLabel-root": {
            fontSize: "3.0vw",
            alignItems: "center",
        },
    }

    const handleSubmit = (values: Agent) => {
        if (agents.loading) return

        if (!image) {
            snackbar({ severity: "error", text: "Envie uma imagem" })
            return
        }

        agents.new({ ...values, file: image })
    }

    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                gap: "5vw",
                height: "100%",
                overflowY: "auto",
                paddingBottom: "10vw",
            }}
        >
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Formu>
                        <Paper sx={paperStyle}>
                            <Box sx={styleBox}>
                                <p style={{ fontSize: "3.5vw", fontWeight: "600" }}>Informações Básicas</p>
                                <hr />
                                <TextField
                                    variant="outlined"
                                    label="Nome"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                    required
                                />
                                <TextField
                                    variant="outlined"
                                    label="E-mail"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                    required
                                />
                                <TextField
                                    variant="outlined"
                                    label="CPF / CNPJ"
                                    name="document"
                                    value={values.document}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                    required
                                />
                                <TextField
                                    variant="outlined"
                                    label="Telefone"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                    required
                                />
                            </Box>
                        </Paper>

                        <Paper sx={paperStyle}>
                            <p style={{ fontSize: "5vw" }}>Foto do perfil</p>
                            <Avatar
                                src={image}
                                onChange={(file) => setImage(file)}
                                smartImgFit={"orientation"}
                                changeLabel="Clique para trocar a imagem"
                                emptyLabel="Clique para enviar uma imagem"
                                // style={{ width: "100%", height: "30vw" }}
                                style={{
                                    width: "70vw",
                                    height: "70vw",
                                    borderRadius: "5vw",
                                }}
                            />
                        </Paper>

                        <Button variant="contained" type="submit">
                            {agents.loading ? <CircularProgress color="secondary" size="1.5rem" /> : "Confirmar"}
                        </Button>
                    </Formu>
                )}
            </Formik>
        </Box>
    )
}
