"use client";
import { motion } from "framer-motion";
import styles from "../../styles/modules/about.module.css";
import Image from "next/image";
import { SKILLS } from "../../data/index";
import SkillsCart from "../widgets/SkillsCart";
import Button from "../ui/Button";

const About = () => {
  const duplicatedSkills = [...SKILLS];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={styles.container}
      id="about"
    >
      <div className={styles.content}>
        <motion.div
          className={styles.contentLeft}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
        >
          <div className={styles.coloredFrame}>
            <Image
              src="/my2.jpg"
              alt="my image"
              width={320}
              height={320}
              className={styles.img}
              style={{borderRadius:'24px',filter: 'hue-rotate(64deg) contrast(-2.92)'}}
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.contentRight}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.heading}>About Me</h2>
          <motion.p 
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. I love to explore new
            technologies and continuously improve my skills.
          </motion.p>
          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            In my free time, I enjoy working on personal projects, contributing
            to open-source, and learning about the latest trends in web
            development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="/Mohammed-Saada-cv.pdf" download>
              <Button variant={"accent"}>Download CV</Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.skillsMarqueeWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>Skills</h2>
        <motion.div
          className={styles.marqueeContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillsCart name={skill.name} img={skill.img} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;