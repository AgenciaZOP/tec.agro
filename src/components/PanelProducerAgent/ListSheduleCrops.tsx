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
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "20vw 0",
                gap: "4vw",
            }}
        >
            <SearchInput placeholder="conversas" onChange={() => {}} />
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
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
                <Schedule status="schedule" />
            </Box>
        </Box>
    )
}
