import React from "react"
import { Avatar, Box } from "@mui/material"
import colors from "../colors"
import profile2 from "../assets/person.jpg"
interface UserCardProps {
    user?: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const color = colors
    return user ? (
        <Box sx={{ alignItems: "center", padding: "5vw", gap: "3vw" }}>
            <img src={profile2} alt="" style={{ width: "16vw", height: "16vw", borderRadius: "50%" }} />

            {/* <Avatar sx={{ width: "16vw", height: "16vw" }} /> */}
            <Box sx={{ gap: "1.6vw", flexDirection: "column" }}>
                <Box sx={{ alignItems: "center", gap: "3vw" }}>
                    <p style={{ fontWeight: "600", fontSize: "4vw" }}>{user.name}</p>
                    <a style={{ fontSize: "2.5vw", color: `${color.primary}` }} href="">
                        {" "}
                        Editar
                    </a>
                </Box>
                <Box
                    sx={{
                        fontSize: "2.8vw",
                        width: "max-content",
                        backgroundColor: "#D2FFB6",
                        borderRadius: "7vw",
                        padding: "1vw 2vw 1vw 2vw",
                    }}
                >
                    Produtor
                </Box>
            </Box>
        </Box>
    ) : (
        <></>
    )
}
