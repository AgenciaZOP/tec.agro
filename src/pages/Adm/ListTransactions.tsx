import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { Transactions } from "../../components/Transactions"
import { ListTitle } from "../../components/ListTitle"
import { Route, Routes } from "react-router-dom"
import { Reviews } from "./Reviews"
import { DescriptionCrop } from "../../components/DescriptionCrop"

interface ListTransactionsProps {
    producer: User
}

export const ListTransactions: React.FC<ListTransactionsProps> = ({ producer }) => {
    const header = useHeader()

    const crop: Crop = {
        description: "",
        date: "25/02/2355",
        gallery: "",
        id: 20,
        image: "",
        name: "Safra de feijão",
        price: 2541.54,
        producer: producer,
        rating: 5,
        sold: 3421.5,
        weight: 1000,
    }
    const handleSearch = () => {}
    useEffect(() => {
        header.setTitle("Transações")
    }, [])
    return (
        <>
            <Box sx={{ flexDirection: "column", padding: "10vh 4vw", gap: "3vw", width: "100%", height: "93vh" }}>
                <SearchInput placeholder="chamado" onChange={handleSearch} />
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                        flexDirection: "column",
                        gap: "2vw",
                        paddingBottom: "5vw",
                    }}
                >
                    <ListTitle title="Transações Recentes" location="recent" />
                    <Transactions
                        crop={crop}
                        company="Agrofértil"
                        date={"25/03/2023"}
                        haveSeller
                        location="/adm/transactions/description"
                    />
                    <Transactions
                        crop={crop}
                        company="Agrofértil"
                        date={"25/03/2023"}
                        haveSeller={false}
                        location="/adm/transactions/description"
                    />
                    <ListTitle title="Transações Pagas" location="paid" />
                    <Transactions
                        crop={crop}
                        company="Agrofértil"
                        date={"25/03/2023"}
                        haveSeller={false}
                        location="/adm/transactions/description"
                    />
                    <ListTitle title="Transações Pendentes" location="pending" />
                    <Transactions
                        crop={crop}
                        company="Safra"
                        date="29/05/200"
                        haveSeller
                        location="/adm/transactions/description"
                    />
                </Box>
            </Box>
        </>
    )
}
