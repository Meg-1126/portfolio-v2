import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import ChipsArray from "./ChipsArray";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 3,
    },
    body1: {
      fontSize: "12px",
    },
  },
});

function About() {
  const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "90vh", background: "#EDEAEB", pt: 10 }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/images/profile2_wall.jpeg`}
            alt="Megumi Akama"
            sx={{ width: "300px", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant={isMedScreen ? "h4" : "h3"}
            sx={{ textAlign: "left", pt: 5, pb: 2, pl: 5 }}
          >
            About me
          </Typography>
          <Typography
            variant={isMedScreen ? "body2" : "body1"}
            sx={{
              width: "85%",
              fontSize: "1.3rem",
              textAlign: "left",
              pb: 2,
              pl: 5,
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
