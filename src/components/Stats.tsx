import React, { useState } from "react"
import { Box, SxProps } from "@mui/material"
import { Info } from "./Info"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import { useDate } from "../hooks/useDate"

interface StatsProps {
    user?: Shipping | Business
    sx?: SxProps
    title: string
    business: Business
}

export const Stats: React.FC<StatsProps> = ({ user, sx, title, business }) => {
    const { getDifference } = useDate()
    const [rating, setrating] = useState(4.1)

    const _sx: SxProps = {
        borderRadius: "2vw",
        margin: "0 4vw",

        ...sx,
    }

    return (
        <Box sx={_sx}>
            <Info title={title} name={"126"} />
            <Info
                title="Nota"
                name={business.rating.toLocaleString("pt-br")}
                icon={<StarSharpIcon sx={{ width: "3.2vw" }} />}
            />
            <Info title="Meses" name={getDifference(new Date(business.date || 0))} />
        </Box>
    )
}
