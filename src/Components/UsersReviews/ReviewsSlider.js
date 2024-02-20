import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './reviews.css';

function ReviewsSlider() {
   return (
      <Carousel className="review-slider_container" infiniteLoop={true} autoPlay={true} showThumbs={false}>
          <div className="reviews_container">
            <div className="review_img">
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="icon" />
            </div>
            <div className="review-text">
              <p>"Lorem ipsum dolor sit orem ipsuObcaeoluptas dolorem nobis aperiam alias voluptates.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid."</p>
             </div>
            <div>
              <p className="users-name"> Damen K.</p>
              <p>CEO at upcoach.com</p>
             </div>
          </div>
          <div className="reviews_container">
            <div className="review_img">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="icon" />
            </div>
            <div className="review-text">
              <p>"Lorem ipsum dolor sit orem ipsuObcaeoluptas dolorem nobis aperiam alias voluptates.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid."</p>
            </div>
            <div>
              <p className="users-name"> Jayden S.</p>
              <p>GDPR Expert, Adria Consulting</p>
            </div>
          </div>
          <div className="reviews_container">
            <div className="review_img">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="icon" />
            </div>
            <div className="review-text">
              <p>"Lorem ipsum dolor sit orem ipsuObcaeoluptas dolorem nobis aperiam alias voluptates.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid."</p>
            </div>
            <div>
              <p className="users-name">Branson M.</p>
              <p>Manager at Brands Agency</p>
            </div>
          </div>
      </Carousel>
    );
}

export default ReviewsSlider;