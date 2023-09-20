import React, { useEffect, useState } from "react"
import { Box, Tab, Tabs, Paper } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useHeader } from "../../hooks/useHeader"
import { useBusinesses } from "../../hooks/useBusinesses"
import { ReviewCard } from "./ReviewCard"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ListTitle } from "../../components/ListTitle"
import { CardCategory } from "../../components/PanelBusinessShipping/CardCategory"
import { useProducers } from "../../hooks/useProducers"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
    const header = useHeader()
    const navigate = useNavigate()
    const filter = (useLocation().state?.filter as SubaccountType[] | undefined) || ["store", "agent", "business", "producer", "service", "shipping"]
    console.log({ filter })
    const { businesses } = useBusinesses()
    const { producers } = useProducers()
    console.log(producers)

    // adicionar as outras subaccounts

    const [list, setList] = useState<Subaccount[]>([])

    const handleSearch = (value: string) => {
        setList(list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    useEffect(() => {
        const pending = [
            ...businesses
                .filter((business) => !business.active)
                .map((item) => {
                    const tags: SubaccountType[] = []
                    if (item.store) tags.push("store")
                    if (item.service) tags.push("service")
                    return { ...item, type: tags }
                }),
        ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

        setList(pending.filter((item) => item.type.filter((type) => filter.includes(type)).length == item.type.length))
    }, [businesses])

    useEffect(() => {
        header.setTitle("Análises")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", padding: "10vh 4vw", gap: "5vw", width: "100%", height: "80vh" }}>
            <SearchInput placeholder="análises" onChange={handleSearch} />

            {/* <ListTitle title="Categorias em análise" location="categories" /> */}

            <Box sx={{ width: "100%", flexDirection: "column", height: "100%", paddingBottom: "6vh", overflow: "auto" }}>
                <Box sx={{ flexDirection: "column", gap: "3vw", width: "100%" }}>
                    {list.map((business) => (
                        <ReviewCard
                            key={business.id}
                            subaccount={business}
                            onClick={() => navigate("/adm/review", { state: { profile: business } })}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
