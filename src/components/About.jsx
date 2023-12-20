import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <p>{title}</p>
  )
  
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1,1)} className="mt-4 text-secondary text-[17px] 
      max-w-3xl leading-[30px]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure 
      possimus fuga ipsam libero voluptatem adipisci. Ut repudiandae 
      quas vero temporibus nam sint! Ullam, magni corrupti. 
      Quaerat aut tenetur earum porro! Similique dicta dolore iste nam quis 
      ullam aperiam expedita voluptatem!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service}/>
        ))}
      </div>
    </div>
  )
}

export default About;