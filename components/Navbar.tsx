"use client";
import { useState } from "react";
import { NAVLINKS, SOCIALLINKS } from "../data";
import styles from "../styles/modules/navbar.module.css";
import NavbarLinks from "./widgets/NavbarLinks";
import Link from "next/link";
import NavbarSocials from "./widgets/NavbarSocials";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/#home">
            SaadaX <span className={styles.navbarLogoHighlight}>Dev</span>
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
    </nav>
  );
};

export default Navbar;
