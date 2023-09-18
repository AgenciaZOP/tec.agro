import React from "react"
import { Box } from "@mui/material"
import { useEstadosBrasil } from "../hooks/useEstadosBrasil"
import { State } from "../components/State"

interface StatesListProps {}

export const StatesList: React.FC<StatesListProps> = ({}) => {
    const estados = useEstadosBrasil()
    
    return (
        <Box sx={{ gap: "2vw", overflowX: "auto", margin: "0 -4vw", padding: "0 4vw" }}>
            {estados.map((estado) => (
                <State key={estado.id} state={estado} />
            ))}
        </Box>
    )
}
