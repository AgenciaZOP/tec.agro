import React from "react"
import { Box, IconButton } from "@mui/material"
import IconMark from "../assets/markQuotation.png"
import StarSharpIcon from "@mui/icons-material/StarSharp"

interface CommentProps {
    user: string | undefined
    comment: string
    qtdStars: number
    date: string
}

export const Comment: React.FC<CommentProps> = ({ user, comment, qtdStars, date }) => {
    const StarRepeater = () => {
        const stars = []

        for (let i = 0; i < qtdStars; i++) {
            stars.push(<StarSharpIcon key={i} color="primary" sx={{ width: "3vw", padding: 0 }} />)
        }

        return <Box sx={{ gap: "1vw" }}>{stars}</Box>
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "max-content",
                padding: "4vw 4vw 2vw 4vw ",
                gap: "2vw",
            }}
        >
            <Box sx={{ gap: "4vw", alignItems: "start" }}>
                <img src={IconMark} alt="" style={{ paddingTop: "1vw", width: "5vw" }} />
                <p style={{ fontSize: "3vw" }}>{comment}</p>
            </Box>
            <Box sx={{ fontSize: "2.1vw", gap: "1vw", justifyContent: "end", alignItems: "center" }}>
                <StarRepeater />
                <p>{user},</p>
                <p>{date}</p>
            </Box>
            <hr style={{ width: "100%" }} />
        </Box>
    )
}
