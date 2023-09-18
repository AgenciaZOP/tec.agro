import React, { useEffect, useState } from "react"
import { Box, Tab, Tabs, Paper } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useHeader } from "../../hooks/useHeader"
import { useBusinesses } from "../../hooks/useBusinesses"
import { ReviewCard } from "./ReviewCard"
import { useNavigate } from "react-router-dom"
import { ListTitle } from "../../components/ListTitle"
import { CardCategory } from "../../components/PanelBusinessShipping/CardCategory"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
    const header = useHeader()
    const navigate = useNavigate()
    const { businesses } = useBusinesses()

    const category: Category = {
        id: 0,
        name: "Máquinas",
    }
    // adicionar as outras subaccounts e ordenar por data?
    const pending = [
        ...businesses
            .filter((business) => !business.active)
            .map((item) => {
                const tags: SubaccountType[] = []
                if (item.store) tags.push("store")
                if (item.service) tags.push("service")
                return { ...item, type: tags }
            }),
    ]

    const [list, setList] = useState(pending)

    const handleSearch = (value: string) => {
        setList(pending.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
    }

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
