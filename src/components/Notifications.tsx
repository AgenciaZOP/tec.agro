import React, { useState } from "react"
import { Box, Drawer, MenuItem, SxProps } from "@mui/material"
import { useNotifications } from "../hooks/useNotifications"
import profile from "../assets/notification.jpeg"

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = ({}) => {
    const { open, setOpen } = useNotifications()

    const [quantity, setQuantity] = useState(30)
    const [name, setName] = useState("Omar Donin")
    const [time, settime] = useState(4)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer anchor={"right"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw" } }}>
            <Box sx={{ padding: "8vw", display: "flex", flexDirection: "column", gap: "5vw" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <h3>Notificações</h3>
                    <p style={{ fontSize: "3.5vw" }}>
                        Você tem <span style={{ fontWeight: "bold" }}>{quantity} notificações </span> hoje
                    </p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5vw" }}>
                    <p style={{ fontSize: "3.7vw", fontWeight: "bolder" }}>Hoje</p>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: "4vw" }}>
                        <Box
                            sx={{
                                borderRadius: "50%",
                                width: "12vw",
                                height: "10vw",
                            }}
                        >
                            <img src={profile} alt="" style={{ width: "80vw " }} />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <p style={{ fontSize: "3vw" }}>
                                <span style={{ fontWeight: "bold" }}>{name}</span> lhe enviou uma mensagem
                            </p>
                            <p style={{ color: "gray", fontSize: "2.5vw" }}>{time} h atrás</p>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontSize: "3.7vw", fontWeight: "bolder" }}>Esta Semana</p>
                </Box>
            </Box>
        </Drawer>
    )
}
