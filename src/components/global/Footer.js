import React from "react";
import { FaMask } from "react-icons/fa";
import baroquefooter from '../../img/baroquefooter.png';


function Footer() {
  return (
    <div className="footer">
      <img src={baroquefooter} className="background-baroque" />
      <div className="footer-text">
        <p>
          <FaMask /> The Womanonymous to serve you{" "}
        </p>
        <p>Because you deserve it</p>
      </div>
    </div>
  );
}

export default Footer;
