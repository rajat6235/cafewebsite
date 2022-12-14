import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link, animateScroll as scroll } from "react-scroll";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo1} alt="app__logo" className="cafeLogo" />
        <img src={images.cafename} alt="app__logo" className="cafeName" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="">Home</a>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={50}
          >
            About
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            duration={50}
          >
            Menu
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            duration={100}
          >
            Gallery
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={100}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      {/* <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div> */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={50}
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  duration={50}
                  onClick={() => setToggleMenu(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  duration={100}
                  onClick={() => setToggleMenu(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
                  onClick={() => setToggleMenu(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
