"use client";
import { useState } from "react";
import { NAVLINKS, SOCIALLINKS } from "../data";
import styles from "../styles/modules/navbar.module.css";
import NavbarLinks from "./widgets/NavbarLinks";
import Link from "next/link";
import NavbarSocials from "./widgets/NavbarSocials";
import { FiMenu, FiX } from "react-icons/fi";
import {motion} from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
    <motion.nav className={styles.navbar}
    variants={slideInFromTop}
      initial="hidden"
  animate="visible"
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/#home">
          <Image
            src="/lolol.png"
            alt="Logo"
            width={80}
            height={80}
            className={styles.logoImage}
          />
          {/*  SaadaX <span className={styles.navbarLogoHighlight}>Dev</span>*/}
          </Link>
        </div>

        <div className={styles.desktopMenu}>
          <NavbarLinks
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            styles={styles}
            NAVLINKS={NAVLINKS}
          />
          
            <NavbarSocials styles={styles} SOCIALLINKS={SOCIALLINKS} />
          
        </div>

        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {isMenuOpen && (
          <div className={styles.mobileMenuOverlay}>
            <div>
              <div className={styles.mobileMenu}>
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
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
    </header>
  );
};

export default Navbar;
