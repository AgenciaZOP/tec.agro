import { Box, Button } from "@mui/material"
import { TextField } from "../components/TextField"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"

interface SignupProps {}

interface Inputs {
    email: string
    document: string
    password: string
    name: string
}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()

    const handleSubmit = (values: Inputs) => {
        console.log(values);
      };

    return (
        <Box sx={{ width: "100%", flexDirection: "column", justifyContent: "center", padding: "20vw", gap: "5vw" }}>
            <p>Preencha os campos abaixo para fazer o cadastro:</p>
            <Formik initialValues={{ email: "", document: "", password: "", name: "" }} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="nome" name="name" value={values.name} onChange={handleChange} />
                        <TextField label="e-mail" name="email" value={values.email} onChange={handleChange} />
                        <TextField label="documento" name="document" value={values.document} onChange={handleChange} />
                        <TextField label="senha" name="password" value={values.password} onChange={handleChange} type="password" autoComplete="off" />
                        <Button variant="contained" type="submit">
                            Enviar
                        </Button>
                    </Form>
                )}
            </Formik>
                <Button variant="contained" onClick={() => navigate("/login")}>
                    Voltar
                </Button>
        </Box>
    )
}