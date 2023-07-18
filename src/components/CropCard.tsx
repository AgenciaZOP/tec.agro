import React from "react"
import { Avatar, Box, Paper } from "@mui/material"

interface CropCardProps {
    crop: Crop
}

export const CropCard: React.FC<CropCardProps> = ({ crop }) => {
    return (
        <Paper elevation={0} sx={{ alignItems: "center", background: "white", padding: "5vw", borderRadius: "5vw", gap: "5vw" }}>
            <Avatar sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column", width: "100%" }}>
                <Box sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ flexDirection: "column" }}>
                        <p>{crop.name}</p>
                        <p>{crop.weight} toneladas</p>
                    </Box>
                    <p>{crop.price}</p>
                </Box>

                <Box>
                    <p>Produtor: {crop.producer.name}</p>
                </Box>
            </Box>
        </Paper>
    )
}
