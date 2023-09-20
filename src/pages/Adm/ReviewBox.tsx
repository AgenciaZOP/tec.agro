import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { useUsers } from "../../hooks/useUsers"
import { useNavigate } from "react-router-dom"

interface ReviewBoxProps {
    variant: "producer" | "agent" | "shipping" | "business"
}

export const ReviewBox: React.FC<ReviewBoxProps> = ({ variant }) => {
    const { users } = useUsers()
    const navigate = useNavigate()

    const [total, setTotal] = useState(0)
    const [pending, setPending] = useState(0)

    const colors = {
        producer: "#D2FFB6",
        agent: "#E2EAFF",
        shipping: "#FFFDC7",
        business: "#F0C7FF",
    }

    const title = {
        producer: "Produtores",
        agent: "Corretores",
        shipping: "Transportadores",
        business: "Lojas",
    }

    useEffect(() => {
        setTotal(users.filter((user) => user[variant]?.active).length)
        setPending(users.filter((user) => user[variant]?.active == false).length)
    }, [users])

    return (
        <Box
            sx={{
                backgroundColor: colors[variant],
                borderRadius: "5vw",
                width: "35vw",
                height: "35vw",
                flexDirection: "column",
                padding: "3vw",
                justifyContent: "space-between",
            }}
            onClick={() => navigate("/adm/users")}
        >
            <Box sx={{ flexDirection: "column" }}>
                <p style={{ fontSize: "6vw" }}>{total}</p>
                <p style={{ fontWeight: "bold", fontSize: "3.5vw" }}>{title[variant]}</p>
            </Box>
            <p style={{ fontSize: "3.5vw" }}>
                <span style={{ fontWeight: "bold" }}>{pending}</span> {title[variant]} aguardando análise {">"}
            </p>
        </Box>
    )
}
