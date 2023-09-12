import { Box, Button, CircularProgress } from "@mui/material"
import { TextField } from "../components/TextField"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"
import { useSignup } from "../hooks/useSignup"
import { useUser } from "../hooks/useUser"
import { useDocumentMask } from "../hooks/useDocumentMask"
import MaskedInput from "../components/MaskedInput"

interface SignupProps {}

interface Inputs {
    email: string
    document: string
    password: string
    name: string
    username: string
}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()
    const signup = useSignup()
    const documentMask = useDocumentMask()

    const { signupLoading, setSignupLoading } = useUser()

    const handleSubmit = (values: Inputs) => {
        setSignupLoading(true)
        signup(values)
    }

    return (
        <Box sx={{ width: "100%", flexDirection: "column", justifyContent: "center", padding: "4vw", gap: "4vw" }}>
            <p>Preencha os campos abaixo para fazer o cadastro:</p>
            <Formik initialValues={{ username: "", email: "", document: "", password: "", name: "" }} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="Nome" name="name" value={values.name} onChange={handleChange} />
                        <TextField label="Nome de usuário" name="username" value={values.username} onChange={handleChange} />
                        <TextField label="E-mail" name="email" value={values.email} onChange={handleChange} />
                        <TextField
                            label="Documento"
                            name="document"
                            onChange={handleChange}
                            value={values.document}
                            InputProps={{
                                inputComponent: MaskedInput,
                                inputProps: {
                                    mask: documentMask(values.document),
                                },
                            }}
                        />
                        <TextField label="Senha" name="password" value={values.password} onChange={handleChange} type="password" autoComplete="off" />
                        <Button variant="contained" type="submit" style={{ marginTop: "8vw" }}>
                            {signupLoading ? <CircularProgress size="1.5rem" color="secondary" /> : "Enviar"}
                        </Button>
                    </Form>
                )}
            </Formik>
            <Button variant="outlined" onClick={() => navigate("/login")}>
                Voltar
            </Button>
        </Box>
    )
}
