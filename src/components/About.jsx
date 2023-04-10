import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

function About() {
  return (
    // <Box sx={{ height: "100vh" }}>
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh", background: "#f6f5f5" }}
      >
        <Grid item xs={6}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/images/profile2_wall.jpeg`}
            alt="Megumi Akama"
            sx={{ width: "300px", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" style={{ textAlign: "left" }}>
            About me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "80%",
              fontSize: "1.3rem",
              textAlign: "left",
            }}
          >
            <strong>Megumi</strong> is a React developer. She was born and
            raised in Japan and moved to Vancouver in 2021. She's passionate
            about coding, writing, and drawing. While she's creating various
            kinds of web contents or apps, she's also working as a Web Content
            Writer and English to Japanese Translator:) By utilizing her unique
            working experiences, she will create tons of exciting contents which
            make everyone happy.
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <Typography variant="h2" sx={{ textAlign: "left" }}>
            Skills
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </>
    // </Box>
  );
}

export default About;
