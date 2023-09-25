import React, { useEffect } from "react"
import { Box, Button } from "@mui/material"
import colors from "../../../style/colors"
import { SearchInput } from "../../../components/SearchInput"
import { ModalCategory } from "../../../components/PanelBusinessShipping/ModalCategory"
import AddIcon from "@mui/icons-material/Add"
import { Navigate, Route, useNavigate } from "react-router-dom"
import { Header } from "../../../components/Header"
import { useHeader } from "../../../hooks/useHeader"

interface PanelProps {
    business: Business
    product: Product
}

export const Panel: React.FC<PanelProps> = ({ business, product }) => {
    const navigate = useNavigate()
    const header = useHeader()

    useEffect(() => {
        header.setTitle("Meu Negócio")
    }, [])

    return (
        <Box>
            <Header />
            <Box
                sx={{
                    width: "100%",
                    height: "97%",
                    gap: "3vw",
                    flexDirection: "column",
                    padding: "0 4vw",
                    paddingBottom: "5vh",
                }}
            >
                <SearchInput placeholder="produto, serviço ou categoria" onChange={() => {}} />

                <Box sx={{ height: "100%", overflow: "auto", flexDirection: "column", gap: "3vw", paddingBottom: "14vh" }}>
                    <ModalCategory title="Fertilizantes " product={product} location="category" />
                    <ModalCategory title="Inseticida" product={product} location="category" />
                    <ModalCategory title="Inseticida" product={product} location="category" />
                </Box>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        width: "25%",
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
                    Produto ou Serviço
                </Button>
            </Box>
        </Box>
    )
}
