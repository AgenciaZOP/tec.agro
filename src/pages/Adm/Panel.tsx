import React, { useEffect, useState } from "react"
import { Box, Paper, SxProps } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"
import { SearchInput } from "../../components/SearchInput"
import { ReviewBox } from "./ReviewBox"
import { ListTitle } from "../../components/ListTitle"
import { useUsers } from "../../hooks/useUsers"
import { useCrops } from "../../hooks/useCrops"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    const header = useHeader()

    const { users } = useUsers()
    const { crops } = useCrops()

    const everything = [...users, ...crops]

    const [searching, setSearching] = useState("")
    const [list, setList] = useState(everything)

    const wrapperStyle: SxProps = { flexDirection: "column", width: "100%", overflowY: "auto", padding: "20vw 0", gap: "4vw", overflowX: "hidden" }

    const handleSearch = (value: string) => {
        setSearching(value)
        setList(everything.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    useEffect(() => {
        header.setTitle("Administrador")
    }, [])
    return searching ? (
        <Box sx={wrapperStyle}>
            <SearchInput placeholder="usuário, produto, safra" onChange={handleSearch} />
            <Box sx={{ flexDirection: "column", gap: "4vw" }}>
                {list.map((item) => (
                    <></>
                ))}
            </Box>
        </Box>
    ) : (
        <Box sx={wrapperStyle}>
            <SearchInput placeholder="usuário, produto, safra" onChange={handleSearch} />
            <Box
                sx={{
                    flexDirection: "column",
                    height: "90%",
                    overflow: "auto",
                    gap: "4vw",
                }}
            >
                <Box sx={{ gap: "4vw", overflowX: "auto", padding: "0 4vw" }}>
                    <ReviewBox variant="producer" />
                    <ReviewBox variant="agent" />
                    <ReviewBox variant="business" />
                    <ReviewBox variant="shipping" />
                </Box>
                <Box sx={{ flexDirection: "column", gap: "4vw", padding: "0 4vw" }}>
                    <ListTitle location="transrecents" title="Transações Recentes" />
                    <ListTitle location="statistics" title="Estatísticas" />
                </Box>
            </Box>
        </Box>
    )
}
