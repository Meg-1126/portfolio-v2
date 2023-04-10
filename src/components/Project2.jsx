import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectArrows from "./ProjectArrows";

function Project2() {
  return (
    <>
      <Container sx={{ backgroundColor: "#f6f5f5", pb: 10 }}>
        <Typography variant="h4" sx={{ pt: 15 }}>
          Skip The Dishes Clone
        </Typography>
        <Box
          component="img"
          className="photo__skipClone"
          src={`${process.env.PUBLIC_URL}/images/work-skipclone.png`}
          sx={{
            width: "600px",
            mt: "30px",
            borderRadius: "10px",
          }}
        ></Box>
        <Typography variant="body1" sx={{ pt: 2 }}>
          <a href="https://github.com/Meg-1126/skip-clone" target="_blank">
            Github
          </a>
          <span> | </span>
          <a href="https://skip-clone.vercel.app/" target="_blank">
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
          Aim for this project is cloning existing website to test my knowledge
          and improve my skills for HTML, CSS, and JavaScript(including
          React.js) . I chose{" "}
          <a href="https://www.skipthedishes.com/" target="_blank">
            Skip the Dishes
          </a>{" "}
          for the website to clone because it uses a lot of cool designs like
          carousel, diagonal lines to divide text and images, and a beautiful
          color combinations. <br />
          Of course it is a responsive website, having both mobile and desktop
          version.
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
          React.js | CSS | Vercel
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
          In this project, I had a hardtime to implement a carousel to display both texts and the food images because I made it from scratch.
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
          Write shorter code using SASS/SCSS or dividing CSS files by component.
        </Typography>
        <ProjectArrows />
      </Container>
    </>
  );
}

export default Project2;
