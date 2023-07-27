import React from "react"
import { Box } from "@mui/material"
interface Product {
    name: string
    type: string
    image: string
}

interface CardCategoryProps {
    product: Product
    image?: string
}

export const CardCategory: React.FC<CardCategoryProps> = ({ product, image }) => {
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
                    <p style={{ fontSize: "2.5vw", fontWeight: "600" }}>{product.type}</p>
                </Box>
            </Box>
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
                Editar
            </p>
        </Box>
    )
}
