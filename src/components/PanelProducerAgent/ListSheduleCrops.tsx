import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../SearchInput"
import { Schedule } from "./Schedule"
import { useHeader } from "../../hooks/useHeader"

interface ListSheduleCropsProps {}

export const ListSheduleCrops: React.FC<ListSheduleCropsProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Safras Agendadas")
    }, [])

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
                    padding: "3vw 4vw",
                    gap: "3vw",
                }}
            >
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
            </Box>
        </Box>
    )
}
