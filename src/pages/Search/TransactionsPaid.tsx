import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"

interface TransactionsPaidProps {}

export const TransactionsPaid: React.FC<TransactionsPaidProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Transações Pagas")
    }, [])
    return <div className="TransactionsPending-Component"></div>
}
