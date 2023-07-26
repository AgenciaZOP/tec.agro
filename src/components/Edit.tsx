import React from "react"
import { Box, Avatar } from "@mui/material"
import colors from "../style/colors"

interface EditProps {
    business: Business
}

export const Edit: React.FC<EditProps> = ({ business }) => {
    return (
        <Box sx={{ flexDirection: "column", gap: "2vw", paddingTop: 0, width: "100%", height: "100%" }}>
            <Avatar src={business.image} alt="" style={{ width: "100%", height: "100%", borderRadius: "2vw" }} />
            <p style={{ color: `${colors.primary}`, paddingTop: "1.5vw", textAlign: "center" }}>{business.name} </p>
        </Box>
    )
}
