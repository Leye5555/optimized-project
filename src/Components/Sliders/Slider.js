import React from "react";
import designImg from "../../assets/images/slider_1.jpg";
import designImgSquashed from "../../assets/images/slider_1_squashed.jpeg";
import productionImg from "../../assets/images/slider_2.jpg";
import productionImgSquashed from "../../assets/images/slider_2_squashed.jpeg";
import certificationImg from "../../assets/images/slider_3.jpg";
import certificationImgSquashed from "../../assets/images/slider_3_squashed.jpeg";
import AliceCarousel from "react-alice-carousel";
import ProgressiveImage from "../ProgressiveImage";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import "./Slider.css";
import "../../media.css";

const items = [
  {
    path: "/capabilities/design",
    icon: (
      <ProgressiveImage
        placeholderSrc={designImgSquashed}
        src={designImg}
        width={1000}
        height={500}
        alt="design"
      />
    ),
  },
  {
    path: "/capabilities/production",
    icon: (
      <ProgressiveImage
        placeholderSrc={productionImgSquashed}
        src={productionImg}
        width={1000}
        height={500}
        alt="production"
      />
    ),
  },
  {
    path: "/capabilities/certification",
    icon: (
      <ProgressiveImage
        placeholderSrc={certificationImgSquashed}
        src={certificationImg}
        width={1000}
        height={500}
        alt="certification"
      />
    ),
  },
];

function Slider() {
  return (
    <AliceCarousel
      className="slider"
      mouseTracking
      items={items.map((item) => (
        <Link to={item.path} key={item.path} className="slider-item">
          {item.icon}
        </Link>
      ))}
      autoPlayInterval={1200}
      infinite
      animationDuration={2000}
      autoPlay
    />
  );
}

export default Slider;
