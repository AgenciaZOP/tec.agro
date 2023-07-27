import React, { useState } from "react"
import { Box, Button, TextField, CircularProgress } from "@mui/material"
import colors from "../style/colors"
import { Formik, Form } from "formik"
import { Avatar } from "@files-ui/react"

interface EditProps {
    object: Business | Shipping
}
interface FormValues {
    image: string
    name: string
}
export const Edit: React.FC<EditProps> = ({ object }) => {
    const [image, setImage] = useState<File>()
    const handleSubmit = (values: FormValues) => {
        console.log(values)
    }
    return (
        <Box sx={{ flexDirection: "column", width: "100%", height: "max-content", gap: "4vw" }}>
            <Formik initialValues={{ name: object?.name || "", image: object?.image || "" }} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <Avatar
                            src={image || object?.image}
                            onChange={(file) => setImage(file)}
                            smartImgFit={"orientation"}
                            changeLabel="Clique para trocar a imagem"
                            emptyLabel="Clique para enviar uma imagem"
                            // style={{ width: "100%", height: "30vw" }}
                            style={{
                                width: "100%",
                                height: "45vw",
                                fontSize: "2.5vw",
                            }}
                        />
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    textAlign: "center",
                                    fontSize: "4vw",
                                },
                            }}
                            label="Nome Fantasia"
                            name="name"
                            variant="standard"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
