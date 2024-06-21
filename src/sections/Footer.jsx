import React from "react";

import Twitter from "@/assets/svg/Twitter";
import Facebook from "@/assets/svg/Facebook";

import "@/styles/Footer.css";
import Instagram from "@/assets/svg/Instagram";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div>
          <h1>Exploradores del Rey</h1>
          <ul className="footer-social">
            <li>
              <a href="">
                <Facebook className={"footer-icon"} />
              </a>
            </li>

            <li>
              <a href="">
                <Twitter className={"footer-icon"} />
              </a>
            </li>

            <li>
              <a href="">
                <Instagram className={"footer-icon"} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p>© Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
