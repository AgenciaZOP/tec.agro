import React, { useState } from "react"
import { Box, Drawer, IconButton, MenuItem, SxProps } from "@mui/material"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useUser } from "../hooks/useUser"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { UserCard } from "./UserCard"
import { useNavigate } from "react-router-dom"
import StarSharpIcon from "@mui/icons-material/StarSharp"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const menus = useNavigationList()
    const navigate = useNavigate()

    const { open, setOpen } = useMenuDrawer()
    const { user, logout } = useUser()

    const iconStyle: SxProps = {
        width: "3.5vw",
        height: "auto",
    }

    const iconButtonStyle: SxProps = { border: "0.5vw solid black", borderRadius: "100%" }

    const [sale, setsale] = useState(26)
    const [buy, setbuy] = useState(53)
    const [note, setnote] = useState(4.2)
    const [month, setmonth] = useState(5)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer anchor={"left"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw", padding: "2vw" } }}>
            <Box sx={{ justifyContent: "space-between", width: "100%", padding: "5vw" }}>
                <IconButton color="primary" sx={iconButtonStyle} onClick={handleClose}>
                    <KeyboardBackspaceIcon sx={iconStyle} />
                </IconButton>

                <Box sx={{ gap: "1.8vw", alignItems: "center", fontSize: "3.3vw" }}>
                    Ajuda
                    <IconButton color="primary" sx={iconButtonStyle}>
                        <QuestionMarkIcon sx={iconStyle} />
                    </IconButton>
                </Box>
            </Box>

            <UserCard user={user!} />
            <Box
                sx={{
                    border: `1px solid gray`,
                    borderRadius: "2vw",
                    margin: "0 4vw",
                    padding: "4vw",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                    <p style={{ fontWeight: "500", fontSize: "6vw" }}>{sale}</p>
                    <p style={{ fontSize: "2.2vw" }}>Vendas</p>
                </Box>
                <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                    <p style={{ fontWeight: "500", fontSize: "6vw" }}>{buy}</p>
                    <p style={{ fontSize: "2.2vw" }}>Compras</p>
                </Box>
                <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ alignItems: "center" }}>
                        <p style={{ fontWeight: "500", fontSize: "6vw" }}>{note.toLocaleString("pt-BR")}</p>
                        <StarSharpIcon sx={{ width: "3.2vw" }} />
                    </Box>
                    <p style={{ fontSize: "2.2vw" }}>Nota</p>
                </Box>
                <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                    <p style={{ fontWeight: "500", fontSize: "6vw" }}>{month}</p>
                    <p style={{ fontSize: "2.2vw" }}>Meses</p>
                </Box>
            </Box>
            <Box sx={{ flexDirection: "column", padding: "5vw 0" }}>
                {menus.map((menu) => (
                    <MenuItem
                        key={menu.location}
                        onClick={() => navigate(menu.location)}
                        sx={{ fontSize: "5vw", alignItems: "center" }}
                    >
                        {menu.title}
                    </MenuItem>
                ))}
            </Box>
            <MenuItem
                sx={{ marginTop: "auto", fontSize: "5vw" }}
                onClick={() => {
                    handleClose()
                    logout()
                }}
            >
                Sair
            </MenuItem>
        </Drawer>
    )
}
