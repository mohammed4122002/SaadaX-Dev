// components/Navbar/Navbar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NAVLINKS, SOCIALLINKS } from "../../data";
import styles from "../../styles/navbar.module.css";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import NavLinks from "../sub/NavLinks";
import SocialIcons from "../sub/SocialIcons";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const RenderNavLink = NAVLINKS.map((link, idx) => (
    <NavLinks
      key={idx}
      href={link.href}
      label={link.label}
      icon={link.icon}
      className={styles.navLink}
    />
  ));

  return (
    <motion.nav className={styles.navbar} initial="hidden" animate="visible">
      <div className={styles.container}>
        <motion.div className={styles.logo} variants={slideInFromLeft(0.1)}>
          <Link href="#home">
            SaadaX <span className={styles.navbarLogoHighlight}>Dev</span>
          </Link>
        </motion.div>

        <motion.div className={styles.desktopMenu} variants={slideInFromTop}>
          {RenderNavLink}
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>
              <FiGithub />
            </a>
            <a href="#" className={styles.socialLink}>
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        {/* <div className={styles.mobileToggle}>
          <CiMenuFries className={styles.menuToggleIcon} onClick={toggleMenu} />
        </div>
          */}
        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {isMenuOpen && (
          <div className={styles.mobileMenuOverlay}>
            <div>
              <motion.div
                className={styles.mobileMenu}
                variants={slideInFromTop}
              >
                {RenderNavLink}
                <div className={styles.socials}>
                  <a href="#" className={styles.socialLink}>
                    <FiGithub />
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <FiLinkedin />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
