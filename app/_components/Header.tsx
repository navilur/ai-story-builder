"use client";

import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

function Header() {
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create Story",
      path: "create-story",
    },
    {
      name: "Explore Stories",
      path: "explore",
    },
    {
      name: "Contact Us",
      path: "contact-us",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
          <h2 className="font-bold text-2xl text-primary ml-3">Kids Story</h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden sm:flex">
        {menu.map((item, index) => (
          <NavbarItem
            key={index}
            className="text-xl text-primary font-medium hover:underline mx-2">
            <Link href={item.path}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <Button color="primary">Get Started</Button> */}
        <Link href={"/create-story"}>
          <Button color="primary">Create Story</Button>
        </Link>
      </NavbarContent>
      <NavbarMenu>
        {menu.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.path}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
