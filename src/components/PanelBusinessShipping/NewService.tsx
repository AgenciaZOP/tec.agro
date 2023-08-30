import React, { ReactEventHandler, useState } from "react"
import {
    Box,
    Button,
    IconButton,
    Paper,
    TextField,
    Radio,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from "@mui/material"
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"
import { Formik, Form } from "formik"
import InputAdornment from "@mui/material/InputAdornment"
import { useCurrencyMask } from "burgos-masks"
import { IMaskInput, IMask } from "react-imask"

interface NewServiceProps {}
interface FormValues {
    name: string
    image: string
    description: string
    quantity: number
    price: string
}

export const NewService: React.FC<NewServiceProps> = ({}) => {
    const [radioValue, setRadioValue] = useState("no")

    const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "radio-buttons-group") {
            setRadioValue(event.target.value)
        }
    }

    const styleBox = {
        flexDirection: "column",
        width: "100%",
        padding: "4vw",
        paddingTop: "3vw",
        // paddingBottom: "0",
        border: "1px solid gray",
        borderRadius: "2vw",
        gap: "2vw",
    }

    const inputStyle = {
        "& .MuiInputBase-input": {
            padding: "1vw",
            fontSize: "3.5vw",
        },
        "& .MuiInputLabel-root": {
            fontSize: "3.0vw",
        },
    }
    const initialValues = {
        name: "",
        image: "",
        description: "",
        quantity: 0,
        price: "",
    }

    const handleQuantity = (
        event: React.ChangeEvent<HTMLInputElement>,
        onChange: React.ChangeEventHandler<HTMLInputElement>
    ) => {
        const inputValue = event.target.value.replace(/^0+(?=\d)/, "") // Remove zeros à esquerda
        onChange(inputValue)
    }

    const handleSubmit = (values: FormValues) => {
        console.log(values)
    }
    return (
        <Box sx={{ width: "100%", flexDirection: "column", gap: "2vw", padding: "0 4vw", paddingBottom: "1vh" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <Box
                            sx={{
                                height: "91%",
                                overflow: "auto",
                                flexDirection: "column",
                                gap: "3vw",
                                paddingBottom: "3vh",
                            }}
                        >
                            <Paper elevation={3} sx={{ padding: "3vw" }}>
                                <TextField
                                    label="Nome do produto"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    sx={{
                                        "& .MuiInputBase-input": {
                                            padding: "",
                                            fontSize: "3.5vw",
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontSize: "3.0vw",
                                        },
                                    }}
                                />
                            </Paper>
                            <Paper elevation={3} sx={{ padding: "3vw" }}>
                                <Box sx={styleBox}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw" }}>Galeria de Imagens</p>
                                        <hr />
                                    </Box>
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
                            </Paper>
                            <Paper elevation={3} sx={{ padding: "3vw" }}>
                                <Box sx={styleBox}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw" }}>Descrição</p>
                                        <hr />
                                    </Box>
                                    <TextField
                                        placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        sx={{ ...inputStyle }}
                                    />
                                </Box>
                            </Paper>
                            <Paper elevation={3} sx={{ padding: "3vw" }}>
                                <Box sx={{ ...styleBox, width: "100%" }}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw" }}>Estoque</p>
                                        <hr />
                                    </Box>
                                    <Box sx={{ alignItems: "center" }}>
                                        <FormControl sx={{ gap: 0 }}>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group"
                                                sx={{
                                                    "& .MuiTypography-root": {
                                                        fontSize: "3.2vw",
                                                    },
                                                }}
                                                onChange={handleRadio}
                                            >
                                                <FormControlLabel value="yes" control={<Radio size="small" />} label="Sim" />
                                                <FormControlLabel value="no" control={<Radio size="small" />} label="Não" />
                                            </RadioGroup>
                                        </FormControl>
                                        <TextField
                                            sx={{ ...inputStyle, width: "50%" }}
                                            name="quantity"
                                            value={values.quantity}
                                            onChange={handleChange}
                                            disabled={radioValue === "no"}
                                            type="number"
                                            InputProps={{
                                                inputProps: { min: 0, inputMode: "numeric" },
                                                endAdornment: (
                                                    <InputAdornment
                                                        position="end"
                                                        sx={{
                                                            "& .MuiTypography-root": { fontSize: "3.0vw", paddingRight: 0 },
                                                            "& .MuiInputBase-root-MuiOutlinedInput-root": {
                                                                paddingRight: 0,
                                                            },
                                                        }}
                                                    >
                                                        unidades
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Paper>
                            <Paper elevation={3} sx={{ padding: "3vw" }}>
                                <Box sx={{ ...styleBox, width: "100%" }}>
                                    <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                        <p style={{ fontSize: "3.5vw" }}>Preço</p>
                                        <hr />
                                    </Box>

                                    <TextField
                                        sx={{ ...inputStyle, width: "100%" }}
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}
                                        inputMode="numeric"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment
                                                    position="start"
                                                    sx={{
                                                        "& .MuiTypography-root": { fontSize: "3.8vw" },
                                                    }}
                                                >
                                                    R$
                                                </InputAdornment>
                                            ),
                                            inputComponent: IMaskInput,
                                            inputProps: {
                                                inputMode: "decimal",
                                                mask: Number,
                                                scale: 2,
                                                thousandsSeparator: ".",
                                                radix: ",",

                                                padFractionalZeros: true,
                                            },
                                        }}
                                    ></TextField>
                                </Box>
                            </Paper>
                        </Box>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            sx={{
                                width: "100%",
                                height: "10%",
                                borderRadius: "3vw",
                                fontSize: "3vw",
                                flexDirection: "column",
                            }}
                        >
                            Salvar
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
