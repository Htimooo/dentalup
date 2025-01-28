import React from "react";
import "../styles/Footer.css";
import {  Typography,Link } from "@mui/material";
import { isMobile } from "react-device-detect";


function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ width: "100%", backgroundColor: "#fafafa" }}>
     
   
      <div className="footer">
        <div style={{display: 'flex', flexDirection: isMobile ? "column": 'row', textAlign: isMobile ? 'left': 'center', justifyContent: 'space-between' , width:'90%', margin:'0 auto'}}>
          <Typography variant= {isMobile ? "body2": 'body1'} >&copy; {currentYear} dentalup.uy</Typography>
          <Typography variant= {isMobile ? "body2": 'body1'}>
      desarrollado por:{" "}
      <Link 
        href="https://hugoandres.dev.uy" 
        target="_blank" 
        rel="noopener noreferrer"
        underline="hover" 
        color="primary"
      >
        hugoandres.dev.uy
      </Link>
    </Typography>
    
     
    
   
    
   
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
