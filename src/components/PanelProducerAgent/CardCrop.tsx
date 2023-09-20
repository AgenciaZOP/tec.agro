import React, { MouseEventHandler } from "react"
import { Box, Paper } from "@mui/material"
import { HeaderInfo } from "./HeaderInfo"
import { CardAgent } from "./CardAgent"
interface CardCropProps {
    user: Agent | Producer
    type: SubaccountType
    name: string
    handleClick?: () => void
    transactions?: boolean
    variant?: boolean
}

export const CardCrop: React.FC<CardCropProps> = ({ variant, user, type, name, handleClick, transactions }) => {
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
            {variant ? (
                <>
                    <HeaderInfo />
                    <CardAgent user={user} type={type} name={name} variant={false} />
                    <p style={{ alignSelf: "center", fontSize: "2.5vw", textDecoration: "underline" }} onClick={handleClick}>
                        {transactions ? "Ver detalhes" : "Editar"}
                    </p>
                </>
            ) : (
                <HeaderInfo />
            )}
        </Paper>
    )
}
