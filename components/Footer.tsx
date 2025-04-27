import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "../styles/modules/footer.module.css";
import Link from "next/link";
import Button from "./common/Button";

import SocialIcons from "./sub/SocialIcons";
import { ISocialLink } from "@/interfaces";
import { NAVLINKS, SOCIALLINKS } from "@/data";
import NavLinks from "./sub/NavLinks";
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
          <div className={styles.socials}>{RenderSocialLink}</div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Navigation</h3>
          <div className={styles.navLinks}>{RenderNavLink}</div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Stay Updated</h3>
          <form className={styles.newsletter}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <Button>Subscribe</Button>
          </form>
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
