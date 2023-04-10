import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProjectArrows from "./ProjectArrows";

function Project4() {
  return (
    <>
      <Container sx={{ backgroundColor: "#f6f5f5", pb: 10 }}>
        <Typography variant="h4" sx={{ pt: 15 }}>
          Portfolio Website
        </Typography>
        <Box
          component="img"
          className="photo__muji"
          src={`${process.env.PUBLIC_URL}/images/work-portfolio-ver2.png`}
          sx={{
            width: "600px",
            mt: "30px",
            pt: "5px",
            borderRadius: "10px",
          }}
        ></Box>
        <Typography variant="body1" sx={{ pt: 2 }}>
          <a href="https://github.com/Meg-1126/portfolio-v2" target="_blank">
            Github
          </a>
          <span> | </span>
          <Link className="route" to="/">
            Website
          </Link>
          {/* <a href="#" target="_blank">
            Website
          </a> */}
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

export default Project4;
