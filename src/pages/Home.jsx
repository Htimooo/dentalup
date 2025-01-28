import React from "react";
import PropTypes from "prop-types";
import "../styles/Home.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import logo from "../assets/logotipo.png";
import Informacion from "../components/Informacion";
import WsButton from "../components/WsButton";
import Tratamiento from "../components/Tratamiento";
import ContactForm from "../components/ContactForm";
import FlotanteWS from "../components/FlotanteWS";

function Home(props) {
  return (
    <div className="home">
      <div className="portada">
        <div className="overlay" />
        <div className="logotipo">
          <img src={logo} alt="logotipo" style={{ maxWidth: "250px" }} />
          <h1>Clínica dental</h1>
          <p>La mejor opción para cuidar tu sonrisa</p>
          <WsButton/>
        </div>{" "}
      </div>{" "}
      <Tratamiento/>
      <Informacion></Informacion>
      <ContactForm></ContactForm>
      <FlotanteWS></FlotanteWS>
    </div>
  );
}

Home.propTypes = {};

export default Home;
