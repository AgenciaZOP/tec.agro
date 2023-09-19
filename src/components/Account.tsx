import React, { useEffect, useState } from "react"
import { Box, Paper, SxProps, Avatar } from "@mui/material"
import { Stats } from "./Stats"
import colors from "../style/colors"
import { EditAccount } from "./EditAccount"
import EditIcon from "@mui/icons-material/Edit"

interface AccountProps {
    object: Business | Shipping
    editingMode: boolean
}

export const Account: React.FC<AccountProps> = ({ object, editingMode }) => {
    const [isEditing, setEditing] = useState(editingMode)

    const _sx: SxProps = {
        gap: "13vw",
        paddingTop: "2vw",
    }

    const handleEditing = () => {
        if (isEditing) {
            setEditing(false)
        } else {
            setEditing(true)
        }
    }

    useEffect(() => {
        console.log(isEditing)
    }, [isEditing])

    return (
        <Paper
            elevation={2}
            sx={{
                width: "92vw",
                height: "max-content",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1.8vw",
                padding: "3vw 5vw",
                margin: "0 4vw"
            }}
        >
            <Box
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    height: "max-content",
                    alignItems: "center",
                    gap: "2vw",
                }}
            >
                <Box
                    sx={{
                        alignSelf: "flex-end",
                        backgroundColor: isEditing ? "#F0C7FF" : "white",
                        padding: isEditing ? "0vw 3vw" : "0vw ",
                        borderRadius: "2vw",
                        alignItems: "center",
                        gap: "0.5vw",
                    }}
                >
                    <p
                        style={{
                            fontSize: "2.5vw",
                            textDecoration: "underline",
                            color: "black",
                        }}
                        onClick={handleEditing}
                    >
                        {isEditing ? "Salvar" : "Editar"}
                    </p>
                    

                    {isEditing && <EditIcon sx={{ width: "3vw" }} />}
                </Box>
                {!isEditing ? (
                    <Box sx={{ flexDirection: "column", width: "100%", height: "max-content", gap: "2vw" }}>
                        <Avatar src={object.image} variant="rounded" style={{ width: "100%", height: "38vw" }} />
                        <p style={{ color: `${colors.primary}`, paddingTop: "1.5vw", textAlign: "center" }}>
                            {object.name}{" "}
                        </p>
                    </Box>
                ) : (
                    <EditAccount object={object} />
                )}
                <Stats title="Chamada" object={object} sx={_sx} />
            </Box>
        </Paper>
    )
}
