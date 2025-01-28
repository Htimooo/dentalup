import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import {useNavigate} from 'react-router-dom';


const InfoItem = (props) => {
  const navigate = useNavigate();
  const { name, details, icon,id } = props;
  return (
    <Paper   
      sx={{
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        justifyContent: 'center',
        padding: "1rem",
        borderRadius:'4px',
        height:'300px',
        width: isMobile ? '90%': '250px', 
        margin: '0 auto' 
      }}
    >
     <div  style={{display: 'flex', alignItems: 'center', justifyContent:'center',width:'75px', height:'75px',margin: '.5rem auto',borderRadius:'50%',boxShadow: "0 15px 35px rgba(8, 160, 105, 0.2)" }}>
      <img style={{width:'100px'}} src= {icon} alt={name} />
      </div>
      <Typography sx={{fontWeight:700, marginTop:'.5rem'}} variant="h6">{name}</Typography> 
      <Typography sx={{fontWeight:700}} variant="body-1">{details}</Typography>   


    </Paper>
  );
};

InfoItem.propTypes = {};

export default InfoItem;
