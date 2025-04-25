import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "../../styles/footer.module.css";
import Link from "next/link";
import Buttom from "../ui/Buttom";
const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.content}>

        <div className={styles.section}>
          <h3 className={styles.title}>Crafting Excellence</h3>
          <p className={styles.description}>
            Transforming ideas into exceptional digital experiences with
            cutting-edge technology and artistic vision.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>
              <FiLinkedin />
            </a>
            <a href="#" className={styles.socialLink}>
              <FiGithub />
            </a>
            <a href="#" className={styles.socialLink}>
              <FiMail />
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Navigation</h3>
          <ul className={styles.navLinks}>
            <li>
              <div>
                <Link href="#home">Home</Link>
              </div>
            </li>
            <li>
              <div>
                <Link href="#projects">Projects</Link>
              </div>
            </li>
            <li>
              <div>
                <Link href="#skills">Skills</Link>
              </div>
            </li>
            <li>
              <div>
                <Link href="#contact">Contact</Link>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
        <h3 className={styles.title}>Stay Updated</h3>
            <form className={styles.newsletter}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className={styles.input}
              />
              <Buttom>
                Subscribe
              </Buttom>
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
