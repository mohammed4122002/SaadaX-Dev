"use client";

import { motion } from "framer-motion";
import styles from "../../styles/hero.module.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { FiArrowUpRight } from "react-icons/fi";
import Buttom from "../ui/Buttom";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span>🌟 Frontend Visionary</span>
          </div>
          <h1 className={styles.title}>
            {" "}
            Transforming Ideas Into
            <span className={styles.highlight}> Digital Masterpieces</span>
          </h1>
          <p className={styles.subtitle}>
            I'm <strong>Mohamed</strong>, a{" "}
            <span className={styles.highlight}> Frontend Developer </span>
            with 2+ years of experience in{" "}
            <span className={styles.highlight}> Next.js </span>
            development. Proficient in utilizing cutting-edge development tools
            and procedures to deliver high-quality results. Committed to
            delivering exceptional code quality and staying updated with
            industry trends and advancements.
          </p>
          <div className={styles.ctaGroup}>
           {/* <a href="#contact" className={styles.primaryCta}>
              Start Project
              <FiArrowUpRight className={styles.ctaIcon} />
            </a>
            <a href="#portfolio" className={styles.secondaryCta}>
              View Portfolio
            </a>
           */}
           <a href="#contact" className={styles.primaryCta}>
             <Buttom variations={"secondary1"} width={"full"}> Start Project
             <FiArrowUpRight className={styles.ctaIcon} />
             </Buttom>
             
            </a>
            <a href="#portfolio" className={styles.secondaryCta}>
             <Buttom width={"full"} variations={"secondary2"}> View Portfolio</Buttom>
            </a>
          </div>
        </div>
        <div className={styles.animationWrapper}>
        <div className={styles.animationGlow}></div>
        <Lottie 
            animationData={devAnimation} 
            className={styles.lottieAnimation}
          />
        </div>
      </div>

      
      <div className={styles.scrollIndicator}>
              <div className={styles.mouseWrapper}>
                <div className={styles.mouse}></div>
              </div>
            </div>


    </section>
  );
};
export default Hero;
