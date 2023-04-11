import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ChipsArray from "./ChipsArray";

function About() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "90vh", background: "#EDEAEB", pt: 10 }}
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
          <Typography variant="h3" sx={{ textAlign: "left", pb: 2 }}>
            About me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "80%",
              fontSize: "1.3rem",
              textAlign: "left",
              pb: 2,
            }}
          >
            <strong>Megumi</strong> is a React developer. She was born and
            raised in Japan and moved to Vancouver in 2021. She's passionate
            about coding, writing, and drawing. <br />
            While she's creating various kinds of web contents or apps, she's
            also working as a Web Content Writer and English to Japanese
            Translator:) By utilizing her unique working experiences, she will
            create tons of exciting contents which make everyone happy.
          </Typography>
          <ChipsArray />
        </Grid>
      </Grid>
      {/* <Grid container alignItems="center" justifyContent="center" sx={{pb:10}}>
        <Grid item xs={5}>
          <Typography variant="h3" sx={{ textAlign: "left" }}>
            Qualifications
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <p>some</p>
        </Grid>
      </Grid> */}
    </>
  );
}

export default About;
