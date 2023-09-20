import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"
import { Box } from "@mui/material"

interface StatisticsProps {}

export const Statistics: React.FC<StatisticsProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Estatísticas")
    })
    return <Box></Box>
}
