import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"

interface TransactionsRecentsProps {}

export const TransactionsRecents: React.FC<TransactionsRecentsProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Transações Recentes")
    }, [])
    return <div className="TransactionsPending-Component"></div>
}
