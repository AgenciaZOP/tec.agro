import { Box, Button } from "@mui/material"
import React, { useEffect } from "react"
import { SearchInput } from "../../../components/SearchInput"
import { ModalCategory } from "../../../components/PanelBusinessShipping/ModalCategory"
import { useNavigate } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"
import { useHeader } from "../../../hooks/useHeader"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    const navigate = useNavigate()
    const header = useHeader()

    const car: Product = {
        name: "Carro",
        type: "",
        image: "",
    }

    useEffect(() => {
        return header.setTitle("Minha Transportadora")
    }, [])
    return (
        <Box
            sx={{
                width: "100%",
                gap: "3vw",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: "12vh",
            }}
        >
            <SearchInput placeholder="região ou caminhão" onChange={() => {}} />
            <Button
                variant="contained"
                type="submit"
                sx={{ width: "92vw", borderRadius: "5vw", fontSize: "3vw" }}
                onClick={() => {
                    navigate("/shipping/newZone")
                }}
            >
                Adicionar Região
            </Button>
            <Box
                sx={{
                    height: "100%",
                    overflow: "auto",
                    flexDirection: "column",
                    gap: "3vw",
                    padding: "0 4vw 3vh",
                }}
            >
                <ModalCategory title="Região 1" product={car} location="zone" />
                <ModalCategory title="Região 2" product={car} location="zone" />
                <ModalCategory title="Região 3" product={car} location="zone" />
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
                    navigate("/shipping/new")
                }}
            >
                <AddIcon color="secondary" />
                Caminhão
            </Button>
        </Box>
    )
}
