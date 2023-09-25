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
                padding: "0 4vw",
                gap: "5vw",
                height: "100%",
                overflow: "hidden",
            }}
        >
            <SearchInput placeholder={"safras"} onChange={() => {}} />
            <Box sx={{ flexDirection: "column", gap: "2vw", height: "100%", overflowY: "auto", paddingBottom: "10vh" }}>
                <BusinessList />
            </Box>
        </Box>
    )
}
