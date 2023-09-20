import React, { useEffect, useState } from "react"
import { Box, Button, Paper } from "@mui/material"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import { ListTitle } from "../ListTitle"
import { Comment } from "../Comment"
import { Transactions } from "../Transactions"
import { InfoProfile } from "../InfoProfile"
import { useNavigate } from "react-router-dom"
import { useHeader } from "../../hooks/useHeader"

interface AnalysisProps {
    //subaccount?: Producer | Agent
    user: User
    button: string
    location: string
}

export const Analysis: React.FC<AnalysisProps> = ({ user, button, location }) => {
    const header = useHeader()
    const navigate = useNavigate()

    const [title, settitle] = useState("Safra de Soja 2022/23 ")
    const [company, setCompany] = useState("Transportadora")
    const [price, setPrice] = useState("125.000,02")
    const [weight, setWeight] = useState(9.1)
    const [date, setDate] = useState("19/05/2023")

    useEffect(() => {
        return () => {
            header.setTitle("Perfil")
        }
    }, [])
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                padding: "0 0vw",
                paddingBottom: "3vh",
                overflow: "auto",
            }}
        >
            <InfoProfile user={user} />
            <Button
                type="submit"
                variant="contained"
                sx={{ fontSize: "3.5vw", gap: "2vw" }}
                onClick={() => {
                    navigate(`/${location}`)
                }}
            >
                {button} <ArrowRightAltIcon color="secondary" />
            </Button>
            <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                <ListTitle title="Transações Recentes" location="" />
                <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                    <Transactions
                        title={title}
                        price={price}
                        weight={weight}
                        company={"Transportadora"}
                        date={date}
                        haveSeller={false}
                    />
                    <Transactions
                        title={title}
                        price={price}
                        weight={weight}
                        company={company}
                        date={date}
                        haveSeller={false}
                    />
                </Box>
            </Box>
            <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                <ListTitle title="Comentários de Perfil" location="" />
                <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                    <Paper elevation={3} sx={{ borderRadius: "3vw", flexDirection: "column", height: "max-content" }}>
                        <Comment
                            user={"Hellen Katsi"}
                            comment={
                                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
                            }
                            qtdStars={5}
                            date={"5 de Fevereiro"}
                        />{" "}
                        <Comment comment="jhgadhgfhgds" date="25/03/2024" qtdStars={12} user="dhgf" />
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}
