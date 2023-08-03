import React, { useState } from "react"
import { Box } from "@mui/material"
interface HeaderInfoProps {}

export const HeaderInfo: React.FC<HeaderInfoProps> = ({}) => {
    const [title, settitle] = useState("Safra de Arroz")
    const [weight, setweight] = useState(9.5)
    const [company, setcompany] = useState("TransÁgil")
    const [price, setprice] = useState("245.154,00")
    const [date, setdate] = useState("28/07/2023")

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                width: "100%",
                padding: "1vw",
            }}
        >
            <Box sx={{ flexDirection: "column" }}>
                <p style={{ fontSize: "2.7vw" }}>
                    {title} | <span style={{ fontSize: "2.3vw" }}>{weight.toLocaleString("pt-BR")} toneladas</span>
                </p>
                <p style={{ fontSize: "2.1vw" }}>[{company}]</p>
            </Box>
            <Box sx={{ flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ fontSize: "2.7vw" }}>R$ {price}</p>
                <p style={{ fontSize: "2.3vw", textAlign: "right" }}>{date}</p>
            </Box>
        </Box>
    )
}
