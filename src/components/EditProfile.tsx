import { Box, IconButton, Button, CircularProgress, MenuItem } from "@mui/material"
import { TextField } from "./TextField"
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"
import { Form, Formik, FormikProps, useFormikContext } from "formik"
import { useEffect, useState } from "react"
import MaskedInput from "../components/MaskedInput"
import { useUser } from "../hooks/useUser"
import { useEstadosBrasil } from "../hooks/useEstadosBrasil"
import { Avatar, ExtFile, FileInputButton } from "@files-ui/react"
import colors from "../style/colors"

interface EditProfileProps {
    user: User | null
    handleSubmit: (values: UpdateUserValues, file?: File) => void
    formRef: React.Ref<FormikProps<UpdateUserValues>>
}

export const EditProfile: React.FC<EditProfileProps> = ({ user, handleSubmit, formRef }) => {
    const { updateLoading } = useUser()
    const estados = useEstadosBrasil()

    const [image, setImage] = useState<File>()
    const [files, setFiles] = useState<ExtFile[]>([])
    const [gallery, setGallery] = useState<ExtFile[]>([])

    const styleBox = {
        flexDirection: "column",
        width: "100%",
        padding: "5.5vw",
        paddingTop: "3vw",
        // paddingBottom: "0",
        border: "1px solid gray",
        borderRadius: "2vw",
        gap: "3vw",
    }

    const inputStyle = {
        "& .MuiInputBase-input": {
            padding: "0 1vw",
            fontSize: "3.5vw",
        },
        "& .MuiInputLabel-root": {
            fontSize: "3.0vw",
        },
    }
    const webkitbg = {
        "& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill": {
            WebkitBoxShadow: ` 0 0 0 100vw "white" inset`,
            borderRadius: "initial",
        },
    }

    const initialValues: UpdateUserValues = {
        name: user?.name || "",
        email: user?.email || "",
        cpf: user?.document || "",
        birth: new Date(user?.birth || 0).toLocaleDateString("pt-br") || "",
        phone: user?.phone || "",
        rg: user?.rg || "",
        address: user?.address || "",
        cep: user?.cep || "",
        image: user?.image || "",
        number: user?.number || "",
        city: user?.city || "",
        district: user?.district || "",
        uf: estados.find((estado) => estado.value == user?.uf)?.id || 0,
        gallery: user?.gallery || "",
    }

    return (
        <Box
            sx={{
                width: "88%",
                flexDirection: "column",
                alignItems: "center",
                gap: "3vw",
            }}
        >
            <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values, image)} innerRef={formRef}>
                {({ values, handleChange, setFieldValue }) => (
                    <Form>
                        <Avatar
                            src={image || user?.image}
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
                            }}
                        />
                        <p style={{ fontSize: "3.1vw", color: "gray" }}>@{user?.username}</p>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    textAlign: "center",
                                    fontSize: "4vw",
                                },
                            }}
                            label="Nome"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <Box sx={styleBox}>
                            <Box sx={{ width: "100% ", gap: "3vw" }}>
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="CPF"
                                    name="cpf"
                                    variant="standard"
                                    value={values.cpf}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "000.000.000-00" },
                                    }}
                                    disabled
                                />
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="RG"
                                    name="rg"
                                    type="text"
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "0000000000000", inputMode: "numeric" },
                                    }}
                                    variant="standard"
                                    value={values.rg}
                                />
                            </Box>
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Email"
                                name="email"
                                variant="standard"
                                value={values.email}
                                disabled
                            />
                            <Box sx={{ width: "100% ", gap: "3vw" }}>
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="Data de Nascimento"
                                    name="birth"
                                    variant="standard"
                                    value={values.birth}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "00/00/0000" },
                                    }}
                                    disabled
                                />
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="Telefone"
                                    name="phone"
                                    variant="standard"
                                    value={values.phone}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "(00) 0 0000-0000", inputMode: "numeric" },
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={styleBox}>
                            <Box sx={{ width: "100% ", gap: "3vw" }}>
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "48%" }}
                                    label="CEP"
                                    name="cep"
                                    variant="standard"
                                    value={values.cep}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "00.000-000", inputMode: "numeric" },
                                    }}
                                />
                                <TextField
                                    select
                                    onChange={handleChange}
                                    label="UF"
                                    name="uf"
                                    sx={{
                                        ...inputStyle,
                                        ...webkitbg,
                                        width: "48%",
                                    }}
                                    variant="standard"
                                    value={values.uf}
                                    InputProps={{
                                        style: {
                                            borderRadius: "10vw",
                                            fontSize: "3.5vw",
                                            flexGrow: "1",
                                            alignSelf: "stretch",
                                        },
                                    }}
                                    SelectProps={{
                                        MenuProps: { MenuListProps: { sx: { maxHeight: "80vw", overflowY: "auto" } } },
                                        // inputProps: {
                                        //     sx: {
                                        //         "MuiInputBase-input-MuiInput-input::before": {
                                        //             paddingRight: "0",
                                        //         },
                                        //     },
                                        // },
                                    }}
                                >
                                    <MenuItem
                                        value={0}
                                        sx={{
                                            display: "none",
                                        }}
                                    ></MenuItem>
                                    {estados.map((estado) => (
                                        <MenuItem
                                            key={estado.value}
                                            value={estado.id}
                                            sx={{
                                                width: "100%",
                                            }}
                                        >
                                            {estado.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Cidade"
                                name="city"
                                variant="standard"
                                value={values.city}
                            />
                            <TextField
                                onChange={handleChange}
                                sx={inputStyle}
                                label="Endereço"
                                name="address"
                                variant="standard"
                                value={values.address}
                            />
                            <Box sx={{ width: "100% ", gap: "3vw" }}>
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "70%" }}
                                    label="Bairro"
                                    name="district"
                                    variant="standard"
                                    value={values.district}
                                />
                                <TextField
                                    onChange={handleChange}
                                    sx={{ ...inputStyle, width: "28%" }}
                                    label="Nº"
                                    name="number"
                                    variant="standard"
                                    value={values.number}
                                />
                            </Box>
                        </Box>
                        <Box sx={styleBox}>
                            <p style={{ fontSize: "3vw" }}>Documentação Enviada</p>

                            <Box sx={{ gap: "2.3vw", width: "100%", flexWrap: "wrap" }}>
                                {gallery.map((file) => (
                                    <Avatar
                                        key={file.id}
                                        src={file.file}
                                        onClick={(event) => {
                                            event.preventDefault()
                                            setGallery(gallery.filter((item) => item.id != file.id))
                                        }}
                                        smartImgFit={"orientation"}
                                        changeLabel="Clique para remover a imagem"
                                        // style={{ width: "100%", height: "30vw" }}
                                        style={{
                                            width: "10.94vw",
                                            height: "10.94vw",
                                            borderRadius: "0.5vw",
                                            //boxShadow: `3px -5px 0 ${muiColors.green[500]}`,
                                        }}
                                    />
                                ))}
                                <FileInputButton
                                    onChange={(files) => setGallery(files)}
                                    value={gallery}
                                    behaviour="add"
                                    label="+"
                                    accept="image/*"
                                    color={colors.primary}
                                    style={{ width: "10vw", padding: "0vw", fontSize: "4vw" }}
                                />
                                {/* <IconButton sx={{ display: "flex", justifyContent: "end" }} onClick={() => {}}>
                                    <ArrowCircleUpSharpIcon color="primary" />
                                </IconButton> */}
                            </Box>
                        </Box>

                        <Button variant="contained" type="submit" sx={{ display: "none" }}>
                            {updateLoading ? <CircularProgress size="1.5rem" color="secondary" /> : "Salvar"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
