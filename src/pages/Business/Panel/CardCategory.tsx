import React, { useState } from "react"
import { Box, Avatar, IconButton } from "@mui/material"
import DoneIcon from "@mui/icons-material/Done"
import CloseIcon from "@mui/icons-material/Close"
import Tooltip from "@mui/material/Tooltip"
import { useUser } from "../../../hooks/useUser"

interface CardCategoryProps {
    category: Category
    activeCategory: boolean
    reprovedCategory?: boolean
}

export const CardCategory: React.FC<CardCategoryProps> = ({ category, activeCategory, reprovedCategory }) => {
    const user = useUser()
    return (
        <Box
            sx={{
                border: "1px solid gray",
                borderRadius: "2vw",
                height: "9vh",
                padding: "2vw 4vw",
                width: "100%",
                justifyContent: "space-between",
                backgroundColor: "white",
            }}
        >
            <Box sx={{ width: "100%", gap: "2vw", justifyContent: "space-between", alignItems: "center" }}>
                <Box
                    sx={{
                        padding: "2vw",
                        gap: "4vw",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        variant="rounded"
                        style={{ width: "12vw" }}
                        src={
                            "https://www.deere.com.br/assets/images/region-3/products/tractors/medium/r3g002376_NK-trator-6m.png"
                        }
                    ></Avatar>
                    <Box sx= {{flexDirection:"column", gap:"1vw"}}>
                        <p style={{ fontSize: "3.8vw", fontWeight:"600" }}>{category.name}</p>
                        {user.user?.adm && (<p style={{ fontSize: "2.5vw" }}>{user.user?.name}</p>)}
                    </Box>
                </Box>
                {!user.user?.adm ? (
                    <p
                        style={{
                            height: "max-content",
                            fontSize: "2.5vw",
                            color: "black",
                            padding: "1vw",
                            borderRadius: "1.8vw",
                            backgroundColor: !activeCategory ? "#E2EAFF" : "#F0C7FF",
                        }}
                        onClick={() => {}}
                    >
                        {!activeCategory ? "Em análise" : "Aprovado"}
                    </p>
                ) : (
                    <Box sx={{}}>
                        <Tooltip title="Aceitar" placement="top" onClick={() => {}}>
                            <IconButton size="small">
                                <DoneIcon color="primary" fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Recusar">
                            <IconButton size="small" onClick={() => {}}>
                                <CloseIcon color="primary" fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
            </Box>
        </Box>
    )
}
