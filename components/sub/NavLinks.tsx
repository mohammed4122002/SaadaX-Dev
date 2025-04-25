import { InavLink } from "../../interfaces";

const NavLinks = ({ href, label, icon, className }: InavLink) => {
  return (
    <a className={className} href={href}>
      {icon}&nbsp;{label}
    </a>
  );
};

export default NavLinks;
