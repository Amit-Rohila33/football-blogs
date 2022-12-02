import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <nav className="flex items-center justify-between py-3">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/football.png" height={35} width={40} alt="Image"/>
            <span className="font-bold ml-2 text-primary">Football Blogs</span>
          </div>
        </Link>
        <ul className="flex items-center">
          <li className="mr-6 font-medium">
            <a href="#">Products</a>
          </li>
          <li className="mr-6 font-medium">
            <a href="#">Pricing</a>
          </li>
          <li className="mr-6 font-medium">
            <a href="#">Docs</a>
          </li>
          <li className="mr-6 font-medium">
            <a href="#">Company</a>
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="mb-4 mr-4">
            <IconButton
              mt={4}
              aria-label="Toggle Mode"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </li>
          <li className="mr-6 font-medium ">
            <a href="#" className="hover:text-gray-400">
              Log in
            </a>
          </li>
          <li className="font-medium text-gray-600">
            <a
              href="#"
              className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primarry-dark transition-all"
            >
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
