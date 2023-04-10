import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectArrows from "./ProjectArrows";

function Project3() {
  return (
    <>
      <Container sx={{ backgroundColor: "#f6f5f5", pb: 10 }}>
        <Typography variant="h4" sx={{ pt: 15 }}>
          Tip Calculator
        </Typography>
        <Box
          component="img"
          className="photo__muji"
          src={`${process.env.PUBLIC_URL}/images/work-tip.png`}
          sx={{
            width: "600px",
            mt: "30px",
            borderRadius: "10px",
          }}
        ></Box>
        <Typography variant="body1" sx={{ pt: 2 }}>
          <a href="https://github.com/Meg-1126/tip-calcuration" target="_blank">
            Github
          </a>
          <span> | </span>
          <a href="https://tip-calcuration.vercel.app/" target="_blank">
            Website
          </a>
        </Typography>
        <Typography variant="h5" sx={{ pt: 10 }}>
          OVERVIEW
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            width: "70%",
            margin: "0 auto",
            textAlign: "left",
            pt: 2,
          }}
        >
          description
        </Typography>
        <Typography variant="h5" sx={{ pt: 5 }}>
          TECHNOLOGIES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            width: "70%",
            margin: "0 auto",
            textAlign: "left",
            pt: 2,
          }}
        >
          description
        </Typography>
        <Typography variant="h5" sx={{ pt: 5 }}>
          CHALLENGES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            width: "70%",
            margin: "0 auto",
            textAlign: "left",
            pt: 2,
          }}
        >
          description
        </Typography>
        <Typography variant="h5" sx={{ pt: 5 }}>
          FUTURE IMPROVEMENTS
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            width: "70%",
            margin: "0 auto",
            textAlign: "left",
            pt: 2,
          }}
        >
          description
        </Typography>
        <ProjectArrows />
      </Container>
    </>
  );
}

export default Project3;
