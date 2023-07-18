import React, { useEffect, useState } from "react"
import { BottomNavigationAction, Box, BottomNavigation as MuiBottomNav } from "@mui/material"
import { useHeader } from "../hooks/useHeader"
import { useNavigationList } from "../hooks/useNavigationList"
import { useNavigate } from "react-router-dom"

interface BottomNavigationProps {}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({}) => {
    const navigationList = useNavigationList()
    const navigate = useNavigate()

    const { currentSection, setCurrentSection } = useHeader()
    // const menu = navigationList.filter((item) => item.id == currentSection.id)[0]

    const [currentLocation, setCurrentLocation] = useState(currentSection.navigation![0])

    useEffect(() => {
        navigate(`${currentSection.location}${currentLocation.location}`)
    }, [currentLocation])

    return (
        <MuiBottomNav
            showLabels
            value={currentLocation.id}
            onChange={(event, newValue) => setCurrentLocation(currentSection.navigation!.filter((item) => item.id == newValue)[0])}
            sx={{ marginTop: "auto", background: "transparent", padding: "3vw", height: "10vh" }}
        >
            {currentSection.navigation?.map((item) => {
                const Icon = () => item.icon
                return (
                    <BottomNavigationAction
                        key={item.id}
                        label={<p style={{ fontSize: "2.6vw" }}>{item.title}</p>}
                        icon={<Icon />}
                        value={item.id}
                        sx={{ background: currentLocation.id == item.id ? "white" : "", borderRadius: "6vw", gap: "1vw" }}
                    />
                )
            })}
        </MuiBottomNav>
    )
}
