import React from "react"
import { Avatar, Box } from "@mui/material"

interface MessageProps {
    message: Message
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <Box sx={{ margin: "4vw", gap: "2vw" }}>
            <Avatar sx={{ alignSelf: "flex-end" }} />
            <div className="message-texts-column" style={{ flexDirection: "column", width: "70vw", gap: "2vw" }}>
                {/* {message.text} */}
                <p className="message-name" style={{ color: "grey" }}>Fulano de Tal</p>
                <p className="message-text" style={{ backgroundColor: "white", padding: "4vw", borderRadius: "4vw" }} >Integer eget aliquet nibh praesent tristique magna sit amet purus. Est sit amet facilisis magna etiam tempor orci.</p>
            </div>
        </Box>
    )
}
