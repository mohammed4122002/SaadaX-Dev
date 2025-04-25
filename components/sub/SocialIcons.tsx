import Link from "next/link";
import { IScialLink } from "../../interfaces";
const SocialIcons = ({ href, icon, className }: IScialLink) => {
  return (
    <Link href={href} target="_blank">
      <span className={className}>{icon}</span>
    </Link>
  );
};

export default SocialIcons;
