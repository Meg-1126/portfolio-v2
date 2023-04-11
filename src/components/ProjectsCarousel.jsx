import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItems from "./CarouselItems";
import slider from "../slider.json";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

function ProjectsCarousel() {
  return (
    <Carousel
      navButtonsProps={{
        style: {
          backgroundColor: "primary",
          borderRadius: "10px",
        },
      }}
      NextIcon={<ArrowCircleRightIcon />}
      PrevIcon={<ArrowCircleLeftIcon />}
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      sx={{pb: 5}}
    >
      {slider.map((item) => (
        <CarouselItems key={item.id} item={item}/>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;
