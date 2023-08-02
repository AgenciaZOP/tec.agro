import React from "react"
import { Box, Avatar } from "@mui/material"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import { Tag } from "./Tag"
import { UserStats } from "./UserStats"

interface InfoProfileProps {
    user: User
}

export const InfoProfile: React.FC<InfoProfileProps> = ({ user }) => {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                width: "100%",
                height: "max-content",
                borderRadius: "2vw",
                flexDirection: "Column",
                alignItems: "center",
                padding: "2vw",
                paddingBottom: "5vw",
                gap: "2vw",
            }}
        >
            <Box sx={{ flexDirection: "column", alignItems: "center", gap: "1vw" }}>
                <Avatar src={user?.image} sx={{ width: "25vw", height: "25vw", borderRadius: "50%" }} />
                <p style={{ fontSize: "2.7vw", color: "gray" }}>@{user?.username}</p>
                <p style={{ fontSize: "5.5vw" }}>{user?.name}</p>
                <Box sx={{ alignItems: "center", gap: "1vw" }}>
                    <FmdGoodOutlinedIcon sx={{ width: "4vw" }} />
                    <p style={{ fontSize: "2.56vw" }}>
                        {user?.city}, {user?.uf}
                    </p>
                </Box>
            </Box>

            <Box sx={{ flexDirection: "row", gap: "1vw" }}>
                {user?.adm && <Tag name={"ADM"} variant="adm" style={"2vw"} />}
                {user?.producer && <Tag name={"Produtor"} variant="producer" style={"2vw"} />}
                {user?.agent && <Tag name={"Corretor"} variant="agent" style={"2vw"} />}
                {user?.shipping && <Tag name={"Transportadora"} variant="shipping" style={"2vw"} />}
                {user?.business && <Tag name={"Loja"} variant="business" style={"2vw"} />}
            </Box>

            <UserStats user={user!} sx={{ gap: "5vw" }} />
        </Box>
    )
}
