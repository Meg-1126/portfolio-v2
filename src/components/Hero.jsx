import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {SiGmail} from "react-icons/si";

function Hero() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Typography variant="h2" sx={{ pt: "150px", fontWeight: "bold" }}>
        MEGUMI AKAMA
      </Typography>
      <Typography
        variant="body1"
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
          // display: "flex",
          textAlign: "center",
          margin: "30px auto",
          px: 2,
          py: 1,
        }}
      >
        <a
          href="#"
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
  );
}

export default Hero;
