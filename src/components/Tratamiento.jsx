import React, { useState } from "react";
import { tratamientosList } from "../helpers/TratamientosList";
import isNil from "lodash/isNil";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { isMobile } from "react-device-detect";

const Tratamiento = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: '0 auto', marginBottom:'1rem' }}>
      <Typography sx={{fontSize: isMobile ? '1.8rem' : '2.2rem'}} variant="h4" my="1.5rem">
        {" "}
        Tratamientos{" "}
      </Typography>
      <Box
        sx={{
          width: isMobile ? "96%" : "100%",
          margin: "auto",
          padding: isMobile ? "none" : "1rem",
          border: isMobile ? "none" : "1px solid #06C6A5",
          borderRadius: "4px",
        }}
      >
        {!isNil(tratamientosList) &&
          tratamientosList.map((tratamiento, index) => (
            <Accordion
              key={tratamiento.id}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                border: "1px solid #06C6A5",
                width: isMobile ? "96%" : "100%",
                borderRadius: "4px",
                boxShadow: "none",
                margin: "0 auto",
                "&:not(:last-child)": {
                  marginBottom: ".3rem",
                },
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ margin: "0 auto" }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: isMobile ? "1rem" : "" }}
                >
                  {tratamiento.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {tratamiento.details.map((detail, detailIndex) => (
                  <Typography sx={{ textAlign: "left" }} key={detailIndex}>
                    {" "}
                    • {detail}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </div>
  );
};

export default Tratamiento;
