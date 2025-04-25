"use client";

import styles from "../../styles/modules/contact.module.css";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/contact.json";
import { motion } from "framer-motion";
import { FiSend, FiMapPin } from "react-icons/fi";
import Buttom from "../ui/Buttom";

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.leftSide}>
        <div className={styles.header}>
          <h2>
            Let&apos;s Create <span>Magic</span> Together ✨
          </h2>
          <p className={styles.subtitle}>
            <strong>Mohamed | Gaza, Palestine 🇵🇸</strong>
            <br />
            Crafting digital excellence with precision and passion.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" required />
            <label>Your Name</label>
            <span className={styles.inputBorder}></span>
          </div>
          <div className={styles.inputGroup}>
            <input type="email" required />
            <label>Your Email</label>
            <span className={styles.inputBorder}></span>
          </div>

          <div className={styles.inputGroup}>
            <textarea required rows={4} />
            <label>Your Vision</label>
            <span className={styles.inputBorder}></span>
          </div>
    {/*
          <button className={styles.submitButton}>
            Send Message <FiSend className={styles.icon} />
          </button>
          */}
          <Buttom width="full" >Send Message <FiSend className={styles.icon} /> </Buttom>
        </form>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.animationContainer}>
          <Lottie
            animationData={contactAnimation}
          
          />
        </div>
        <div className={styles.locationCard}>
          <div className={styles.pinIcon}>
            <FiMapPin />
          </div>
          <div className={styles.locationText}>
            <h4>Based in Gaza, Palestine</h4>
            <p>Working Remotely Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
