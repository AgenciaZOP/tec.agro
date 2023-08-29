import React from "react"
import { Box, Button } from "@mui/material"
import colors from "../../../style/colors"
import { SearchInput } from "../../../components/SearchInput"
import { ModalCategory } from "../../../components/PanelBusinessShipping/ModalCategory"
import AddIcon from "@mui/icons-material/Add"
import { Navigate, Route, useNavigate } from "react-router-dom"

interface PanelProps {
    business: Business
    product: Product
}

export const Panel: React.FC<PanelProps> = ({ business, product }) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                width: "100%",
                gap: "3vw",
                flexDirection: "column",
                padding: "0 4vw",
                paddingBottom: "5vh",
            }}
        >
            <SearchInput placeholder="Buscar Produto, Serviço ou Categoria" onChange={() => {}} />

            <Button
                variant="contained"
                type="submit"
                sx={{ width: "100%", borderRadius: "5vw", fontSize: "3vw" }}
                onClick={() => {
                    navigate("/business/newCategory")
                }}
            >
                Adicionar Categoria
            </Button>
            <Box sx={{ height: "100%", overflow: "auto", flexDirection: "column", gap: "3vw", paddingBottom: "14vh" }}>
                <ModalCategory title="#1" product={product} />
                <ModalCategory title="#2" product={product} />
            </Box>
            <Button
                variant="contained"
                type="submit"
                sx={{
                    borderRadius: "3vw",
                    fontSize: "2.5vw",
                    flexDirection: "column",
                    position: "fixed",
                    bottom: "9vh",
                    right: "4vw",
                }}
                onClick={() => {
                    navigate("/business/new")
                }}
            >
                <AddIcon color="secondary" />
                Novo produto ou serviço
            </Button>
        </Box>
    )
}
