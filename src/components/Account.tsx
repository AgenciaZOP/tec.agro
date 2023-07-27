import React, { useEffect, useState } from "react"
import { Box, Paper, SxProps, Avatar } from "@mui/material"
import { Stats } from "./Stats"
import colors from "../style/colors"
import { Edit } from "./Edit"

interface AccountProps {
    business: Business
    editingMode: boolean
}

export const Account: React.FC<AccountProps> = ({ business, editingMode }) => {
    const [isEditing, setEditing] = useState(editingMode)

    const _sx: SxProps = {
        gap: "13vw",
        paddingTop: "4vw",
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
                width: "100%",
                height: "max-content",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1.8vw",
                padding: "3vw 5vw",
            }}
        >
            <Box
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    height: "max-content",
                    alignItems: "center",
                    gap: "0.5vw",
                }}
            >
                <p
                    style={{
                        fontSize: "2vw",
                        alignSelf: "end",
                        textDecoration: "underline",
                        color: "gray",
                        padding: "1vw",
                        borderRadius: "2vw",
                        backgroundColor: isEditing ? "#F0C7FF" : "white",
                    }}
                    onClick={handleEditing}
                >
                    {isEditing ? "Editando" : "Editar"}
                </p>
                {!isEditing ? (
                    <Box sx={{ flexDirection: "column", width: "100%", height: "max-content" }}>
                        <Avatar src={business.image} variant="rounded" style={{ width: "100%", height: "45vw" }} />
                        <p style={{ color: `${colors.primary}`, paddingTop: "1.5vw", textAlign: "center" }}>
                            {business.name}{" "}
                        </p>
                    </Box>
                ) : (
                    <Edit business={business} />
                )}
                <Stats title="Chamada" business={business} sx={_sx} />
            </Box>
        </Paper>
    )
}
