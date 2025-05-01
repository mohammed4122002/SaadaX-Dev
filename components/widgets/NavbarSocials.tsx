import React from "react";
import SocialIcons from "./SocialIcons";
import { ISocialLink } from "../../types";

interface NavbarSocialsProps {
  styles: any;
  SOCIALLINKS: ISocialLink[];
}

const NavbarSocials: React.FC<NavbarSocialsProps> = ({ styles, SOCIALLINKS }) => {
  return (
    <div className={styles.socials}>
      {SOCIALLINKS.map((social, idx) => (
        <SocialIcons
          key={idx}
          href={social.href}
          icon={social.icon}
          className={styles.socialLink}
        />
      ))}
    </div>
  );
};

export default NavbarSocials; 