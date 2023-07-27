import React from "react"
import { Box, Button } from "@mui/material"
import colors from "../../../style/colors"
import { SearchInput } from "../../../components/SearchInput"
import { ModalCategory } from "./ModalCategory"
import AddIcon from "@mui/icons-material/Add"

interface PanelProps {
    business: Business
}

export const Panel: React.FC<PanelProps> = ({ business }) => {
    return (
        <Box
            sx={{
                width: "100%",
                gap: "3vw",
                flexDirection: "column",
                overflow: "auto",
                padding: "0 5vw",
                paddingBottom: "5vw",
            }}
        >
            <SearchInput placeholder="Buscar Produto, Serviço ou Categoria" onChange={() => {}} />
            <Button
                variant="contained"
                type="submit"
                sx={{ width: "100%", borderRadius: "5vw", fontSize: "3vw" }}
                onClick={() => {}}
            >
                Adicionar Categoria
            </Button>
            <ModalCategory title="#1" />
            <ModalCategory title="#2" />
            <Button
                variant="contained"
                type="submit"
                sx={{
                    width: "25%",
                    borderRadius: "3vw",
                    fontSize: "2vw",
                    flexDirection: "column",
                    position: "fixed",
                    bottom: "11vh",
                    right: "5vw",
                }}
                onClick={() => {}}
            >
                <AddIcon color="secondary" />
                Novo produto ou serviço
            </Button>
        </Box>
    )
}
