import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { BottomNavigation } from "../components/BottomNavigation"
import { Crops } from "./Crops"
import { Chats } from "./Chats"
import { Search } from "./Search"
import { Business } from "./Crops/Business"
import { Shipping } from "./Crops/Shipping"
import { useNavigationList } from "../hooks/useNavigationList"

interface HomeProps {
    user: User
}

export const Home: React.FC<HomeProps> = ({ user }) => {
    const bottomMenu = useNavigationList()

    return (
        <>
            <Header />
            <Box sx={{ width: "100%", padding: "8vh 0 10vh" }}>
                <Routes>
                    <Route index element={<Crops />} />
                    <Route path="business" element={<Business />} />
                    <Route path="shipping" element={<Shipping />} />
                    <Route path="chats/*" element={<Chats channel="buyer" />} />
                    <Route path="search" element={<Search user={user} />} />
                </Routes>
                <BottomNavigation section={bottomMenu.home} />
            </Box>
        </>
    )
}
