import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function Project1 () {
  return (
    <>
      <Container sx={{ height: "100vh", backgroundColor: "#000" }}>
        <Typography variant="h2" sx={{ pt: 10 }}>
          TITLE
        </Typography>
        <Box><img style={{width: "400px"}} src="../public/images/work-clone-muji.png"/></Box>
        <Typography variant="h2">OVERVIEW</Typography>
        <Typography variant="body1">description</Typography>
        <Typography variant="h2">CHALLENGES</Typography>
        <Typography variant="body1">description</Typography>
        <Typography variant="h2">FUTURE IMPROVEMENTS</Typography>
        <Typography variant="body1">description</Typography>
      </Container>
    </>
  );
}

export default Project1;