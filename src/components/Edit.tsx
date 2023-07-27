import React, { useState } from "react"
import { Box, Button, TextField } from "@mui/material"
import colors from "../style/colors"
import { Formik, Form } from "formik"
import { Avatar } from "@files-ui/react"

interface EditProps {
    business: Business
}
interface FormValues {
    image: string
    name: string
}
export const Edit: React.FC<EditProps> = ({ business }) => {
    const [image, setImage] = useState<File>()
    const handleSubmit = () => {}
    return (
        <Box
            sx={{ flexDirection: "column", gap: "2vw", paddingTop: 0, width: "100%", height: "100%", alignItems: "center" }}
        >
            <Formik initialValues={{ name: business?.name || "", image: business?.image || "" }} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <Avatar
                            src={image || business?.image}
                            onChange={(file) => setImage(file)}
                            smartImgFit={"orientation"}
                            changeLabel="Clique para trocar a imagem"
                            emptyLabel="Clique para enviar uma imagem"
                            // style={{ width: "100%", height: "30vw" }}
                            style={{
                                width: "100%",
                                height: "15%",
                                fontSize: "2.5vw",
                            }}
                        />
                        <TextField
                            label="Nome Fantasia"
                            name="name"
                            variant="standard"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <Button type="submit">Salvar</Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
