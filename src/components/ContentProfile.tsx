import React, { useState } from "react"
import { ListTitle } from "./ListTitle"
import { Transactions } from "./Transactions"
import { UserStats } from "./UserStats"
import { Box, Paper, Avatar } from "@mui/material"
import { Comment } from "./Comment"
import { Tag } from "./Tag"
import EditIcon from "@mui/icons-material/Edit"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import profile2 from "../assets/person.jpg"
import { EditProfile } from "./EditProfile"

interface ContentProfileProps {
    user: User | null
}

export const ContentProfile: React.FC<ContentProfileProps> = ({ user }) => {
    const [editing, setEditing] = useState(false)

    const [title, settitle] = useState("Safra de Soja 2022/23 ")
    const [company, setCompany] = useState("Transportadora")
    const [price, setPrice] = useState("125.000,02")
    const [weight, setWeight] = useState(9.1)
    const [date, setDate] = useState("19/05/2023")

    const handleEditing = () => {
        if (editing) {
            setEditing(false)
        } else {
            setEditing(true)
        }
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                paddingBottom: "5vw",
                overflowY: "auto",
                gap: "3vw",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    width: "92%",
                    height: "max-content",
                    borderRadius: "2vw",
                    flexDirection: "Column",
                    alignItems: "center",
                    padding: "2vw",
                    paddingBottom: "5vw",
                    gap: "2vw",
                }}
            >
                <Box
                    sx={{
                        alignItems: "center",
                        width: "max-content",
                        justifyContent: "center",
                        padding: "1vw 3vw",
                        borderRadius: "5vw",
                        backgroundColor: editing ? "#8FFFA1" : "white",
                        gap: "0.5vw",
                        alignSelf: "self-end",
                        position: editing ? "fixed" : "",
                    }}
                >
                    <p
                        style={{ textAlign: "right", fontSize: "2.7vw", textDecoration: "underline" }}
                        onClick={handleEditing}
                    >
                        {editing ? "Editando" : "Editar"}
                    </p>
                    <EditIcon sx={{ width: "3vw" }} />
                </Box>
                {!editing ? (
                    <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                        <Avatar src={profile2} sx={{ width: "22vw", height: "22vw", borderRadius: "50%" }} />
                        <p style={{ fontSize: "5.5vw" }}>{user?.name}</p>
                        <Box sx={{ alignItems: "center", gap: "1vw" }}>
                            <FmdGoodOutlinedIcon sx={{ width: "4vw" }} />
                            <p style={{ fontSize: "2.56vw" }}>{"Jaboatão dos Guararapes, Pernambuco"}</p>
                        </Box>
                    </Box>
                ) : (
                    <EditProfile user={user} />
                )}

                <Box sx={{ flexDirection: "row", gap: "1vw" }}>
                    {user?.adm && <Tag name={"ADM"} variant="adm" style={"2vw"} />}
                    {user?.producer && <Tag name={"Produtor"} variant="producer" style={"2vw"} />}
                    {user?.agent && <Tag name={"Corretor"} variant="agent" style={"2vw"} />}
                    {user?.shipping && <Tag name={"Transportadora"} variant="shipping" style={"2vw"} />}
                    {user?.business && <Tag name={"Loja"} variant="ads" style={"2vw"} />}
                </Box>

                <UserStats user={user!} sx={{ gap: "5vw" }} />
            </Box>
            <Box
                sx={{
                    width: "92%",
                    flexDirection: "column",
                }}
            >
                <ListTitle title="Transações Recentes" location="transactions" />
                <Box sx={{ width: "100%", flexDirection: "column", gap: "2vw" }}>
                    <Transactions
                        title={title}
                        price={price}
                        weight={weight}
                        company={company}
                        date={date}
                        haveSeller={true}
                    />
                    <Transactions
                        title={"Safra de café"}
                        price={"45.287,23"}
                        weight={5.8}
                        company={company}
                        date={"27/03/2023"}
                        haveSeller={false}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    width: "92%",
                    flexDirection: "column",
                }}
            >
                <ListTitle title="Comentários de Perfil" location="comments" />
                <Paper elevation={3} sx={{ borderRadius: "3vw", flexDirection: "column", height: "max-content" }}>
                    <Comment
                        user={"Hellen Katsi"}
                        comment={
                            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
                        }
                        qtdStars={5}
                        date={"5 de Fevereiro"}
                    />{" "}
                    {/* <Comment
                            user={"Joelson Souza"}
                            comment={
                                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                            }
                            qtdStars={2}
                            date={"19 de Maio"}
                        />{" "}
                        <Comment
                            user={"Abram Culhane"}
                            comment={"Latin words, combined with a handful of model sentence structures."}
                            qtdStars={3}
                            date={"28 de Julho"}
                        />{" "} */}
                </Paper>
            </Box>
        </Box>
    )
}
