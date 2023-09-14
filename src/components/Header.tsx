import { IconButton, Paper, SxProps } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { useHeader } from "../hooks/useHeader"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useNotifications } from "../hooks/useNotifications"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
    back?: boolean
    location?: string
}

export const Header: React.FC<HeaderProps> = ({ back, location }) => {
    const header = useHeader()
    const notifications = useNotifications()
    const menuDrawer = useMenuDrawer()
    const navigate = useNavigate()

    const iconStyle: SxProps = {
        width: "8vw",
        height: "auto",
    }

    return (
        <Paper
            elevation={0}
            sx={{
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                padding: "4vw",
                fontSize: "5vw",
                fontWeight: "bold",
                background: "transparent",
                borderRadius: 0,
                position: "fixed",
                top: 0,
            }}
        >
            <IconButton color="primary">
                {!back ? (
                    <MenuIcon sx={iconStyle} onClick={menuDrawer.toggle} />
                ) : (
                    <KeyboardBackspaceIcon
                        sx={iconStyle}
                        onClick={() => {
                            navigate(`${location}`)
                        }}
                    />
                )}
            </IconButton>
            <p>{header.title}</p>
            <IconButton color="primary" onClick={notifications.toggle}>
                <NotificationsIcon sx={iconStyle} />
            </IconButton>
        </Paper>
    )
}
