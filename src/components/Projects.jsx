import React from "react";
import { Typography } from "@mui/material";
import ProjectsCarousel from "./ProjectsCarousel";

function Projects() {
  
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: "100px", pb: "50px", fontWeight: "bold" }}
      >
        PROJECTS
      </Typography>
      <ProjectsCarousel />
    </>
  );
}

export default Projects;
