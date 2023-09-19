import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"
import { Box } from "@mui/material"

interface UsersProps {}

export const Users: React.FC<UsersProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        return () => {
            header.setTitle("Perfil")
        }
    }, [])

    return <Box></Box>
}
