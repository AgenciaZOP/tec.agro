import React from "react"
import { Paper, Box } from "@mui/material"
import { CardProduct } from "./CardProduct"
import { ListTitle } from "../ListTitle"

interface ModalCategoryProps {
    title: string
    product: Product
    location: string
}

export const ModalCategory: React.FC<ModalCategoryProps> = ({ title, product, location }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                flexDirection: "column",
                padding: "3vw 3vw",
                width: "92vw",
                height: "max-content",
                margin: "0 4vw",
                gap: "2vw",
                borderRadius: "2vw",
                overflow: "hidden",
            }}
        >
            <ListTitle title={title} location={location} />
            <CardProduct
                local={true}
                product={product}
                image="https://images.tcdn.com.br/img/img_prod/821135/fertilizante_gesso_agricola_liquido_fort_gess_10_litros_45_1_b3e989568b367c4fbc5ff984de5ed05b.jpg"
                subtitle="Produto"
                action="Editar"
            />
            <CardProduct
                local={true}
                product={product}
                image="https://vittia.com.br/wp-content/uploads/2021/11/sacaria_vitoria.jpg"
                subtitle="Serviço"
                action="Editar"
            />
        </Paper>
    )
}
