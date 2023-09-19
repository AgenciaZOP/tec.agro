import React, { useState } from "react"
import { Box, Button, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useFiltersDrawer } from "../hooks/useFiltersDrawer"

interface SearchInputProps {
    placeholder: string
    onChange: (value: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
    const filtersDrawer = useFiltersDrawer()
    const [value, setValue] = useState("")

    const handleChange = (value: string) => {
        setValue(value)
        onChange(value)
    }

    return (
        <TextField
            value={value}
            onChange={(event) => handleChange(event.target.value)}
            placeholder={`Buscar por ${placeholder}`}
            InputProps={{
                startAdornment: <SearchIcon />,
                endAdornment: (
                    <Button variant="contained" color="secondary" onClick={filtersDrawer.toggle}
                    sx={{
                        borderRadius: "10vw",
                        textTransform: "capitalize",
                        padding: " 0 2vw"
                    }}>
                        Filtrar
                    </Button>
                ),
                sx: {
                    gap: "2vw",
                    borderRadius: "10vw",
                    backgroundColor: "#EAEAEA",
                    alignSelf: "center",
                    height: "12vw",
                    width: "92vw",
                    padding: "0 2vw"
                },
            }}
        />
    )
}
