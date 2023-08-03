import React from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { CardNotification } from "../Requests/CardNotification"
import { CardReceived } from "./CardReceived"
interface ChatsProps {}

export const Chats: React.FC<ChatsProps> = ({}) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
                padding: "1vw",
            }}
        >
            <SearchInput placeholder="conversas" onChange={() => {}} />
            <Box
                sx={{
                    width: "100%",
                    height: "91%",
                    overflow: "auto",
                    flexDirection: "column",
                    padding: "3vw",
                    gap: "2vw",
                }}
            >
                <CardReceived newMessage={true} />
                <CardReceived newMessage={false} />
            </Box>
        </Box>
    )
}
