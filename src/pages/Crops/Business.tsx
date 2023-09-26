import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { CategoriesList } from "./CategoriesList"
import { Banners } from "./Banners"
import { NearYouList } from "./NearYouList"
import { useHeader } from "../../hooks/useHeader"
import { BusinessList } from "./BusinessList"
import { ListTitle } from "../../components/ListTitle"

interface BusinessProps {}

export const Business: React.FC<BusinessProps> = ({}) => {
    const header = useHeader()

    const images = [
        "https://s2-autoesporte.glbimg.com/RCvihgx1v0YBjHilWE_eri049ow=/0x0:1600x989/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/l/0/BAGv60Q96UENhOaK7FBw/3sd.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkAvBQbSTGdGVXlDb4BORFlY9rwPNhzcgHQ&usqp=CAU",
    ]

    useEffect(() => {
        header.setTitle("Lojas & Serviços")
    }, [])

    return (
        <Box
            sx={{
                padding: "20vw 0",
            }}
        >
            <Box
                sx={{
                    flexDirection: "column",
                    padding: "0 4vw 4vw",
                    gap: "4vw",
                    width: "100vw",
                    height: "100%",
                    overflowX: "hidden",
                }}
            >
                <CategoriesList />
                <Banners images={images} />
                <NearYouList />
                <ListTitle title="Lojas" location="business" />
                <BusinessList />
            </Box>
        </Box>
    )
}
