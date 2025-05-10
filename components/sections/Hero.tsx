"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={styles.heroSection}
      id="home"
    >
      <div className={styles.content}>
        <motion.div
          className={styles.textContent}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hey there! <span style={{ color: "initial" }}>👋</span>I'm <br/>
            <motion.span
              className={styles.highlight}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: currentText ? currentText.length * 0.1 : 0 
              }}
            >
              {currentText}
            </motion.span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm <strong>Mohamed</strong>, a{" "}
            <strong className={styles.highlight}>Frontend Developer</strong> specializing in{" "}
            <strong className={styles.highlight}>Next.js</strong> with 2+ years experience.
            Passionate about crafting efficient solutions and maintaining cutting-edge
            code quality.
          </motion.p>

          <motion.div
            className={styles.ctaGroup}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Link href="#contact" className={styles.primaryCta}>
                <Button variant="primary" width="full">
                  <span>Start Projects</span>
                  <FiSend className={styles.ctaIcon} />
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="#portfolio" className={styles.secondaryCta}>
                <Button width="full" variant="accent">
                  <span>View Portfolio</span>
                  <FiBriefcase className={styles.ctaIcon} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.animationWrapper}
          initial={{ x: 50, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
        >
          <div className={styles.animationGlow}></div>
          <Lottie
            animationData={devAnimation}
            className={styles.lottieAnimation}
            loop={true}
          
  

          />
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={styles.mouseWrapper}>
          <div className={styles.mouse}></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;