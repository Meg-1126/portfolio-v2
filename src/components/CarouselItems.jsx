import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

function CarouselItems({ item }) {
  const handleClick = () => alert("click");
  return (
    <Container>
      <Card sx={{ width: 500, height: 500, margin: "0 auto" }}>
        <CardActionArea
          onClick={handleClick}
          sx={{ "&hover": { backgroundColor: "#FFF" } }}
        >
          <CardMedia
            component="img"
            height="500"
            image={item.image}
            alt="Project1"
          />
        </CardActionArea>
      </Card>
      <Typography>{item.title}</Typography>
    </Container>
  );
}

export default CarouselItems;
