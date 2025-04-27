
import { IScialLink } from "../../interfaces";
const SocialIcons = ({ href, icon, className }: IScialLink) => {
  return (
    <a href={href} target="_blank" className={className}>
      {icon}
    </a>
  );
};

export default SocialIcons;
