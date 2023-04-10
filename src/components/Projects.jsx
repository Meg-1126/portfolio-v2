import React from "react";
import { Typography, Container } from "@mui/material";
import ProjectsCarousel from "./ProjectsCarousel";

function Projects() {
  
  return (
    <>
      <Container sx={{ background: "#f6f5f5" }}>
        <Typography variant="h3" sx={{ pt: "100px", pb: "20px" }}>
          PROJECTS
        </Typography>
        <Typography variant="body1" sx={{ pb: "20px" }}>
          Click the image to see more details
        </Typography>
        <ProjectsCarousel />
      </Container>
    </>
  );
}

export default Projects;
