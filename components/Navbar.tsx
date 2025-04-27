"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NAVLINKS, SOCIALLINKS } from "../data";
import styles from "../styles/modules/navbar.module.css";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import NavLinks from "./sub/NavLinks";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import SocialIcons from "./sub/SocialIcons";
import { IScialLink } from "@/interfaces";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const RenderNavLink = NAVLINKS.map((link, idx) => (
    <NavLinks
      key={idx}
      href={link.href}
      label={link.label}
      icon={link.icon}
      className={`${styles.navLink} ${
        activeLink === link.href ? styles.activeLink : ""
      }`}
      onClick={() => {
        setActiveLink(link.href);
        setIsMenuOpen(false); // عشان نسكر القائمة على الموبايل
      }}
    />
  ));

  const RenderSocialLink = SOCIALLINKS.map((social: IScialLink, idx) => (
    <SocialIcons
      key={idx}
      href={social.href}
      icon={social.icon}
      className={styles.socialLink}
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
          <div className={styles.socials}>{RenderSocialLink}</div>
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
                {RenderNavLink}
                <div className={styles.socials}>{RenderSocialLink}</div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
