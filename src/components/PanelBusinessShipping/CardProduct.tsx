import React from "react"
import { Box, IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
interface Product {
    name: string
    type: string
    image: string
}

interface CardProductProps {
    product: Product
    image?: string
    local: boolean
    action: string
    subtitle: string
}

export const CardProduct: React.FC<CardProductProps> = ({ product, image, local, subtitle, action }) => {
    return (
        <Box
            sx={{
                border: "1px solid gray",
                borderRadius: "2vw",
                height: "9vh",
                padding: "2vw 4vw",
                width: "100%",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ gap: "2vw" }}>
                <img style={{ width: "12vw" }} src={image}></img>
                <Box sx={{ padding: "2vw", gap: "1vw", flexDirection: "column" }}>
                    <p style={{ fontSize: "3.8vw" }}>{product.name}</p>
                    <p style={{ fontSize: "2.5vw", fontWeight: "600" }}>{subtitle}</p>
                </Box>
            </Box>
            {local ? (
                <p
                    style={{
                        height: "max-content",
                        fontSize: "2.5vw",
                        backgroundColor: "#E2EAFF",
                        color: "black",
                        padding: "1vw",
                        borderRadius: "1.8vw",
                    }}
                    onClick={() => {}}
                >
                    {action}
                </p>
            ) : (
                <IconButton onClick={() => {}}>
                    <DeleteIcon color="primary" sx={{ width: "5vw" }} />
                </IconButton>
            )}
        </Box>
    )
}
