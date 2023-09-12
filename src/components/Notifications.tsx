import React, { useState } from "react"
import { Box, Drawer, IconButton, Avatar } from "@mui/material"
import { useNotifications } from "../hooks/useNotifications"
import CloseSharpIcon from "@mui/icons-material/CloseSharp"
import profile from "../assets/notification.jpeg"
import profile2 from "../assets/person.jpg"
import { MessageNotification } from "./MessageNotification"
import { backdropStyle } from "../style/backdrop"

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = ({}) => {
    const { open, setOpen } = useNotifications()

    const [quantity] = useState(30)

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
                        <h3 style={{ fontWeight: "500" }}>Notificações</h3>
                        <p style={{ fontSize: "3.5vw" }}>
                            Você tem <span style={{ fontWeight: "bold" }}>{quantity} notificações </span> hoje
                        </p>
                    </Box>
                    <IconButton onClick={handleClose} sx={{ padding: "0" }}>
                        <CloseSharpIcon sx={{ padding: "1.5vw", height: "9vw", width: "9vw", border: "1px solid black", borderRadius: "50%" }} color="primary" />
                    </IconButton>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5vw" }}>
                    <p style={{ fontSize: "4vw", fontWeight: "bolder" }}>Hoje</p>
                    <MessageNotification
                        name={"teste"}
                        color="#FF4747"
                        avatarIcon={<Avatar src={profile} sx={{ width: "13vw", height: "13vw", borderRadius: "50%" }} />}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5vw" }}>
                    <p style={{ fontSize: "4vw", fontWeight: "bolder" }}>Esta Semana</p>
                    <MessageNotification
                        name={"teste"}
                        avatarIcon={<Avatar src={profile2} sx={{ width: "13vw", height: "13vw", borderRadius: "50%" }} />}
                    />
                    <MessageNotification
                        name={"teste"}
                        avatarIcon={<Avatar src={""} sx={{ width: "13vw", height: "13vw", borderRadius: "50%" }} />}
                    />
                </Box>
            </Box>
        </Drawer>
    )
}
