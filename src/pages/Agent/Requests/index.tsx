import React from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { CardNotification } from "./CardNotification"

interface RequestsProps {}

export const Requests: React.FC<RequestsProps> = ({}) => {
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
                <CardNotification />
                <CardNotification />
                <CardNotification />
            </Box>
        </Box>
    )
}
