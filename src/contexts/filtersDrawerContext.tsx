import { createContext, useState } from "react"
import React from "react"

interface FiltersDrawerContextValue {
    open: boolean
    setOpen: (value: boolean) => void
}

interface FiltersDrawerProviderProps {
    children: React.ReactNode
}

const FiltersDrawerContext = createContext<FiltersDrawerContextValue>({} as FiltersDrawerContextValue)

export default FiltersDrawerContext

export const FiltersDrawerProvider: React.FC<FiltersDrawerProviderProps> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false)

    return <FiltersDrawerContext.Provider value={{ open, setOpen }}>{children}</FiltersDrawerContext.Provider>
}
