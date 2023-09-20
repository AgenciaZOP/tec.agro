import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"

interface TransactionsPendingProps {}

export const TransactionsPending: React.FC<TransactionsPendingProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Transações Pendentes")
    }, [])
    return <div className="TransactionsPending-Component"></div>
}
