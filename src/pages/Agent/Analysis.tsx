import React from "react"
import { Box, Button } from "@mui/material"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import { ListTitle } from "../../components/ListTitle"
import { Comment } from "../../components/Comment"

interface AnalysisProps {}

export const Analysis: React.FC<AnalysisProps> = ({}) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                padding: "0 4vw",
                overflow: "auto",
            }}
        >
            <Button type="submit" variant="contained" sx={{ fontSize: "3.5vw", gap: "2vw" }}>
                {" "}
                Aceitar Solicitação
                <ArrowRightAltIcon color="secondary" />
            </Button>
            <Box sx={{ flexDirection: "column" }}>
                <ListTitle title="Transações Recentes" location="" />
                <Comment comment="jhgadhgfhgds" date="25/03/2024" qtdStars={12} user="dhgf" />
            </Box>
            <Box>
                <ListTitle title="Comentários de Perfil" location="" />
            </Box>
        </Box>
    )
}
