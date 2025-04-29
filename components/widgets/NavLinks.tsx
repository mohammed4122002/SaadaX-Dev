import React from "react";
import Link from "next/link";
import { InavLink } from "../../types";

const NavLinks = React.memo(function NavLinks({ href, label, icon, className, onClick }: InavLink & { onClick?: () => void }) {
  return (
    <Link className={className} href={href} onClick={onClick}>
      {icon}&nbsp;{label}
    </Link>
  );
});

export default NavLinks;
