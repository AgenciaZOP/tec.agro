import React from "react"
import { Avatar, Box } from "@mui/material"

interface MessageProps {
    message: Message
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <Box sx={{ margin: "6vw", gap: "2vw", fontSize: "4vw", justifyContent: "space-between" }}>
            <Avatar sx={{ alignSelf: "flex-end" }} />
            <div className="message-texts-column" style={{ flexDirection: "column", width: "60vw", gap: "2vw" }}>
                <p className="message-name" style={{ color: "#868686", margin: "0 0 0 4vw" }}>Madelyn Vaccaro</p>
                <p className="message-text" style={{ backgroundColor: "#EEFFFE", padding: "4vw", borderRadius: "4vw 4vw 4vw 0" }} >{ `${message.text}` }</p>
            </div>
            <p className="message-time" style={{ color: "#868686", alignSelf: "flex-end" }}>12:37</p>
        </Box>
    )
}
