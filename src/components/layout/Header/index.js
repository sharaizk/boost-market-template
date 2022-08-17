import React, { useState } from "react";
import MiniHeader from "./MiniHeader";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <MiniHeader />
      <NavBar toggle={toggle} isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
    </>
  );
};

export default Header;
