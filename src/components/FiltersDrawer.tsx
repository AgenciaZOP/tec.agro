import React from "react"
import { Box, Button, Drawer, IconButton } from "@mui/material"
import { useFiltersDrawer } from "../hooks/useFiltersDrawer"
import CloseSharpIcon from "@mui/icons-material/CloseSharp"
import { backdropStyle } from "../style/backdrop"
import { StatesList } from "./StatesList"
import { DistanceSlider } from "./DistanceSlider"
import { CategoriesList } from "../pages/Crops/CategoriesList"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface FiltersDrawerProps {}

export const FiltersDrawer: React.FC<FiltersDrawerProps> = ({}) => {
    const { open, setOpen } = useFiltersDrawer()

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer
            anchor={"right"}
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: { width: "80vw" } }}
            ModalProps={{ BackdropProps: { sx: backdropStyle } }}
        >
            <Box sx={{ padding: "4vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "5vw" }}>
                <Box sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
                        <h3 style={{ fontWeight: "500" }}>Filtros</h3>
                    </Box>
                    <IconButton onClick={handleClose} sx={{ padding: "0" }}>
                        <CloseSharpIcon sx={{ padding: "1.5vw", height: "9vw", width: "9vw", border: "1px solid black", borderRadius: "50%" }} color="primary" />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "6vw",
                    }}
                    >
                    <h4>Localidade</h4>
                    <StatesList />
                    <hr />
                </Box>
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "6vw",
                    }}
                >
                    <h4>Raio de Distância</h4>
                    <DistanceSlider />
                    <hr />
                </Box>
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "6vw",
                    }}
                >
                    <h4>Categorias</h4>
                    <CategoriesList />
                    <hr />
                </Box>
                <Box
                    sx={{
                        justifyContent: "center"
                    }}    
                >
                    <Button variant="outlined"
                        sx={{
                            borderRadius: "12vw",
                            alignItems: "center",
                            textTransform: "none",
                        }}
                    >
                            <DeleteOutlineIcon sx={{ height: "6vw", width: "6vw" }} />
                            <Box
                                sx={{
                                    marginBottom: "-0.5vw"
                                }}
                            >
                                Limpar Filtros</Box>
                    </Button>
                </Box>
            </Box>
        </Drawer>
    )
}
