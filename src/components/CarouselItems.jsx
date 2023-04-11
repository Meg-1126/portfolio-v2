import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

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
    <Container onClick={handleClick} sx={{ maxWidth: 800 }}>
      <Card sx={{ width: 650, height: 500, margin: "0 auto" }}>
        <CardActionArea sx={{ "&hover": { backgroundColor: "#FFF" } }}>
          <CardMedia
            component="img"
            height="500"
            image={item.image}
            alt="Project1"
          />
        </CardActionArea>
      </Card>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {item.title}
      </Typography>
      <Typography sx={{ pb: 1 }}>{item.description}</Typography>
      {item.member === 2 ? (
        <Chip
          icon={<PeopleOutlineIcon style={{ color: "#fff" }} />}
          label="Group"
          sx={{ mb: 3, backgroundColor: "#889389", color: "#fff" }}
        />
      ) : (
        <Chip
          icon={<PermIdentityIcon style={{ color: "#fff" }} />}
          label="Personal"
          sx={{ mb: 3, backgroundColor: "#889389", color: "#fff" }}
        />
      )}
    </Container>
  );
}

export default CarouselItems;
