import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Box, Container, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "TypeScript" },
    { key: 1, label: "React" },
    { key: 2, label: "jQuery" },
    { key: 3, label: "Node.js" },
    { key: 4, label: "JavaScript" },
    { key: 5, label: "HTML" },
    { key: 6, label: "CSS" },
    { key: 7, label: "Sass" },
    { key: 8, label: "Git" },
    { key: 9, label: "SEO" },
  ]);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // flexWrap: "wrap",
        listStyle: "none",
        p: 2,
        mt: 2,
        width: "80%",
      }}
      component="ul"
    >
      <Typography variant="h5" sx={{textAlign:"left"}}>Skills</Typography>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {chipData.map((data) => {
          return (
            <ListItem key={data.key} sx={{listStyle:"none"}}>
              <Chip label={data.label} sx={{backgroundColor: "#889389", color: "#fff"}}/>
            </ListItem>
          );
        })}
      </Container>
    </Paper>
  );
}
