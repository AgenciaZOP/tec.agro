import React from "react"
import { Avatar, Box, Paper } from "@mui/material"
import { CurrencyText } from "./CurrencyText"
import { Tag } from "./Tag"
import { useDate } from "../hooks/useDate"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import SquareIcon from "@mui/icons-material/Square"
interface ResourceCardProps {
    variant?: "default" | "square"
    type: SubaccountType[]
    resource: Subaccount
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ variant = "default", type, resource }) => {
    const { getDifference } = useDate()

    const title = {
        producer: "Produtor",
        agent: "Corretor",
        shipping: "Transportador",
        business: "Negócios",
        store: "Loja",
        service: "Serviço",
        adm: "Administrador",
    }

    return variant == "default" ? (
        <Paper
            elevation={0}
            sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw" }}
        >
            <Avatar src={resource.image} sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column", width: "65vw", gap: "1  vw" }}>
                <Box sx={{ justifyContent: "space-between", width: "100%" }}>
                    <p style={{ fontSize: "4vw" }}>{resource.name}</p>
                    <Box sx={{ gap: "1vw" }}>
                        {type
                            .filter((item) => !!item)
                            .map((item) => (
                                <Tag key={item} variant={item} name={title[item]} style={"2.8vw"} />
                            ))}
                    </Box>
                </Box>

                <Box sx={{ fontSize: "2.5vw", gap: "1.5vw", alignItems: "center" }}>
                    <Box sx={{ alignItems: "center", gap: "0.5vw" }}>
                        <p>{resource.rating.toLocaleString("pt-br")} </p>
                        <StarSharpIcon sx={{ width: "2.5vw" }} />
                    </Box>
                    <p>Vendas: {resource.user.sold}</p>
                    <SquareIcon
                        sx={{
                            width: "1vw",
                            transform: "rotate(45deg)",
                        }}
                    />
                    <p>Compras: {resource.user.bought}</p>
                    <SquareIcon sx={{ width: "1vw", transform: "rotate(45deg)" }} />
                    <p>{getDifference(new Date(resource.date))} meses</p>
                </Box>
            </Box>
        </Paper>
    ) : (
        <Paper elevation={0} sx={{ flexDirection: "column", background: "transparent", gap: "1vw" }}>
            <Avatar src={resource.image} variant="rounded" sx={{ width: "20vw", height: "20vw" }} />
            <p style={{ fontSize: "3.2vw", fontWeight: "bold" }}>{resource.name}</p>
            {/* <CurrencyText value={resource.price} style={{ fontSize: "2.8vw" }} /> */}
        </Paper>
    )
}
