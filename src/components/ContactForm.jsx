import React, { useState } from "react";
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { isMobile } from "react-device-detect";

const ContactForm = () => {
  const [captchaValid, setCaptchaValid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "phone", // Default value
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }
    alert("Formulario enviado exitosamente.");
  };

  const handleCaptcha = (token) => {
  //  console.log("Token del captcha:", token);  Se envía a tu servicio de correo si lo deseas.
    setCaptchaValid(true);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "60rem",
        width: isMobile ? "97%" : "100%",
        margin: isMobile ? "none" : "1.5rem auto",
        padding: isMobile ? ".3rem" : "1rem",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        border: isMobile ? "none" : "1px solid #06C6A5",
        borderRadius: "4px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "1rem",
          marginTop: "1rem",
          fontSize: isMobile ? "1.8rem" : "2.2rem",
        }}
      >
        Formulario de Contacto
      </Typography>
    
      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />

     
      <TextField
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />

     
      <TextField
        label="Teléfono"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
      />

      
      <TextField
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
      />
      <FormControl>
        <RadioGroup
          row
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
        >
          <FormControlLabel
            value="phone"
            control={<Radio />}
            label="Contactarme vía Teléfono"
          />
          <FormControlLabel
            value="email"
            control={<Radio />}
            label="Contactarme vía Mail"
          />
        </RadioGroup>
      </FormControl>
      <ReCAPTCHA
        sitekey="6LdgEroqAAAAAAR7wxKNlHlCNrejsU4_v2s6KWrH"
        onChange={handleCaptcha}
      />

      {/* Botón Enviar */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{
          alignSelf: "center",
          padding: "0.8rem 2rem",
        }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default ContactForm;
