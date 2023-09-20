import React from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../SearchInput"
import { BottomNavigation } from "../BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import { CardCrop } from "./CardCrop"
import { Header } from "../Header"

interface ListCropsProps {
    user: User
}

export const ListCrops: React.FC<ListCropsProps> = ({ user }) => {
    const agent: Agent = {
        id: 0,
        userId: user.id,
        user: user,
        date: "29/05/2000",
        name: "Julian Galdino",
        email: "",
        document: "",
        phone: "",
        image: "",
        rating: 5,
        ratings: 5,
        active: false,
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
            }}
        >
            <SearchInput placeholder="safras" onChange={() => {}} />
            <Box
                sx={{
                    width: "100%",
                    height: "91%",
                    overflow: "auto",
                    flexDirection: "column",
                    padding: "3vw 4vw",
                    gap: "3vw",
                }}
            >
                <CardCrop variant user={agent} type="agent" name="Corretor" transactions={false} handleClick={() => {}} />
                <CardCrop variant user={agent} type="agent" name="Corretor" transactions={false} handleClick={() => {}} />
                <CardCrop variant user={agent} type="agent" name="Corretor" transactions={false} handleClick={() => {}} />
            </Box>
        </Box>
    )
}
