import { Box } from "@mui/material"
import React from "react"
import { SearchInput } from "../../../components/SearchInput"
import { BusinessList } from "../../Crops/BusinessList"

interface ListBusinessProps {}

export const ListBusiness: React.FC<ListBusinessProps> = ({}) => {
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
            <SearchInput placeholder={"lojas ou serviços"} onChange={() => {}} />
            <Box
                sx={{
                    flexDirection: "column",
                    width: "100%",
                    padding: "0 4vw 4vw",
                    gap: "4vw",
                    height: "91%",
                    overflowY: "auto",
                }}
            >
                <BusinessList />
            </Box>
        </Box>
    )
}
