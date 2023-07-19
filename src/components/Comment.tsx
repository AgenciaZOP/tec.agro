import React from "react"
import { Box } from "@mui/material"
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
            <Box>
                <p>{comment}</p>
                {/* Icone */}
            </Box>
            <Box sx={{ fontSize: "2.5vw", gap: "2vw", justifyContent: "end" }}>
                <p>stars {stars}</p>
                <p>{user}</p>
                <p>{date}</p>
            </Box>
        </Box>
    )
}
