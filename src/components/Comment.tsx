import React from "react"
import { Box } from "@mui/material"
import IconMark from "../assets/markQuotation.png"

interface CommentProps {
    user: string | undefined
    comment: string
    stars: number
    date: string
}

export const Comment: React.FC<CommentProps> = ({ user, comment, stars, date }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "max-content",
                padding: "3vw",
            }}
        >
            <Box sx={{ gap: "4vw" }}>
                <img src={IconMark} alt="" style={{ width: "5vw" }} />
                <p style={{ fontSize: "3vw" }}>{comment}</p>
            </Box>
            <Box sx={{ fontSize: "2.5vw", gap: "2vw", justifyContent: "end" }}>
                <p>stars {stars}</p>
                <p>{user}</p>
                <p>{date}</p>
            </Box>
        </Box>
    )
}
