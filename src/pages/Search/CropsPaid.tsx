import React, { useEffect } from "react"
import { useHeader } from "../../hooks/useHeader"

interface CropsPaidProps {}

export const CropsPaid: React.FC<CropsPaidProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        return () => {
            header.setTitle("Safras Pagas")
        }
    }, [])

    return <div className="CropsPaid-Component"></div>
}
