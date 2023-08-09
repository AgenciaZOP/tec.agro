import React from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { CardCrop } from "../../../components/PanelProducerAgent/CardCrop"
import { ListTitle } from "../../../components/ListTitle"
import { Schedule } from "../../../components/PanelProducerAgent/Schedule"
import { useNavigate } from "react-router-dom"

interface TransactionsProps {
    agent: Agent
}

export const Transactions: React.FC<TransactionsProps> = ({ agent }) => {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                width: "100%",
                padding: "0 6vw",
                height: "100%",
                flexDirection: "column",
                gap: "3vw",
            }}
        >
            <SearchInput placeholder="safras pagas" onChange={() => {}} />
            <Box
                sx={{
                    width: "100%",
                    overflow: "auto",
                    height: "90%",
                    flexDirection: "column",
                    gap: "3vw",
                    paddingBottom: "4vw",
                }}
            >
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "1vw",
                    }}
                >
                    <ListTitle title="Transações Recentes" location="" />
                    <Box
                        sx={{
                            flexDirection: "column",
                            gap: "3vw",
                        }}
                    >
                        <CardCrop
                            user={agent}
                            type="agent"
                            name="Corretor"
                            transactions={true}
                            handleClick={() => {
                                navigate("")
                            }}
                            variant={false}
                        />
                        <CardCrop
                            user={agent}
                            type="agent"
                            name="Corretor"
                            variant={false}
                            transactions={true}
                            handleClick={() => {}}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "1vw",
                    }}
                >
                    <ListTitle title="Transações Pagas" location="" />
                    <Box
                        sx={{
                            flexDirection: "column",
                            gap: "3vw",
                        }}
                    >
                        <Schedule status="schedule" />
                        <Schedule status="schedule" />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "1vw",
                    }}
                >
                    <ListTitle title="Transações Pendentes" location="" />
                    <Box
                        sx={{
                            flexDirection: "column",
                            gap: "3vw",
                        }}
                    >
                        <Schedule status="schedule" />
                        <Schedule status="schedule" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
