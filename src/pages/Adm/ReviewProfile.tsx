import React from "react"; 
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
interface ReviewProfileProps {
     
}

export const ReviewProfile : React.FC<ReviewProfileProps> = ({}) =>  {
   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
   const profile = useLocation().state.profile as Subaccount | undefined;
   console.log({profile})
   return profile ? <Box> <p>
    {profile.name}aaaa
    </p></Box> : <></>
};

