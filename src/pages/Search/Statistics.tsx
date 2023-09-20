import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"

interface StatisticsProps {}

export const Statistics: React.FC<StatisticsProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        return header.setTitle("Estatísticas")
    }, [])
    return <div className="Statistics-Component"></div>
}
