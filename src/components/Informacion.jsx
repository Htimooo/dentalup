import { Stack, Typography } from '@mui/material';
import React from 'react';
import { info } from "../helpers/Info";
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import "../styles/Informacion.css";
import InfoItem from './InfoItem';
import { isMobile } from 'react-device-detect';

const  Informacion =(props) => {

 

  return (
    <Stack  sx={{padding:'.3rem', width: isMobile ? "97%":'100%', position: 'relative', backgroundColor: "#06C6A5" }} >
        
        <div id='grilla'>
    {info.map((info)=>{
        return <InfoItem  key={info.id} id={info.id} name={info.name} icon={info.icon} details={info.details} />

    })}
    </div>
    </Stack>
  )
}

Informacion.propTypes = {}

export default Informacion;