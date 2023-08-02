import React, { useState } from "react"
import { Box, Paper, Button } from "@mui/material"
import { HeaderInfo } from "./HeaderInfo"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"

interface TransactionsProps {
    status: string
}

export const Transactions: React.FC<TransactionsProps> = ({ status }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                backgroundColor: "white",
                width: "100%",
                height: "max-content",
                borderRadius: "2vw",
                flexDirection: "column",
                padding: "2vw",
                gap: "1vw",
            }}
        >
            <HeaderInfo />
            {status != "schedule" ? (
                <Button
                    type="submit"
                    color={status == "pending" ? "error" : "primary"}
                    variant="contained"
                    sx={{ height: "5vw", fontSize: "2vw" }}
                    onClick={() => {}}
                >
                    {status == "pending"
                        ? "Pagamento de corretor pendente"
                        : status == "contact" && "Entre em contato com o Comprador"}
                    <ArrowRightAltIcon color="secondary" />
                </Button>
            ) : (
                <p
                    style={{ textDecoration: "underline", fontSize: "2.5vw", justifyContent: "center", alignSelf: "center" }}
                    onClick={() => {}}
                >
                    Ver Participantes
                </p>
            )}
        </Paper>
    )
}
