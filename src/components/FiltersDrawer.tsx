import React from "react"
import { Box, Drawer, IconButton } from "@mui/material"
import { useFiltersDrawer } from "../hooks/useFiltersDrawer"
import CloseSharpIcon from "@mui/icons-material/CloseSharp"
import { backdropStyle } from "../style/backdrop"

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
            <Box sx={{ padding: "4vw", display: "flex", flexDirection: "column", gap: "5vw" }}>
                <Box sx={{ alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
                        <h3 style={{ fontWeight: "500" }}>Filtros</h3>
                    </Box>
                    <IconButton onClick={handleClose} sx={{ padding: "0" }}>
                        <CloseSharpIcon sx={{ padding: "1.5vw", height: "9vw", width: "9vw", border: "1px solid black", borderRadius: "50%" }} color="primary" />
                    </IconButton>
                </Box>
            </Box>
        </Drawer>
    )
}
