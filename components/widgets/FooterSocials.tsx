import React from "react";
import SocialIcons from "./SocialIcons";
import { ISocialLink } from "../../types";

interface FooterSocialsProps {
  styles: any;
  SOCIALLINKS: ISocialLink[];
}

const FooterSocials: React.FC<FooterSocialsProps> = ({ styles, SOCIALLINKS }) => {
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

export default FooterSocials; 