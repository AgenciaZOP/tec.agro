import React from "react"
import { Avatar, Box, Paper } from "@mui/material"
import { AvatarCard } from "./AvatarCard"
import profile from "../assets/notification.jpeg"
import profile2 from "../assets/person.jpg"
import profile3 from "../assets/person2.jpg"

interface TransactionsProps {
    crop: Crop
    company: string
    date: string
    haveSeller: boolean
    avatar?: React.ReactElement
}

export const Transactions: React.FC<TransactionsProps> = ({ crop, date, company, haveSeller, avatar }) => {
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
                            {crop.name} |{" "}
                            <span style={{ fontSize: "2.3vw" }}>{crop.weight.toLocaleString("pt-BR")} toneladas</span>
                        </p>
                        <p style={{ fontSize: "2.1vw" }}>[{company}]</p>
                    </Box>
                    <Box sx={{ flexDirection: "column", justifyContent: "flex-end" }}>
                        <p style={{ fontSize: "2.7vw" }}>R$ {crop.price}</p>
                        <p style={{ fontSize: "2.3vw", textAlign: "right" }}>{date}</p>
                    </Box>
                </Box>
                <Box sx={{ justifyContent: "space-between", gap: "0vw", width: "100%" }}>
                    <AvatarCard name={"Talam Ekstrom"} typeAgent={"Produtor"} avatar={<Avatar src={profile2} />} />
                    {haveSeller ? (
                        <AvatarCard name={"Talam Ekstrom"} typeAgent={"Corretor"} avatar={<Avatar src={profile3} />} />
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                width: "33%",
                                gap: "3vw",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <hr style={{ transform: "rotate(90deg)", height: "3.5vw" }} />
                            <span style={{ fontSize: "2.2vw" }}>Independente</span>
                            <hr style={{ transform: "rotate(90deg)", height: "3.5vw" }} />
                        </Box>
                    )}
                    <AvatarCard name={"Talam Ekstrom"} typeAgent={"Comprador"} avatar={<Avatar src={profile} />} />
                </Box>
            </Box>
        </Paper>
    )
}
