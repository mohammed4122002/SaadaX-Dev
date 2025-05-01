"use client";
import { motion } from "framer-motion";
import styles from "../../styles/modules/contact.module.css";
import Lottie from "lottie-react";
import { FiSend, FiMapPin } from "react-icons/fi";
import Button from "../ui/Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { marqueeVariants, slideInFromRight } from "@/utils/motion";

const Contact = () => {
  return (
    <section
      className={styles.contactSection}
      id="contact"
    
    >
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
          <Button width="full">
            Send Message <FiSend className={styles.icon} />{" "}
          </Button>
        </form>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.animationContainer}>
        
          <DotLottieReact
            src="https://lottie.host/06c453ba-5ea5-4b93-9571-a47cda195744/E1pzMlU22O.lottie"
            loop
            autoplay
            style={{ width: "400px", height: "400px" }}
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
