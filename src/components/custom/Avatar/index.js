import React from "react";
import { AvatarContainer, AvatarImage } from "./Elements";
const Avatar = ({ src = "", alt = "", isOpen, onClick }) => {
  return (
    <AvatarContainer onClick={onClick}>
      <AvatarImage src={src} alt={alt} />
    </AvatarContainer>
  );
};

export default Avatar;
