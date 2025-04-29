import React from "react";
import Button from "../ui/Button";

interface FooterNewsletterProps {
  styles: any;
}

const FooterNewsletter: React.FC<FooterNewsletterProps> = ({ styles }) => {
  return (
    <form className={styles.newsletter}>
      <input
        type="email"
        placeholder="Enter your email"
        className={styles.input}
      />
      <Button>Subscribe</Button>
    </form>
  );
};

export default FooterNewsletter; 