import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
// import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="socialMediaSection">
          <Link href="/about">About</Link>
          {/* <a href="#!">Contact</a>
          <a href="#!">Privacy Policy</a> */}
          <a href="#!">
            <FaFacebookF />
          </a>
          <a href="#!">
            <FaTwitter />
          </a>
          <a href="#!">
            <FaInstagram />
          </a>
        </div>
        <div className="copyRightSection">
          © {new Date().getFullYear()} Super Fe
        </div>
      </div>
    </footer>
  );
};

export default Footer;
