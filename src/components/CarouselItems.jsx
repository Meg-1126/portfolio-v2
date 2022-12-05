import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function CarouselItems({ item }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (item.id === 1) {
      navigate("/projects/project1");
    } else if (item.id === 2) {
      navigate("/projects/project2");
    } else if (item.id === 3) {
      navigate("/projects/project3");
    } else if (item.id === 4) {
      navigate("/projects/project4");
    }
  };

  return (
    <Container onClick={handleClick}>
      <Card sx={{ width: 500, height: 500, margin: "0 auto" }}>
        <CardActionArea sx={{ "&hover": { backgroundColor: "#FFF" } }}>
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
