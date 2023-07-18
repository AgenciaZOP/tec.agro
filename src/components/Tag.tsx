import React from "react"
import { Box } from "@mui/material"

interface TagProps {
    name: string
    color: string
}

export const Tag: React.FC<TagProps> = ({ name, color }) => {
    return (
        <Box
            sx={{
                fontSize: "2.8vw",
                width: "max-content",
                backgroundColor: `${color}`,
                borderRadius: "7vw",
                padding: "1vw 2vw 1vw 2vw",
            }}
        >
            {name}
        </Box>
    )
}
