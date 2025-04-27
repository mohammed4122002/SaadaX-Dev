import { ISocialLink } from "../../interfaces";
const SocialIcons = ({ href, icon, className }: ISocialLink) => {
  return (
    <a href={href} target="_blank" className={className}>
      {icon}
    </a>
  );
};

export default SocialIcons;
