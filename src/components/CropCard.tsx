import React from "react"
import { Avatar, Box } from "@mui/material"
import { useChats } from "../hooks/useChats"

interface CropCardProps {
    crop: Crop
}

export const CropCard: React.FC<CropCardProps> = ({ crop }) => {
    const { newChat } = useChats()

    return (
        <Box
            sx={{ alignItems: "center", background: "white", padding: "5vw", borderRadius: "5vw", gap: "5vw" }}
            onClick={() => newChat(crop.mediated?.agent || crop.producer)}
        >
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
        </Box>
    )
}
