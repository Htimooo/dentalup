import React, { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FlotanteWS = () => {
  const phoneNumber = "+59898173504"; // Número de WhatsApp
  const message = "Quiero información sobre un tratamiento"; // Mensaje predeterminado
  const [isVisible, setIsVisible] = useState(false);


  // Maneja la visibilidad del botón en función del scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Posición actual del scroll vertical
    setIsVisible(scrollTop > 300); // Mostrar si el scroll es mayor a 300px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null; // No mostrar el botón si no cumple la condición del scroll
  }

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        backgroundColor: "#25D366", // Color oficial de WhatsApp
        color: "#FFFFFF",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        textDecoration: "none",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <WhatsAppIcon style={{ fontSize: "28px" }} />
    </a>
  );
};

export default FlotanteWS;
