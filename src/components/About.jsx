import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

function About() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh" }}
    >
      <Grid item xs={6}>
        <Box
          component="img"
          src="images/profile2_wall.jpeg"
          alt="Megumi Akama"
          sx={{ width: "300px", borderRadius: "10px" }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="body1"
          sx={{
            width: "80%",
            fontSize: "1.3rem",
            textAlign: "left",
          }}
        >
          <strong>Megumi</strong> is a React developer, based in Vancouver who
          loves coding, SEO Marketing. She’s currently studying at Cornerstone
          Community College of Canada to brush up on her front-end developer
          skills.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
