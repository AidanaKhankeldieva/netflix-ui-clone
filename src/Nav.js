import React, { useState, useEffect } from "react";
import netflixlogo from "./netflix-logo.png";
import netflixavatar from "./netflix-avatar.png";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  //nav should appear only once window gets scrolled down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav__logo' src={netflixlogo} alt='Netflix Logo' />
      <img className='nav__avatar' src={netflixavatar} alt='Netflix Avatar' />
    </div>
  );
};

export default Nav;
