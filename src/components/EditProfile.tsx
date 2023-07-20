import { Box, Avatar, IconButton, Button } from "@mui/material"
import profile2 from "../assets/person.jpg"
import { TextField } from "./TextField"
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"
import { Form, Formik } from "formik"
import { useState } from "react"

interface EditProfileProps {
    user: User | null
    editing: boolean
}

interface FormValues {
    name: string | undefined
    email: string | undefined
    cpf: string
    birth: string
    phone: string
    rg: string
    address: string
    cep: string
}
export const EditProfile: React.FC<EditProfileProps> = ({ user, editing }) => {
    const [save, setSave] = useState(false)

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
            padding: "0 1vw",
            fontSize: "3.5vw",
        },
        "& .MuiInputLabel-root": {
            fontSize: "3.5vw",
        },
    }
    const initialValues = {
        name: user?.name,
        email: user?.email,
        cpf: "07903209590",
        birth: "",
        phone: "41992752905",
        rg: "2139187814",
        address: "Av. 7 de Setembro",
        cep: "80230085",
    }

    const checkChange = (values: FormValues) => {}
    const handleSubmit = (values: FormValues) => {
        console.log(values)
    }

    return (
        <Box
            sx={{
                width: "88%",
                flexDirection: "column",
                alignItems: "center",
                gap: "3vw",
                paddingTop: "10.5vw",
            }}
        >
            <Avatar src={profile2} sx={{ width: "22vw", height: "22vw", borderRadius: "50%" }} />
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField sx={inputStyle} label="Nome" name="name" value={values.name} onChange={handleChange} />
                        <Box sx={styleBox}>
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="CPF"
                                name="cpf"
                                variant="standard"
                                value={values.cpf}
                            />
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="RG"
                                name="rg"
                                variant="standard"
                                value={values.rg}
                            />
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Email"
                                name="email"
                                variant="standard"
                                value={values.email}
                            />
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Data de Nascimento"
                                name="birth"
                                variant="standard"
                                value={values.birth}
                            />
                        </Box>
                        <Box sx={styleBox}>
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="CEP"
                                name="cep"
                                variant="standard"
                                value={values.cep}
                            />
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Endereço"
                                name="address"
                                variant="standard"
                                value={values.address}
                            />
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Telefone"
                                name="phone"
                                variant="standard"
                                value={values.phone}
                            />
                        </Box>
                        <Box sx={styleBox}>
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
                            </Box>
                        </Box>
                        <Button type="submit">Salvar</Button>
                    </Form>
                )}
            </Formik>
            <IconButton sx={{ display: "flex", justifyContent: "end" }} onClick={() => {}}>
                <ArrowCircleUpSharpIcon color="primary" />
            </IconButton>
        </Box>
    )
}
