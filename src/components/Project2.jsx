import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectArrows from "./ProjectArrows";

function Project2() {
  return (
    <>
      <Container sx={{ backgroundColor: "#EDEAEB", pb: 10 }}>
        <Typography variant="h4" sx={{ pt: 15 }}>
          TITLE2
        </Typography>
        <Box
          component="img"
          className="photo__muji"
          src={`${process.env.PUBLIC_URL}/images/work-clone-muji.png`}
          sx={{
            width: "600px",
            mt: "30px",
            borderRadius: "10px",
          }}
        ></Box>
        <Typography variant="h4" sx={{ pt: 10 }}>
          OVERVIEW
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
          description
        </Typography>
        <Typography variant="h4" sx={{ pt: 5 }}>
          TECHNOLOGIES
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
          description
        </Typography>
        <Typography variant="h4" sx={{ pt: 5 }}>
          CHALLENGES
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
          description
        </Typography>
        <Typography variant="h4" sx={{ pt: 5 }}>
          FUTURE IMPROVEMENTS
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
          description
        </Typography>
        <ProjectArrows />
      </Container>
    </>
  );
}

export default Project2;
