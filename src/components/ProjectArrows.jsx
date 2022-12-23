import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function ProjectArrows() {
  const [pjName, setPjName] = useState("");
  useEffect(() => {
    const pathStr = window.location.pathname;
    const pathArr = pathStr.split("/");
    setPjName(pathArr[2]);
    console.log(pathArr[2]);
  },[pjName]);

  return (
    <>
      <Container sx={{ pt: 2 }}>
        <Grid container sx={{ pt: 10 }}>
          <Grid item xs={5}>
            <Button>
              {pjName === "project1" && (
                <Link to={"/projects/project4"}>
                  <ArrowBackIosNewIcon />
                </Link>
              )}
              {pjName === "project2" && (
                <Link to={"/projects/project1"}>
                  <ArrowBackIosNewIcon />
                </Link>
              )}
              {pjName === "project3" && (
                <Link to={"/projects/project2"}>
                  <ArrowBackIosNewIcon />
                </Link>
              )}
              {pjName === "project4" && (
                <Link to={"/projects/project3"}>
                  <ArrowBackIosNewIcon />
                </Link>
              )}
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <Button>
              {pjName === "project1" && (
                <Link to={"/projects/project2"}>
                  <ArrowForwardIosIcon />
                </Link>
              )}
              {pjName === "project2" && (
                <Link to={"/projects/project3"}>
                  <ArrowForwardIosIcon />
                </Link>
              )}
              {pjName === "project3" && (
                <Link to={"/projects/project4"}>
                  <ArrowForwardIosIcon />
                </Link>
              )}
              {pjName === "project4" && (
                <Link to={"/projects/project1"}>
                  <ArrowForwardIosIcon />
                </Link>
              )}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProjectArrows;
