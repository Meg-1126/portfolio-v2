import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function ProjectArrows() {
  const [pjName, setPjName] = useState("");
  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  useEffect(() => {
    const pathStr = window.location.pathname;
    const pathArr = pathStr.split("/");
    setPjName(pathArr[2]);
  },[pjName]);

  return (
    <>
      <Container sx={{ pt: 2, position: "fixed", top: "50%" }}>
        <Grid container sx={{ pt: 10 }}>
          <Grid item xs={3}>
            <Button
              onClick={goTop}
              sx={{
                backgroundColor: "#3b3b3b",
                pt: 1.8,
                "&:hover": { backgroundColor: "#9d9d9d" },
              }}
            >
              {pjName === "project1" && (
                <Link to={"/projects/project4"}>
                  <ArrowBackIosNewIcon style={{ color: "#fff" }} />
                </Link>
              )}
              {pjName === "project2" && (
                <Link to={"/projects/project1"}>
                  <ArrowBackIosNewIcon style={{ color: "#fff" }} />
                </Link>
              )}
              {pjName === "project3" && (
                <Link to={"/projects/project2"}>
                  <ArrowBackIosNewIcon style={{ color: "#fff" }} />
                </Link>
              )}
              {pjName === "project4" && (
                <Link to={"/projects/project3"}>
                  <ArrowBackIosNewIcon style={{ color: "#fff" }} />
                </Link>
              )}
            </Button>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={2}>
            <Button
              onClick={goTop}
              sx={{
                backgroundColor: "#3b3b3b",
                pt: 1.8,
                "&:hover": { backgroundColor: "#9d9d9d" },
              }}
            >
              {pjName === "project1" && (
                <Link to={"/projects/project2"}>
                  <ArrowForwardIosIcon style={{ color: "#fff" }} />
                </Link>
              )}
              {pjName === "project2" && (
                <Link to={"/projects/project3"}>
                  <ArrowForwardIosIcon style={{ color: "#fff" }} />
                </Link>
              )}
              {pjName === "project3" && (
                <Link to={"/projects/project4"}>
                  <ArrowForwardIosIcon style={{ color: "#fff" }} />
                </Link>
              )}
              {pjName === "project4" && (
                <Link to={"/projects/project1"}>
                  <ArrowForwardIosIcon style={{ color: "#fff" }} />
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
