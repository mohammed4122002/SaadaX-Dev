import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "../styles/modules/footer.module.css";
import Link from "next/link";
import Button from "./ui/Button";

import SocialIcons from "./widgets/SocialIcons";
import { ISocialLink } from "@/types";
import { NAVLINKS, SOCIALLINKS } from "@/data";
import NavLinks from "./widgets/NavLinks";
import FooterSocials from "./widgets/FooterSocials";
import FooterLinks from "./widgets/FooterLinks";
import FooterNewsletter from "./widgets/FooterNewsletter";

const Footer = () => {
  const RenderSocialLink = SOCIALLINKS.map((social: ISocialLink, idx) => (
    <SocialIcons
      key={idx}
      href={social.href}
      icon={social.icon}
      className={styles.socialLink}
    />
  ));

  const RenderNavLink = NAVLINKS.map((link, idx) => (
    <NavLinks key={idx} href={link.href} label={link.label} icon={link.icon} />
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.title}>Crafting Excellence</h3>
          <p className={styles.description}>
            Transforming ideas into exceptional digital experiences with
            cutting-edge technology and artistic vision.
          </p>
          <FooterSocials styles={styles} SOCIALLINKS={SOCIALLINKS} />
        </div>

      
        <div className={styles.section}>
          <h3 className={styles.title}>Stay Updated</h3>
          <FooterNewsletter styles={styles} />
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2024 Mohamed. All rights reserved</p>
        <div className={styles.legalLinks}>
          <Link href="#">Privacy Policy |</Link>
          <Link href="#">| Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
