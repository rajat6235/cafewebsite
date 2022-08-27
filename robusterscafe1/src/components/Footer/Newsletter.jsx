
import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import { images } from '../../constants';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };


  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return(
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Contact Us" />
      <h1 className="headtext__cormorant newsletterText">Leave Your Precious Feedback</h1>
      {/* <p className="p__opensans">And never miss latest Updates!</p> */}
    </div>
    <input type="email" placeholder="Enter your email address" className='email' onChange={handleEmail} value={email} />
    <div className="app__newsletter-input flex__center">
      <textarea type="text" placeholder="Type your message here" onChange={handleMessage} value={message}/>
      <button type="button" className="custom__button" onClick={submitForm}>Send
      <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={images.load2} alt="not responding" /> ;
                  </b>
                ) : (
                  ""
                )}
      </button>
    </div>
  </div>
);
}
export default Newsletter;