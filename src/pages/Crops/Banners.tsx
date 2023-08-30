import { Avatar, Box } from "@mui/material"
import React from "react"

interface BannersProps {
    images: string[]
}

export const Banners: React.FC<BannersProps> = ({ images }) => {
    return (
        <Box sx={{ width: "100vw", overflowX: "auto", gap: "3vw", marginLeft: "-4vw", padding: "0 4vw 1.1vw" }}>
            {images.map((image) => (
                <Avatar key={image} variant="rounded" src={image} sx={{ width: "80vw", height: "40vw", borderRadius: "5vw", boxShadow: "0 0.5vw 1vw gray" }} />
            ))}
        </Box>
    )
}
