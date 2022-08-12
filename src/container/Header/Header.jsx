import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import Carousel from './Carousel';
import './Header.css';


const Header = () => {

  const slides = [
    images.headerimg1,
    images.headerimg2,
    images.headerimg3,
    images.headerimg4,
    images.headerimg5,
    images.headerimg6

  ]
return  (

  <div className="container">
      <Carousel slides={slides} />
</div>
)};

export default Header;