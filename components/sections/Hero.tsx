"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from "../../styles/modules/hero.module.css";
import dynamic from "next/dynamic";
import { FiBriefcase, FiSend } from "react-icons/fi";
import Button from "../ui/Button";
import devAnimation from "../../data/dev.json";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const name = 'Mohammed Saada';
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  const handleTyping = useCallback(() => {
    const fullText = name;

    setCurrentText(prev => {
      if (isDeleting) {
        return fullText.substring(0, prev.length - 1);
      }
      return fullText.substring(0, prev.length + 1);
    });

    let delta = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentText === fullText) {
      delta = pauseTime;
      setIsDeleting(true);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      delta = 500;
    }

    timerRef.current = setTimeout(handleTyping, delta);
  }, [currentText, isDeleting, name]);

  useEffect(() => {
    timerRef.current = setTimeout(handleTyping, typingSpeed);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [handleTyping]);

  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Hey there! <span style={{ color: "initial" }}>👋</span>I'm <br/> <span className={styles.highlight}>{currentText}</span>
          </h1>
          <p className={styles.subtitle}>
            I'm <strong>Mohamed</strong>, a{" "}
            <strong className={styles.highlight}>Frontend Developer</strong> specializing in{" "}
            <strong className={styles.highlight}>Next.js</strong> with 2+ years experience.
            Passionate about crafting efficient solutions and maintaining cutting-edge
            code quality.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#contact" className={styles.primaryCta}>
              <Button variant="primary" width="full">
                <span>Start Projects</span>
                <FiSend className={styles.ctaIcon} />
              </Button>
            </Link>

            <Link href="#portfolio" className={styles.secondaryCta}>
              <Button width="full" variant="accent">
                <span>View Portfolio</span>
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
            loop={true}
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