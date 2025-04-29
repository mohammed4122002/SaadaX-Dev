"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NAVLINKS, SOCIALLINKS } from "../data";
import styles from "../styles/modules/navbar.module.css";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import NavbarLinks from "./widgets/NavbarLinks";
import Link from "next/link";
import NavbarSocials from "./widgets/NavbarSocials";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.nav className={styles.navbar} initial="hidden" animate="visible" >
      <div className={styles.container}>
        <motion.div className={styles.logo} variants={slideInFromLeft(0.1)}>
          <Link href="/#home">
            SaadaX <span className={styles.navbarLogoHighlight}>Dev</span>
          </Link>
        </motion.div>

        <motion.div className={styles.desktopMenu} variants={slideInFromTop}>
          <NavbarLinks
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            styles={styles}
            NAVLINKS={NAVLINKS}
          />
          <div className={styles.socials}>
            <NavbarSocials styles={styles} SOCIALLINKS={SOCIALLINKS} />
          </div>
        </motion.div>

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
                <NavbarLinks
                  activeLink={activeLink}
                  setActiveLink={setActiveLink}
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  styles={styles}
                  NAVLINKS={NAVLINKS}
                />
                <div className={styles.socials}>
                  <NavbarSocials styles={styles} SOCIALLINKS={SOCIALLINKS} />
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
