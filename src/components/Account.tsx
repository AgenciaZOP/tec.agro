import React from "react"
import { Box, Paper, SxProps, Avatar } from "@mui/material"
import { Stats } from "./Stats"
import colors from "../style/colors"

interface AccountProps {
    business: Business
}

export const Account: React.FC<AccountProps> = ({ business }) => {
    const _sx: SxProps = {
        gap: "10vw",
    }
    return (
        <Paper
            elevation={2}
            sx={{
                width: "100%",
                height: "53%",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "1.8vw",
                padding: "3vw 5vw",
            }}
        >
            <Box
                sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2.7vw",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Box sx={{ flexDirection: "column", gap: "1.5vw", paddingTop: 0, width: "100%", height: "60%" }}>
                    <p
                        style={{
                            fontSize: "2vw",
                            textAlign: "end",
                            textDecoration: "underline",
                            color: "gray",
                        }}
                        onClick={() => {}}
                    >
                        Editar
                    </p>

                    <Avatar src={business.image} alt="" style={{ width: "100%", height: "100%", borderRadius: "2vw" }} />
                </Box>
                <p style={{ color: `${colors.primary}`, paddingTop: "4vw" }}>{business.name}agshg </p>
                <Stats title="Chamada" business={business} sx={_sx} />
            </Box>
        </Paper>
    )
}
