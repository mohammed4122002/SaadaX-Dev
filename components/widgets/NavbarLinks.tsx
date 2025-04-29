import React from "react";
import NavLinks from "./NavLinks";

interface NavbarLinksProps {
  activeLink: string;
  setActiveLink: (href: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  styles: any;
  NAVLINKS: Array<{ href: string; label: string; icon?: React.ReactNode }>;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({
  activeLink,
  setActiveLink,
  isMenuOpen,
  setIsMenuOpen,
  styles,
  NAVLINKS,
}) => {
  return (
    <>
      {NAVLINKS.map((link, idx) => (
        <NavLinks
          key={idx}
          href={link.href}
          label={link.label}
          icon={link.icon}
          className={`${styles.navLink} ${activeLink === link.href ? styles.activeLink : ""}`}
          onClick={() => {
            setActiveLink(link.href);
            setIsMenuOpen(false);
          }}
        />
      ))}
    </>
  );
};

export default NavbarLinks; 