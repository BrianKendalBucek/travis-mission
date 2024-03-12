import React from "react";
import styles from "../../styles/Hero.module.scss";

// FIX
interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  const heroStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section className={styles.hero} style={heroStyle}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
};

export default Hero;

// import React from "react";
// import styles from "../styles/Hero.module.scss";


// export default function Hero() {
//   return (
//     <section className="hero">
//       <h1>Welcome to the Jungle</h1>
//       {/* <p>Únete a nosotros en nuestro camino de fe</p> */}
//     </section>
//   );
// }
