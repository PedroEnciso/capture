import React from "react";
import home1 from "../img/home1.png";
// styles
import { About, Description, Hide, Image } from "../styles";
// framer motion
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>memes</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

// styled components

export default AboutSection;
