import React, { useEffect } from "react"
import { Box, Button, Paper } from "@mui/material"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import { ListTitle } from "../ListTitle"
import { Comment } from "../Comment"
import { Transactions } from "../Transactions"
import { InfoProfile } from "../InfoProfile"
import { useNavigate } from "react-router-dom"
import { useHeader } from "../../hooks/useHeader"

interface AnalysisProps {
    subaccount?: Producer | Agent
    user: User
    button: string
    location: string
}

export const Analysis: React.FC<AnalysisProps> = ({ subaccount, user, button, location }) => {
    const navigate = useNavigate()

    const crop: Crop = {
        description: "",
        date: "25/02/2355",
        gallery: "",
        id: 20,
        image: "",
        name: "Safra de feijão",
        price: 2541.54,
        producer: user,
        rating: 5,
        sold: 3421.5,
        weight: 1000,
    }
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
                    <Transactions crop={crop} company={"Transportadora"} date={"27/03/2023"} haveSeller={false} />
                    <Transactions crop={crop} company={"Transportadora"} date={"27/03/2023"} haveSeller={false} />
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
