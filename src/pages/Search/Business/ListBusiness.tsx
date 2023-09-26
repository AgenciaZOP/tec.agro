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
                padding: "0 4vw 4vw",
                gap: "4vw",
                height: "100%",
                overflow: "hidden",
            }}
        >
            <SearchInput placeholder={"lojas ou serviços"} onChange={() => {}} />
            <Box sx={{ flexDirection: "column", gap: "2vw", height: "100%", overflowY: "auto", paddingBottom: "20vw" }}>
                <BusinessList />
            </Box>
        </Box>
    )
}
