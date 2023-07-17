import React from "react"
import { Box, Drawer } from "@mui/material"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useUser } from "../hooks/useUser"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const { open, setOpen } = useMenuDrawer()
    const { user } = useUser()

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer anchor={"left"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw", padding: "5vw" } }}>
            <p>{user?.name}</p>
        </Drawer>
    )
}
