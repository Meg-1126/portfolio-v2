import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import {SiGmail} from "react-icons/si";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 1,
    },
    body1: {
      fontSize: "10px",
    },
    button: {
      fontStyle: "italic",
    },
  },
});


function Hero() {
  const isMedScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100vh" }}>
        <Typography
          variant={isMedScreen ? "h4" : "h2"}
          sx={{ pt: "150px", fontWeight: "bold" }}
          className="fullName"
        >
          MEGUMI AKAMA
        </Typography>
        <Typography
          variant={isMedScreen ? "subtitle1" : "body1"}
          sx={{
            pt: "20px",
            width: "70%",
            margin: "0 auto",
            fontSize: "1.5rem",
            textAlign: "left",
          }}
        >
          is a <strong>React developer</strong>, based in Vancouver who loves
          coding, SEO Marketing. <br />
          She’s currently studying at{" "}
          <a href="https://ciccc.ca/" target="_blank">
            Cornerstone Community College of Canada
            <OpenInNewIcon fontSize="small" />
          </a>{" "}
          to brush up on her front-end developer skills.
        </Typography>
        <Box
          component="img"
          className="photo__profile1"
          src={`${process.env.PUBLIC_URL}/images//profile1_home.jpg`}
          sx={{
            width: "200px",
            mt: "30px",
            borderRadius: "10px",
          }}
        ></Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#889389",
            color: "#fff",
            display: "flex",
            textAlign: "center",
            margin: "30px auto 10px",
            px: 2,
            py: 1,
          }}
        >
          <a
            href="mailto:kamayatu91@gmail.com"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              // display: "block",
              p: 3,
            }}
          >
            <SiGmail style={{ display: "block", fontSize: 25 }} />
          </a>
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#889389",
            color: "#fff",
            textAlign: "center",
            margin: "30px auto",
            px: 2,
            py: 1,
          }}
        >
          <a
            href="https://drive.google.com/file/d/1S_Y33KmdT8XZG-EAcTz6ZLAg4s006zlL/view?usp=sharing"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              p: 3,
            }}
          >
            Resume
          </a>
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default Hero;
