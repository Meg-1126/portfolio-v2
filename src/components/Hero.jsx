import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
        is a React developer, based in Vancouver who loves coding, SEO
        Marketing. <br />
        She’s currently studying at Cornerstone Community College of Canada to
        brush up on her front-end developer skills.
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
          backgroundColor: "#3b3b3b",
          color: "#fff",
          display: "flex",
          textAlign: "center",
          margin:"30px auto",
          px: 4,
          py: 1
        }}
      >
        <a href="mailto:kamayatu91@gmail.com" target="_blank" style={{textDecoration: "none", color: "#fff", display:"block"}}>
          Email 
        </a>
        <SendIcon sx={{display: "block"}}/>
      </Button>
    </Box>
  );
}

export default Hero;
