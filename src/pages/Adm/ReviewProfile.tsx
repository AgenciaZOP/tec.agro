import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { Avatar, Box } from "@mui/material"
import { useSnackbar } from "burgos-snackbar"
import { Button } from "@mui/material"
import { TextField } from "../../components/TextField"
import { useBusinesses } from "../../hooks/useBusinesses"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred"
import MaskedInput from "../../components/MaskedInput"
import { useDocumentMask } from "../../hooks/useDocumentMask"

interface ReviewProfileProps {}

export const ReviewProfile: React.FC<ReviewProfileProps> = ({}) => {
    const documentMask = useDocumentMask()
    const profile = useLocation().state.profile as Subaccount
    console.log({ profile })
    const { snackbar } = useSnackbar()
    // const [image, setImage] = useState<File>()
    const { businesses } = useBusinesses()
    const dateBirth = new Date(profile.date)
    const birthForm = dateBirth.toLocaleDateString("pt-BR")
    const [errorMessage, setErrorMessage] = useState("")

    const businessType = businesses.find((business) => business.type === profile.type)

    console.log(businessType)

    const handleApproval = async () => {
        try {
            const response = await fetch(`url/${profile.userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }

            snackbar({ severity: "success", text: "Usuário aprovado!" })
        } catch (error) {
            snackbar({ severity: "error", text: "Erro ao aprovar o usuário." })
        }
    }

    const handleReject = async () => {
        try {
            const response = await fetch(`url/${profile.userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            snackbar({ severity: "success", text: "Perfil reprovado!" })
            setErrorMessage("")
        } catch (error) {
            snackbar({ severity: "error", text: "Erro ao rejeitar o perfil do usuário." })
            setErrorMessage("Erro ao rejeitar o perfil do usuário.")
        }
    }

    const styleBox = {
        textField: {
            padding: "0 5vh",
            "& input": {
                color: "rgba(0, 0, 0, 0.7)",
                fontWeight: "bold",
            },
            "& label": {
                color: "rgba(0, 0, 0, 0.7)",
                fontWeight: "bold",
            },
        },
        inputLabel: {
            padding: "0 5vh",
        },
    }

    return (
        <Box
            sx={{
                position: "relative",
                overflowY: "auto",
                width: "100%",
                margin: "20vw 0",
            }}
        >
            <Box
                sx={{
                    flexDirection: "column",
                    gap: "4vw",
                    width: "100%",
                    padding: "0 4vw 4vw",
                    position: "absolute",
                    // top: 0,
                    // left: 0,
                    // right: 0,
                    // bottom: 0,
                }}
            >
                <Box sx={{ flexDirection: "column", gap: "4vw", width: "100%" }}>
                    <p style={{ textAlign: "center", fontWeight: 400 }}>{profile.name}</p>
                    <p style={{ textAlign: "center", fontWeight: 700 }}>{profile.active}</p>
                    <p style={{ textAlign: "center", fontWeight: 700 }}>Foto do Perfil</p>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignContent: "center",
                            border: "1px solid grey",
                            padding: "4vw",
                            borderRadius: "2vw",
                            height: "50vw",
                        }}
                    >
                        <img src={profile.image} style={{ width: "40vw", height: "40vw" }} alt="imagem" />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4vw", margin: "auto 0" }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Avatar src={profile.image} sx={{ width: "20vw", height: "20vw" }} />
                            </Box>
                            <p style={{ display: "flex" }}>Prévia do Perfil</p>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid grey", borderRadius: "2vw", width: "100% ", gap: "4vw" }}>
                        <p style={{ textAlign: "center", fontWeight: 700, marginTop: "4vw" }}>Informações Cadastradas</p>
                        <p style={{ textAlign: "center", fontWeight: 700 }}>{profile.name}</p>

                        <TextField
                            name="subaccountType"
                            value={profile.type}
                            label="Tipo de Conta"
                            disabled
                            variant="standard"
                            sx={styleBox.textField}
                            InputLabelProps={{
                                sx: styleBox.inputLabel,
                            }}
                        />
                        <TextField
                            name="cpf/cnpj"
                            value={profile.document}
                            label="CPF/CNPJ"
                            disabled
                            variant="standard"
                            sx={styleBox.textField}
                            InputLabelProps={{
                                sx: styleBox.inputLabel,
                            }}
                            InputProps={{
                                inputComponent: MaskedInput,
                                inputProps: { mask: documentMask(profile.document) },
                            }}
                        />
                        <TextField
                            name="businesstype"
                            value={businessType?.type ? "Loja" : "Serviço"}
                            label="Tipo de Negócio"
                            disabled
                            variant="standard"
                            sx={styleBox.textField}
                            InputLabelProps={{
                                sx: styleBox.inputLabel,
                            }}
                        />
                        <TextField
                            name="phone"
                            value={profile.phone}
                            label="Telefone"
                            disabled
                            variant="standard"
                            sx={styleBox.textField}
                            InputLabelProps={{
                                sx: styleBox.inputLabel,
                            }}
                            InputProps={{
                                inputComponent: MaskedInput,
                                inputProps: { mask: "(00) 0 0000-0000" },
                            }}
                        />
                        <TextField
                            name="email"
                            value={profile.email}
                            label="Email"
                            disabled
                            variant="standard"
                            sx={styleBox.textField}
                            InputLabelProps={{
                                sx: styleBox.inputLabel,
                            }}
                        />
                        <TextField
                            name="birth"
                            value={birthForm}
                            label="Data de Nascimento"
                            disabled
                            variant="standard"
                            sx={styleBox.textField}
                            InputLabelProps={{
                                sx: styleBox.inputLabel,
                            }}
                            InputProps={{
                                inputComponent: MaskedInput,
                                inputProps: { mask: "00/00/0000" },
                            }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", padding: "0 4vh", marginBottom: "3vh" }}>
                            <p style={{ fontSize: "3vw", color: "rgba(0, 0, 0, 0.5)", fontWeight: "bold", marginBottom: "1vh" }}>
                                Documentação Enviada
                            </p>
                            <Box sx={{ gap: "1vw", width: "100%" }}>
                                <img
                                    src="https://contratocerto.com.br/wp-content/uploads/2020/07/Contrato-de-coaching-pdf.jpg"
                                    style={{ width: "12vw" }}
                                    alt="Documento"
                                />
                                <img
                                    src="https://s2-g1.glbimg.com/_bCeHe8l8gGuZ6XfL0C_rYHhNB4=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/K/iF7eHyTky2IZDMsAvVHQ/whatsapp-image-2019-04-04-at-4.55.07-pm.jpeg"
                                    style={{ width: "12vw", transform: "rotate(90deg)" }}
                                    alt="Documento"
                                />
                                <img
                                    src="https://manuais.ifsp.edu.br/uploads/images/gallery/2022-07/scaled-1680-/image-1657389184596.png"
                                    style={{ width: "12vw" }}
                                    alt="Documento"
                                />
                                <img
                                    src="https://contratocerto.com.br/wp-content/uploads/2020/07/Contrato-de-coaching-pdf.jpg"
                                    style={{ width: "12vw" }}
                                    alt="Documento"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Button type="submit" variant="contained" sx={{}} onClick={handleApproval} endIcon={<CheckCircleOutlineIcon />}>
                    Aprovar Usuário
                </Button>
                <Button type="submit" variant="contained" sx={{}} onClick={handleReject} color="error" endIcon={<ReportGmailerrorredIcon />}>
                    Rejeitar Usuário
                </Button>
                {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}
            </Box>
        </Box>
    )
}
