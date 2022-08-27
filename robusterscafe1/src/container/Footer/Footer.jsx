import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Address</h1>
        <p className="p__opensans">Booth no. 121 (Behind City Medicos) <br/>Phase-9, Mohali Punjab</p>
        <p className="p__opensans">9888861516</p>
        <p className="p__opensans">9888871516</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo2} alt="footer_logo" />
        <p className="p__opensans">&quot;No Junk only healthy punk.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Saturday:</p>
        <p className="p__opensans">10:00 am - 10:00 am</p>
        <p className="p__opensans">Sunday : Closed</p>
        {/* <p className="p__opensans">Closed</p> */}
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">  Designed & Developed by Rajat Gupta
  <i className="fa-solid fa-hand-peace" ></i></p>
    </div>

  </div>
);

export default Footer;
