import { Box } from "@mui/material"
import { Message } from "../../components/Message"

interface ChatProps {
    chat: Chat
}

export const CurrentChat: React.FC<ChatProps> = ({ chat }) => {
    return (
        <Box
            sx={{ 
                height: "100%",
                width: "100%",
                flexDirection: "column",
                gap: "4vw",
                padding: "20vw 4vw"
         }}
        >
            {chat.messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </Box>
    )
}
