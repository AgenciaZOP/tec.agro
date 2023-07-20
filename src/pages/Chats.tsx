import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useChats } from "../hooks/useChats"
import { ChatCard } from "../components/ChatCard"
import { Chat } from "../components/Chat"
import { SearchInput } from "../components/SearchInput"
import { useUser } from "../hooks/useUser"

interface ChatsProps {
    channel: string
}

export const Chats: React.FC<ChatsProps> = ({ channel }) => {
    const chats = useChats().getChannel(channel)
    const {user} = useUser()
    
    const [list, setList] = useState(chats)
    const [currentChat, setCurrentChat] = useState<Chat>()

    const handleChange = (value: string) => {
        const result = chats.filter((chat) => chat.users.find(item => item.id != user?.id)!.name.toLowerCase().includes(value.toLowerCase()))
        setList(result)
    }

    useEffect(() => {
      console.log(chats)
    }, [chats])

    return currentChat ? (
        <Chat chat={currentChat} />
    ) : (
        <Box sx={{ flexDirection: "column", gap: "4vw" }}>
            <SearchInput placeholder="conversas" onChange={handleChange} />
            {list.map((chat) => (
                <ChatCard key={chat.id} chat={chat} onClick={() => setCurrentChat(chat)} />
            ))}
        </Box>
    )
}
