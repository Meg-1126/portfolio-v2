import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function Contact() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "500px",
        margin: "0 auto",
        height: "100vh",
      }}
      // onSubmit={handleSubmit}
    >
      <Typography
        variant="h2"
        sx={{ pt: "130px", pb: "20px", fontWeight: "bold" }}
      >
        GET IN TOUCH
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "1.3rem", pb: "20px" }}>
        I can’t wait for collaborating with you!
      </Typography>
      <TextField
        label="name"
        required
        sx={{ my: "1rem", backgroundColor: "#FFFFFF" }}
      />
      <TextField
        label="email"
        required
        sx={{ my: "1rem", backgroundColor: "#FFFFFF" }}
      />
      <TextField
        id="outlined-multiline-static"
        label="message"
        required
        multiline
        rows={6}
        sx={{ my: "1rem", backgroundColor: "#FFFFFF" }}
      />
      <Button
        // variant="contained"
        type="submit"
        sx={{
          backgroundColor: "#3B3B3B",
          color: "secondary",
          width: "200px",
          display: "block",
          margin: "30px auto",
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Contact;
