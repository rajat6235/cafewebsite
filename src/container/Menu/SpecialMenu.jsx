import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">CAFÉ MENU</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">HOME DELIVERY</p>
        <div className="app__specialMenu_menu_items">
          {/* {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))} */}
          You can now order your fresh, healthy Robuster's Meal takeaway from
          our cafe or through swiggy/zomato and get it delivered to your door.
          Click the button below to see our online delivery menus.
        </div>
        <div className="orderButtonsContainer">
          <a
            id="button"
            className="orderButton"
            href="https://gymjunkiecafe.es/"
          >
            {" "}
            <p className="ordertext">ORDER ON</p> &nbsp;
            <img className="zomatoIcon" src={images.zomato} />
          </a>
          <a
            id="button"
            className="orderButton"
            href="https://gymjunkiecafe.es/"
          >
            {" "}
            <p className="ordertext">ORDER ON</p> &nbsp;
            <img className="swiggyIcon" src={images.swiggy} />
          </a>
          <div className="robContainer">
            {" "}
            <a
              id="button"
              className="orderButton"
              href="https://gymjunkiecafe.es/"
            >
              <p className="ordertext">ORDER ON</p>&nbsp;
              <img className="robIcon" src={images.logo1} />{" "}
            </a>
            <p className="discount">
              (&nbsp;23% off on <br /> online menu)
            </p>
          </div>
        </div>
      </div>

      <div className="app__specialMenu-menu_wine  flex__center takeAway">
        <p className="app__specialMenu-menu_heading">TAKEAWAY MENU</p>
        <div className="app__specialMenu_menu_items">
          {/* {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))} */}
          To order your fresh, healthy takeaway food for collection from the
          café,
          <br />
          simply call
          <a href="tel:9888861516" className="PhoneNum">
            9888861516
          </a>
          <a href="tel:9888861517" className="PhoneNum">
            9888861517
          </a>
          <br />
          or Whatsapp us on{" "}
          <a href="tel:9888861517" className="PhoneNum">
            {" "}
            <i class="fa fa-whatsapp fa-lg"></i>9888861517{" "}
          </a>
        </div>
        <div className="orderButtonsContainer">
          <button type="button" className="takeawaymenu__button">
            View TakeAway Menu
          </button>
        </div>
      </div>
      {/* <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div> */}

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">ONLINE MENU</p>
        <div className="app__specialMenu_menu_items barcodeContainer">
          <img className="barcodeIcon" src={images.barcode} />
          <div className="orderButtonsContainer">
          <button type="button" className="takeawaymenu__button">
            View Online Menu
          </button>
        </div>
          {/* {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))} */}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
