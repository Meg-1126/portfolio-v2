import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Grid, IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const linkStyle = {
  textDecoration: "none",
  color: "secondary",
};

function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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
              window.open("https://www.linkedin.com/in/megumi-akama-163490196/")
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
      </Grid>
    </AppBar>
  );
}

export default Header;
