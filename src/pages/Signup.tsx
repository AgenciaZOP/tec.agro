import { Box, Button } from "@mui/material"
import { TextField } from "../components/TextField"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"

interface SignupProps {}

interface Inputs {
    login: string
    password: string
}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()

    const handleSubmit = (values: Inputs) => {
        console.log(values);
      };

    return (
        <Box sx={{ width: "100%", flexDirection: "column", justifyContent: "center", padding: "20vw", gap: "5vw" }}>
            <Formik initialValues={{ login: "", password: "" }} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="cpf ou e-mail" name="login" value={values.login} onChange={handleChange} />
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