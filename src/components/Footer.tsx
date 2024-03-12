import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMediaSection}>
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
        <div className={styles.copyRightSection}>
          © {new Date().getFullYear()} Super Fe
        </div>
      </div>
    </footer>
  );
};

export default Footer;
