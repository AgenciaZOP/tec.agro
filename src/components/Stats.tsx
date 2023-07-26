import React, { useState } from "react"
import { Box, SxProps } from "@mui/material"
import { Info } from "./Info"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import { useDate } from "../hooks/useDate"

interface StatsProps {
    user?: Shipping | Business
    sx?: SxProps
    title: string
    value: string
}

export const Stats: React.FC<StatsProps> = ({ user, sx, title, value }) => {
    const { getDifference } = useDate()
    const [rating, setrating] = useState(4.1)

    const _sx: SxProps = {
        borderRadius: "2vw",
        margin: "0 4vw",
        justifyContent: "space-between",
        ...sx,
    }

    return (
        <Box sx={_sx}>
            <Info title={title} name={value} />
            <Info title="Nota" name={rating.toLocaleString("pt-br")} icon={<StarSharpIcon sx={{ width: "3.2vw" }} />} />
            <Info title="Meses" name={"2"} />
        </Box>
    )
}
