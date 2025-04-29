"use client";

import { useEffect, useState } from "react";
import styles from "../styles/modules/ScrollToTopButton.module.css";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.button} ${isVisible ? styles.visible : styles.hidden}`}
      aria-label="Scroll to top"
    >
       <FiArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
