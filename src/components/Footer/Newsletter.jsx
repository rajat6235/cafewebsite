
import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Contact Us" />
      <h1 className="headtext__cormorant newsletterText">Leave Your Precious Feedback</h1>
      {/* <p className="p__opensans">And never miss latest Updates!</p> */}
    </div>
    <input type="email" placeholder="Enter your email address" className='email' />
    <div className="app__newsletter-input flex__center">
      <textarea type="text" placeholder="Type your message here" />
      <button type="button" className="custom__button">Send</button>
    </div>
  </div>
);

export default Newsletter;