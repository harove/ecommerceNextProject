"use client";
import React, { useState } from "react";
import MenuContentList from "./MenuContentList";
import Image from "next/image";

const Menu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div onClick={handleOpen}>
      <Image src="/icons8-hamburger-menu-50.png" alt="menu-logo" height={40} width={40}/>
      <MenuContentList open={open} handleClose={handleClose} />
    </div>
  );
};

export default Menu;
