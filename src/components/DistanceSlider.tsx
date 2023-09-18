import { Box, Slider } from '@mui/material';

interface DistanceSliderProps {}

export const DistanceSlider: React.FC<DistanceSliderProps> = ({}) => {
    return (
        <Box
            sx={{
                flexDirection: "column"
            }}
        >
            <Slider
                min={0}
                max={200}
                size='small'
                valueLabelDisplay='on'
            />
            <Box
                sx={{
                    fontSize: "3vw",
                    marginTop: "-1vw",
                    justifyContent: "space-between"
                }}    
            >
                <p>0 Km</p>
                <p>200 Km</p>
            </Box>
        </Box>
    )
}