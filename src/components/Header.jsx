import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const linkStyle = {
  textDecoration: "none",
  color: "secondary",
};

function Header() {
  const handleClickOpen = () => {
    let modal = document.getElementById("mobile-menu");
    let header = document.getElementById("header");
    modal.style.display = "block";
    header.style.display = "none";
  };
  const handleClickClose = () => {
    let modal = document.getElementById("mobile-menu");
    let header = document.getElementById("header");
    modal.style.display = "none";
    header.style.display = "block";
  }
  return (
    <>
      <AppBar id="header" position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item lg={4}>
            <Button>
              <Link className="route" to="/">
                <Box
                  component="img"
                  className="img__logo"
                  src={`${process.env.PUBLIC_URL}/images/portfolio-logo.png`}
                  sx={{
                    width: "50px",
                    "&:hover": { opacity: "0.9", transition: ".3s" },
                  }}
                />
              </Link>
            </Button>
          </Grid>
          <Grid item lg={4} className="header-menu">
            <Button sx={{ "&:hover": { backgroundColor: "#EDEAEB" } }}>
              <Link className="route" to="/about" style={linkStyle}>
                ABOUT
              </Link>
            </Button>
            <Button sx={{ "&:hover": { backgroundColor: "#EDEAEB" } }}>
              <Link className="route" to="/projects" style={linkStyle}>
                PROJECTS
              </Link>
            </Button>
            <Button sx={{ "&:hover": { backgroundColor: "#EDEAEB" } }}>
              <a
                href="mailto:kamayatu91@gmail.com"
                target="_blank"
                style={linkStyle}
              >
                CONTACT
              </a>
              <OpenInNewIcon sx={{ color: "#3b3b3b" }} />
            </Button>
          </Grid>
          <Grid item lg={4} className="header-icons">
            <IconButton
              color="secondary"
              aria-label="github.com"
              onClick={() => window.open("https://github.com/Meg-1126")}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="linkedin.com"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/megumi-akama-163490196/"
                )
              }
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="twitter.com"
              onClick={() => window.open("https://twitter.com/Megumisun3")}
            >
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item lg={2} className="btn-menu">
            <IconButton id="btn-open" onClick={handleClickOpen}>
              <DragHandleIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
      {/* For Mobile Menu */}
      <Container id="mobile-menu">
        <IconButton
          id="btn-close"
          className="btn-close"
          onClick={handleClickClose}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Box className="mobile-menu-content">
          <div className="menu-link">
            <Link className="route" to="/" onClick={handleClickClose}>
              HOME
            </Link>
          </div>
          <div className="menu-link">
            <Link
              className="route"
              to="/about"
              style={linkStyle}
              onClick={handleClickClose}
            >
              ABOUT
            </Link>
          </div>
          <div className="menu-link">
            <Link
              className="route"
              to="/projects"
              style={linkStyle}
              onClick={handleClickClose}
            >
              PROJECTS
            </Link>
          </div>
          <div className="menu-link">
            <a
              href="mailto:kamayatu91@gmail.com"
              target="_blank"
              style={linkStyle}
            >
              CONTACT
            </a>
            <OpenInNewIcon />
          </div>
          <div className="menu-link">
            <a
              href="https://github.com/Meg-1126"
              target="_blank"
              className="menu-link-sns"
            >
              GitHub
            </a>
            <OpenInNewIcon />
          </div>
          <div className="menu-link">
            <a
              href="https://www.linkedin.com/in/megumi-akama-163490196/"
              target="_blank"
              className="menu-link-sns"
            >
              LinkedIn
            </a>
            <OpenInNewIcon />
          </div>
          <div className="menu-link">
            <a
              href="https://twitter.com/Megumisun3"
              target="_blank"
              className="menu-link-sns"
            >
              Twitter
            </a>
            <OpenInNewIcon />
          </div>
        </Box>
      </Container>
    </>
  );
}

export default Header;
