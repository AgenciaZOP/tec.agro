import React from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../SearchInput"
import { useNavigationList } from "../../hooks/useNavigationList"
import { BottomNavigation } from "../BottomNavigation"
import { Schedule } from "./Schedule"

interface ListSheduleCropsProps {
    type: NavigationMenu
}

export const ListSheduleCrops: React.FC<ListSheduleCropsProps> = ({ type }) => {
    const bottomMenu = useNavigationList()

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
            }}
        >
            <SearchInput placeholder="conversas" onChange={() => {}} />
            <Box
                sx={{
                    width: "100%",
                    height: "91%",
                    overflow: "auto",
                    flexDirection: "column",
                    padding: "3vw 0",
                    gap: "3vw",
                }}
            >
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
            </Box>

            <BottomNavigation external section={type} />
        </Box>
    )
}
