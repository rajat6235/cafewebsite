import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import Carousel from './Carousel';
import './Header.css';


const Header = () => {

  const slides = [
    // "https://picsum.photos/id/1032/900/400",
    // "https://picsum.photos/id/1033/900/400",
    // "https://picsum.photos/id/1037/900/400",
    // "https://picsum.photos/id/1035/900/400",
    // "https://picsum.photos/id/1036/900/400",
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