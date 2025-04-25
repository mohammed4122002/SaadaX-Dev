//About.tsx
'use client'
import style from "../../styles/modules/about.module.css";
import Image from "next/image";
 import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import { SKILLS } from "../../data/index";
import SkillsCart from "../sub/SkillsCart";
import Buttom from "../ui/Buttom";

const About = () => {






  const RenderSkills = SKILLS.map((skill, index) => (
    <SkillsCart key={index} name={skill.name} img={skill.img} />
  ))





  return (
    <motion.section id="about" className={style.container} initial="hidden"  whileInView="visible">
      <div className={style.contentLeft} >

      <motion.div className={style.imgWrapper} variants={slideInFromLeft(0.4)}>
        <Image
          src="/my.jpg"
          alt="my image"
          width={300}
          height={300}
          className={style.img}
        />
       
        </motion.div>
        <motion.h3 className={style.skillsTitle} variants={slideInFromLeft(0.5)}>Skills</motion.h3>
        <motion.div className={style.skillsGrid} variants={slideInFromLeft(0.6)}>
          {RenderSkills}
        </motion.div>
       
        </div>
     

      <div className={style.contentRight}  >
        <motion.h2 className={style.heading} variants={slideInFromRight(0.5)}>About Me</motion.h2>
        <motion.p className={style.paragraph} variants={slideInFromRight(0.6)}>
          I am a passionate web developer with a keen interest in creating
          dynamic and responsive web applications. I love to explore new
          technologies and continuously improve my skills.
        </motion.p>
        <motion.p className={style.paragraph} variants={slideInFromRight(0.7)}>
          In my free time, I enjoy working on personal projects, contributing to
          open-source, and learning about the latest trends in web development.
        </motion.p>

        <motion.a href="/Mohammed-Saada-cv.pdf" download className={style.downloadBtn} variants={slideInFromRight(0.8)}>
         <Buttom  variations={"secondary1"}>Download CV</Buttom>
       </motion.a>
      </div>
    </motion.section>
  );
};

export default About;
