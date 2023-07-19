import React from "react"
import { Avatar, Box, Paper } from "@mui/material"
import { AvatarCard } from "./AvatarCard"
import profile from "../assets/notification.jpeg"
import profile2 from "../assets/person.jpg"
import profile3 from "../assets/person2.jpg"

interface TransactionsProps {
    title: string
    weight: number
    company: string
    price: string
    date: string
    avatar?: React.ReactElement
}

export const Transactions: React.FC<TransactionsProps> = ({ title, weight, company, price, date, avatar }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                backgroundColor: "white",
                width: "100%",
                justifyContent: "center",
                padding: "3vw",
                borderRadius: "3vw",
            }}
        >
            <Box sx={{ gap: "2vw", flexDirection: "column", width: "92%", alignItems: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        width: "100%",
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
                <Box sx={{ justifyContent: "space-between", gap: "2vw", width: "100%" }}>
                    <AvatarCard name={"Talam Ekstrom"} typeAgent={"Produtor"} avatar={<Avatar src={profile2} />} />
                    <AvatarCard name={"Talam Ekstrom"} typeAgent={"Corretor"} avatar={<Avatar src={profile3} />} />
                    <AvatarCard name={"Talam Ekstrom"} typeAgent={"Comprador"} avatar={<Avatar src={profile} />} />
                </Box>
            </Box>
        </Paper>
    )
}
