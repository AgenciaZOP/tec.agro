import React from "react"
import { Paper } from "@mui/material"

interface StateProps {
    state: State
}

export const State: React.FC<StateProps> = ({ state }) => {
    return (
        <Paper variant="outlined" sx={{ borderRadius: "50vw", flexShrink: 0, padding: "1vw 2vw", borderColor: "primary.main", fontSize: "3.5vw" }}>
            {state.value}
        </Paper>
    )
}
