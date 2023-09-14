import { useContext } from "react"
import FiltersDrawerContext from "../contexts/filtersDrawerContext"

export const useFiltersDrawer = () => {
    const filtersdrawerContext = useContext(FiltersDrawerContext)

    const toggle = () => {
        filtersdrawerContext.setOpen(!filtersdrawerContext.open)
    }

    return { ...filtersdrawerContext, toggle }
}
