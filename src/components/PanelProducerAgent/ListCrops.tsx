import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../SearchInput"
import { BottomNavigation } from "../BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import { CardCrop } from "./CardCrop"
import { Header } from "../Header"
import { useHeader } from "../../hooks/useHeader"

interface ListCropsProps {
    user: User
}

export const ListCrops: React.FC<ListCropsProps> = ({ user }) => {
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Suas Safras")
    }, [])
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
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "20vw 0",
                gap: "4vw",
            }}
        >
            <SearchInput placeholder="safras" onChange={() => {}} />
            <Box
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    padding: "4vw",
                    gap: "4vw",
                    height: "91%",
                    overflowY: "auto",
                }}
            >
                <CardCrop variant user={agent} type="agent" name="Corretor" transactions={false} handleClick={() => {}} />
                <CardCrop variant user={agent} type="agent" name="Corretor" transactions={false} handleClick={() => {}} />
                <CardCrop variant user={agent} type="agent" name="Corretor" transactions={false} handleClick={() => {}} />
            </Box>
        </Box>
    )
}
