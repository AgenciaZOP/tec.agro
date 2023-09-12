import React from "react"
import { Avatar, Box } from "@mui/material"
import colors from "../style/colors"
import profile2 from "../assets/person.jpg"
import { Tag } from "./Tag"
import { useNavigate } from "react-router-dom"
import { useMenuDrawer } from "../hooks/useMenuDrawer"

interface UserCardProps {
    user?: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const navigate = useNavigate()
    const menu = useMenuDrawer()
    
    const handleNavigation = () => {
        const dataToSend = "editing=true"
        navigate(`/profile`, { state: { editing: true } })
        menu.toggle()
        //console.log(dataToSend)
    }

    return user ? (
        <Box sx={{ alignItems: "center", padding: "0 4vw 4vw", gap: "4vw" }}>
            <Avatar
                src={user.image}
                sx={{ width: "16vw", height: "16vw" }}
                onClick={() => {
                    navigate("/profile")
                    menu.toggle()
                }}
            />
            <Box sx={{ gap: "2vw", flexDirection: "column" }}>
                <Box sx={{ alignItems: "center", gap: "4vw" }}>
                    <p style={{ fontWeight: "600", fontSize: "4vw" }}>{user.name}</p>
                    <p style={{ textDecoration: "underline", fontSize: "3vw", color: `${colors.primary}` }} onClick={handleNavigation}>
                        {" "}
                        Editar
                    </p>
                </Box>
                <Box sx={{ gap: "2vw", flexWrap: "wrap", width: "60vw" }}>
                    {user.adm && <Tag name={"ADM"} variant="adm" style={"2.75vw"} />}
                    {user.producer && <Tag name={"Produtor"} variant="producer" style={"2.75vw"} />}
                    {user.agent && <Tag name={"Corretor"} variant="agent" style={"2.75vw"} />}
                    {user.shipping && <Tag name={"Transportadora"} variant="shipping" style={"2.75vw"} />}
                    {user.business?.store && <Tag name={"Loja"} variant="store" style={"2.75vw"} />}
                    {user.business?.service && <Tag name={"Serviço"} variant="service" style={"2.75vw"} />}
                </Box>
            </Box>
        </Box>
    ) : (
        <></>
    )
}
