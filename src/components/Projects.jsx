import React from "react";
import { Box, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

function Projects() {
  return (
    <Box sx={{ height: "100vh", padding: "30px" }}>
      <Typography
        variant="h2"
        sx={{ pt: "100px", pb: "50px", fontWeight: "bold" }}
      >
        PROJECTS
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={3}>
          <Card sx={{ width: 300, height: 300 }}>
            <CardContent>Pj1</CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ width: 300, height: 300 }}>
            <CardContent>Pj1</CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ width: 300, height: 300 }}>
            <CardContent>Pj1</CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ width: 300, height: 300 }}>
            <CardContent>Pj1</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
