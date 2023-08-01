import React, { useEffect, useState } from "react"
import { Box, Tab, Tabs, Paper } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useHeader } from "../../hooks/useHeader"
import { useBusinesses } from "../../hooks/useBusinesses"
import { ReviewCard } from "./ReviewCard"
import { useNavigate } from "react-router-dom"
import { ListTitle } from "../../components/ListTitle"
import { CardCategory } from "../Business/Panel/CardCategory"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
    const header = useHeader()
    const navigate = useNavigate()
    const { businesses } = useBusinesses()
    const [value, setValue] = useState(1)

    const category: Category = {
        id: 0,
        name: "Máquinas",
    }
    // adicionar as outras subaccounts e ordenar por data?
    const pending = [
        ...businesses.filter((business) => !business.active).map((item) => ({ ...item, type: "Loja & Serviços" })),
    ]

    const [list, setList] = useState(pending)

    const handleSearch = (value: string) => {
        setList(pending.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    useEffect(() => {
        header.setTitle("Análises")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", padding: "10vh 5vw", gap: "5vw", width: "100%", height: "80vh" }}>
            <SearchInput placeholder="análises" onChange={handleSearch} />

            {/* <ListTitle title="Categorias em análise" location="categories" /> */}
            
                <Box sx={{ width: "100%" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                        sx={{ width: "100%" }}
                    >
                        <Tab sx={{ width: "50%", fontSize: "3.2vw" }} value={1} label="Negócios e Serviços" />
                        <Tab sx={{ width: "50%", fontSize: "3.2vw" }} value={2} label="Categorias" />
                    </Tabs>
            </Box>
            <Box sx={{width:"100%", flexDirection: "column",height:"100%", paddingBottom:"6vh", overflow:"auto"}}>
                {value === 1 && (
                    <Box sx={{ flexDirection: "column", gap: "3vw", width: "100%" }}>
                        {list.map((business) => (
                            <ReviewCard
                                key={business.id}
                                subaccount={business}
                                onClick={() => navigate("/adm/review", { state: { profile: business } })}
                            />
                        ))}
                    </Box>
                )}
                {value === 2 && (
                    <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                        {list.map((business) => (
                            <CardCategory key={business.id} activeCategory={false} category={category}/>
                        ))}
                        
                        
                    </Box>
                )}
            </Box>
        </Box>
    )
}
