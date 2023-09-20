import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useChats } from "../../hooks/useChats"
import { ChatCard } from "../../components/ChatCard"
import { CurrentChat } from "./CurrentChat"
import { SearchInput } from "../../components/SearchInput"
import { useUser } from "../../hooks/useUser"
import { useHeader } from "../../hooks/useHeader"

interface ChatsProps {
    channel: string
}

export const Chats: React.FC<ChatsProps> = ({ channel }) => {
    const header = useHeader()
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

    useEffect(() => {
        header.setTitle("Conversas")
    }, [])

    return currentChat ? (
        <CurrentChat chat={currentChat} />
    ) : (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                flexDirection: "column",
                gap: "4vw",
                padding: "20vw 0"
            }}
            >
            <SearchInput placeholder="conversas" onChange={handleChange} />
            <Box
                sx={{
                    padding: "0 4vw",
                    width: "100%",
                    height: "90%",
                    overflow: "auto",
                    flexDirection: "column",
                    gap: "4vw",
                }}
            >
                {list.map((chat) => (
                    <ChatCard key={chat.id} chat={chat} newMessage={true} onClick={() => setCurrentChat(chat)} />
                ))}
            </Box>
        </Box>
    )
}
