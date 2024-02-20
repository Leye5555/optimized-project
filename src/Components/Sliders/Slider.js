import React from 'react';
import designImg from '../../images/slider_1.jpg';
import productionImg from '../../images/slider_2.jpg';
import certificationImg from '../../images/slider_3.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import './Slider.css';
import '../../media.css';

const items = [
 <Link to="/capabilities/design" className="slider-item">
     <img src={productionImg} alt="design" />
  </Link>,
  <Link to="/capabilities/production" className="slider-item ">
     <img src={designImg} alt="production" />
  </Link>,
  <Link to="/capabilities/certification" className="slider-item">
     <img src={certificationImg} art="certification" />
  </Link>
];

function Slider() {
  return (
    <AliceCarousel className="slider"
    mouseTracking 
    items = {items} 
    autoPlayInterval={1200}
    infinite
    animationDuration={2000}
    autoPlay
    />
  )
}

export default Slider;