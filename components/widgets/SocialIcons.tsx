import React from "react";
import { ISocialLink } from "../../types";
const SocialIcons = React.memo(function SocialIcons({ href, icon, className }: ISocialLink) {
  return (
    <a href={href} target="_blank" className={className} rel="noopener noreferrer">
      {icon}
    </a>
  );
});

export default SocialIcons;
