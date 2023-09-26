import React, { useEffect, useState } from "react"
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

    const [title, settitle] = useState("Safra de Soja 2022/23 ")
    const [company, setCompany] = useState("Transportadora")
    const [price, setPrice] = useState("125.000,02")
    const [weight, setWeight] = useState(9.1)
    const [date, setDate] = useState("19/05/2023")

    const handleSearch = () => {}
    useEffect(() => {
        header.setTitle("Transações")
    }, [])
    return (
            <Box sx={{ flexDirection: "column", padding: "20vw 0", gap: "4vw", width: "100%", height: "93vh" }}>
                <SearchInput placeholder="chamado" onChange={handleSearch} />
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                        flexDirection: "column",
                        gap: "4vw",
                        padding: "0 4vw 4vw",
                    }}
                >
                    <ListTitle title="Transações Recentes" location="transrecents" />
                    <Transactions
                        title={title}
                        price={price}
                        weight={weight}
                        company={company}
                        date={date}
                        haveSeller
                        location="/adm/transactions/description"
                    />
                    <Transactions
                        title={title}
                        price={price}
                        weight={weight}
                        company={company}
                        date={date}
                        haveSeller={false}
                        location="/adm/transactions/description"
                    />
                    <ListTitle title="Transações Pagas" location="transpaid" />
                    <Transactions
                        title={title}
                        price={price}
                        weight={weight}
                        company={company}
                        date={date}
                        haveSeller={false}
                        location="/adm/transactions/description"
                    />
                    <ListTitle title="Transações Pendentes" location="transpending" />
                    <Transactions
                        title={title}
                        price={price}
                        weight={weight}
                        company={company}
                        date={date}
                        haveSeller
                        location="/adm/transactions/description"
                    />
                    <Transactions
                        title={title}
                        price={price}
                        weight={weight}
                        company={company}
                        date={date}
                        haveSeller
                        location="/adm/transactions/description"
                    />
                </Box>
            </Box>
    )
}
