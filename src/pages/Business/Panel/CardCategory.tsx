import React, { useState } from "react"
import { Box, Avatar } from "@mui/material"

interface CardCategoryProps {
    category: Category
    activeCategory: boolean
    reprovedCategory?: boolean
}

export const CardCategory: React.FC<CardCategoryProps> = ({ category, activeCategory, reprovedCategory }) => {
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
            <Box sx={{ width: "100%", gap: "2vw", justifyContent: "space-between", alignItems: "center" }}>
                <Box
                    sx={{
                        padding: "2vw",
                        gap: "4vw",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        variant="rounded"
                        style={{ width: "12vw" }}
                        src={
                            "https://www.deere.com.br/assets/images/region-3/products/tractors/medium/r3g002376_NK-trator-6m.png"
                        }
                    ></Avatar>
                    <p style={{ fontSize: "3.8vw" }}>{category.name}</p>
                </Box>
                <p
                    style={{
                        height: "max-content",
                        fontSize: "2.5vw",
                        color: "black",
                        padding: "1vw",
                        borderRadius: "1.8vw",
                        backgroundColor: !activeCategory ? "#E2EAFF" : "#F0C7FF",
                    }}
                    onClick={() => {}}
                >
                    {!activeCategory ? "Em análise" : "Aprovado"}
                </p>
            </Box>
        </Box>
    )
}
