import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => 

{
  return(
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Booth no. 121 (Behind City Medicos) Phase -9, Mohali Punjab </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Sat: 10:00 am - 10:00 am</p>
        <p className="p__opensans">Sunday:Closed </p>
      </div>
      <a href="https://goo.gl/maps/FsnTfR6jX6GHcrN56">  <button type="button" className="custom__button" style={{ position: 'relative',top:"65px" }}>View on maps</button>
     </a>

    </div>

    <div className="app__wrapper_img">
    <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);}

export default FindUs;