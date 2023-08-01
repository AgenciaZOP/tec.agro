import React from "react"
import { Box, Paper, Avatar } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { ResourceCard } from "../../../components/ResourceCard"
import { Transactions } from "./Transactions"
import { ListTitle } from "../../../components/ListTitle"
interface PanelProps {
    user: User
}

export const Panel: React.FC<PanelProps> = ({ user }) => {
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "0 3vw",
                gap: "4vw",
            }}
        >
            <Box sx={{ flexDirection: "column", width: "100%", height: "25%", gap: "3vw" }}>
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <p style={{ fontSize: "3.5vw" }}>Como os produtores veem</p>
                    <Paper
                        elevation={3}
                        sx={{
                            flexDirection: "row",
                            gap: "3vw",
                            justifyContent: "start",
                            padding: "2vw",
                            borderRadius: "3vw",
                        }}
                    >
                        <Avatar src="" />
                    </Paper>
                </Box>
                <SearchInput placeholder="Buscar por safra" onChange={() => {}} />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "70%",
                    overflow: "auto",
                    paddingBottom: "2vh",
                    flexDirection: "column",
                    gap: "2vw",
                }}
            >
                <Transactions status="pending" />
                <Transactions status="contact" />
                <ListTitle title="Suas Safras" location=""></ListTitle>
                <ListTitle title="Agendadas" location=""></ListTitle>
                <Transactions status="schedule" />
            </Box>
        </Box>
    )
}
