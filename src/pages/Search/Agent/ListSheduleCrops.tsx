import React from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { useNavigationList } from "../../../hooks/useNavigationList"
import { BottomNavigation } from "../../../components/BottomNavigation"
import { Schedule } from "../../../components/PanelProducerAgent/Schedule"

interface ListSheduleCropsProps {}

export const ListSheduleCrops: React.FC<ListSheduleCropsProps> = ({}) => {
    const bottomMenu = useNavigationList()

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
                    gap: "3vw",
                }}
            >
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
            </Box>

            <BottomNavigation section={bottomMenu.agent} />
        </Box>
    )
}
