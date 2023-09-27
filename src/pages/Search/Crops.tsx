import React, { useState } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"

interface CropsProps {}

export const Crops: React.FC<CropsProps> = ({}) => {
    const crops = useCrops()

    const [list, setList] = useState(crops.crops)

    const handleChange = (value: string) => {
        const result = crops.crops.filter((crop) => crop.name.toLowerCase().includes(value.toLowerCase()))
        setList(result)
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
            <SearchInput placeholder={"safras"} onChange={handleChange} />
            <Box sx={{
                flexDirection: "column",
                width: "100%",
                padding: "0 4vw 4vw",
                gap: "4vw",
                height: "91%",
                overflowY: "auto",
            }}>
                {list.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
            </Box>
        </Box>
    )
}
