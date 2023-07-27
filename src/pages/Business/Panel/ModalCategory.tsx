import React from "react"
import { Paper, Box } from "@mui/material"
import { CardCategory } from "./CardCategory"

interface ModalCategoryProps {
    title: string
}
interface Product {
    name: string
    type: string
    image: string
}

export const ModalCategory: React.FC<ModalCategoryProps> = ({ title }) => {
    const product = {
        name: "Fertilizante",
        type: "Produto",
        image: "",
    }
    return (
        <Paper
            elevation={3}
            sx={{
                flexDirection: "column",
                padding: "3vw 5vw",
                paddingBottom: "5vw",
                height: "52%",
                gap: "2vw",
                borderRadius: "2vw",
                overflow: "hidden",
                overflowY: "auto",
            }}
        >
            <Box sx={{ width: "100%", flexDirection: "column", alignItems: "center", gap: "1vw" }}>
                <p
                    style={{
                        fontSize: "2.5vw",
                        textDecoration: "underline",
                        color: "black",
                        alignSelf: "end",
                    }}
                    onClick={() => {}}
                >
                    Editar
                </p>
                <p style={{ fontSize: "4vw" }}>Categoria {title}</p>
            </Box>
            <CardCategory
                product={product}
                image="https://images.tcdn.com.br/img/img_prod/821135/fertilizante_gesso_agricola_liquido_fort_gess_10_litros_45_1_b3e989568b367c4fbc5ff984de5ed05b.jpg"
            />
            <CardCategory product={product} image="https://vittia.com.br/wp-content/uploads/2021/11/sacaria_vitoria.jpg" />
            <CardCategory product={product} image="https://vittia.com.br/wp-content/uploads/2021/11/sacaria_vitoria.jpg" />
        </Paper>
    )
}
