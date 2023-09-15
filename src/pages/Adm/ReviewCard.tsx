import React from "react"
import { Avatar, Box } from "@mui/material"
import { useDate } from "../../hooks/useDate"
import ReplyIcon from "@mui/icons-material/Reply"
import { Tag } from "../../components/Tag"

interface ReviewCardProps {
    subaccount: Subaccount
    onClick: () => void
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ subaccount, onClick }) => {
    const { getHours } = useDate()

    const tagTitle = {
        producer: "Produtor",
        agent: "Corretor",
        shipping: "Transportador",
        business: "Negócios",
        store: "Loja",
        service: "Serviço",
        adm: "Administrador",
    }

    console.log(subaccount.type) // tá chegando Lojas & Serviços, preciso mudar pra que chege uma das chaves do objeto acima pra colocar as Tags

    return (
        <Box
            onClick={() => onClick()}
            sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw", width: "100%" }}
        >
            <Avatar src={subaccount.image} sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <p style={{ fontSize: "4vw", fontWeight: "bold" }}>{subaccount.name}</p>
                <Tag variant={subaccount.type as SubaccountType} name={tagTitle[subaccount.type as SubaccountType]} style="" />
                <p style={{ fontSize: "3vw" }}>{getHours(new Date(subaccount.date))} h atrás</p>
            </Box>
            <ReplyIcon sx={{ rotate: "180deg", transform: "scaleY(-1)", marginLeft: "auto" }} />
        </Box>
    )
}
