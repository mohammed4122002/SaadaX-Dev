"use client";
import styles from "../../styles/modules/about.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import { SKILLS } from "../../data/index";
import SkillsCart from "../sub/SkillsCart";
import Buttom from "../ui/Buttom";

const About = () => {
  const duplicatedSkills = [...SKILLS, ...SKILLS];

  const RenderSkills = duplicatedSkills.map((skill, index) => (
    <SkillsCart key={index} name={skill.name} img={skill.img} />
  ));

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <Image
            src="/my.jpg"
            alt="my image"
            width={300}
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.contentRight}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.paragraph}>
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. I love to explore new
            technologies and continuously improve my skills.
          </p>
          <p className={styles.paragraph}>
            In my free time, I enjoy working on personal projects, contributing
            to open-source, and learning about the latest trends in web
            development.
          </p>
          <a
            href="/Mohammed-Saada-cv.pdf"
            download
            className={styles.downloadBtn}
          >
            <Buttom variations={"secondary1"}>Download CV</Buttom>
          </a>
        </div>
      </div>

        <div className={styles.skillsMarqueeWrapper}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeContent}>{RenderSkills}</div>
          </div>
        </div>
   
    </section>
  );
};
export default About;
