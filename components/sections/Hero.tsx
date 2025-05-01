"use client";

import styles from "../../styles/modules/hero.module.css";
import dynamic from "next/dynamic";
import {  FiBriefcase, FiSend } from "react-icons/fi";
import Button from "../ui/Button";
import devAnimation from "../../data/dev.json";
import Link from "next/link";


const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.badge} >
            <span>🌟 Frontend Visionary</span>
          </div>
          <h1 className={styles.title}>
            {" "}
            Transforming Ideas Into<span className={styles.highlight}>Digital Masterpieces</span>
          </h1>
          <p className={styles.subtitle}>
            I'm <strong>Mohamed</strong>, a{" "}
            <strong className={styles.highlight}> Frontend Developer </strong>  with 2+ years of experience in{" "}
            <strong className={styles.highlight}> Next.js </strong>  development. Proficient in utilizing cutting-edge development tools
            and procedures to deliver high-quality results. Committed to
            delivering exceptional code quality and staying updated with
            industry trends and advancements.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#contact" className={styles.primaryCta}>
              <Button variant="primary" width="full">
               <span> Start Projects  </span>
                <FiSend className={styles.ctaIcon} />
              </Button>
            </Link>

            <Link href="#portfolio" className={styles.secondaryCta}>
              <Button width="full" variant="accent" >
               <span>View Portfolio </span> 
                <FiBriefcase className={styles.ctaIcon} />
              </Button>
            </Link>
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
