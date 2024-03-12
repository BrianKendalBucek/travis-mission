import React from "react";
import Link from "next/link";
// import styles from "../styles/Header.module.scss";

// FIX
interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // Combine the provided className with the default 'header' class
  const headerClass = `header ${className || ""}`.trim();

  // return (
  //   <header className={headerClass}>
  //     <nav className={styles.navbar}>
  //       <ul className={styles.navList}>
  //         <li className={styles.navItem}>
  //           <Link href="/">Home</Link>
  //         </li>
  //         <li className={styles.navItem}>
  //           <Link href="/about">About</Link>
  //         </li>
  //         <li className={styles.navItem}>
  //           <Link href="/donations">Donations</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  // );

  return (
    <header className={headerClass}>
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <Link href="/">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/about">About</Link>
          </li>
          <li className="navItem">
            <Link href="/donations">Donations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
