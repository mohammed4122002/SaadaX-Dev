"use client";
import styles from "../../styles/modules/about.module.css";
import Image from "next/image";
import { SKILLS } from "../../data/index";
import SkillsCart from "../widgets/SkillsCart";
import Button from "../ui/Button";

const About = () => {
  const duplicatedSkills = [...SKILLS, ...SKILLS];

  const RenderSkills = duplicatedSkills.map((skill, index) => (
    <SkillsCart key={index} name={skill.name} img={skill.img} />
  ));

  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <Image
            src="/my.jpg"
            alt="my image"
            width={300}
            height={300}
            className={styles.img}
          />
          <Image
            src="/pngwing.com.png"
            alt="my image"
            width={35}
            height={35}
            className={styles.doc}
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
            <Button variant={"secondary"}>Download CV</Button>
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
