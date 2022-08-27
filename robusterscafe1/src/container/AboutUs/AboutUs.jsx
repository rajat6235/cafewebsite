import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus section__padding" id="about">
    <div className="app__aboutus-overlay ">
      <img src={images.logo1} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content">
      <div className="app__aboutus-content_about">
        <h1 className="headText">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Robuster's motto is simple "Building Fit Bodies - One Plate at a Time," and they have been doing this since 2018. 
Robuster's Fitness Cafe is a health food restaurant that dishes up clean and healthy meals that are both delicious and nutritious. Robuster's cooks daily using the freshest ingredients, concentrates on nutritional value and stays away from common unhealthy cooking methods. 
The combination of a motivational atmosphere and unique menus are designed to help you easily reach your fitness goals. Over the years, Robuster's has gained tremendous popularity amongst fitness enthusiasts, families, bodybuilders, athletes, or anybody looking to reach or maintain a healthy lifestyle. Robuster's makes sure to keep your "Fit Life - Made Easy".</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
      <div className="app__aboutus-content_knife flex__center"> 
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headText">Our Mission</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Good nutrition is NOT a diet. It is a lifestyle with an open-ended goal of total well-being and improved quality of life.

People want to enjoy their food. People want to be healthy. And we refuse to believe that people can't do both of those things at the same time.

At our core, we're just friendly, playful, witty, encouraging, down-to-Earth people who appreciate real food. Striving to help our customer’s live happier, healthier, fuller lives not just by serving fresh, healthy food, but by being there to guide and encourage them every step of the way. Because healthy starts with fresh and FRESH STARTS HERE.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;