import Link from "next/link";
import { InavLink } from "../../interfaces";

const NavLinks = ({ href, label, icon, className, onClick  }: InavLink & {onClick? :()=>void}) => {
  return (
    <Link  className={className} href={href} onClick={onClick}>
      {icon}&nbsp;{label}
    </Link>
  
  );
};

export default NavLinks;
