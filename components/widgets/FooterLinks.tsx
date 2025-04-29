import React from "react";
import NavLinks from "./NavLinks";

interface FooterLinksProps {
  styles: any;
  NAVLINKS: Array<{ href: string; label: string; icon?: React.ReactNode }>;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ styles, NAVLINKS }) => {
  return (
    <div className={styles.navLinks}>
      {NAVLINKS.map((link, idx) => (
        <NavLinks key={idx} href={link.href} label={link.label} icon={link.icon} />
      ))}
    </div>
  );
};

export default FooterLinks; 