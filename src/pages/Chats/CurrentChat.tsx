import { Box } from "@mui/material"
import { Message } from "../../components/Message"

interface ChatProps {
    chat: Chat
}

export const CurrentChat: React.FC<ChatProps> = ({ chat }) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            {chat.messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </Box>
    )
}
