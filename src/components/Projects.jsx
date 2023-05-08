import React from "react";
import { Typography, Container, useMediaQuery } from "@mui/material";
import ProjectsCarousel from "./ProjectsCarousel";

function Projects() {
   const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Container sx={{ background: "#f6f5f5" }}>
        <Typography
          variant={isMedScreen ? "h4" : "h3"}
          sx={{ pt: "100px", pb: "20px" }}
        >
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
