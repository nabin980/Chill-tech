import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-custom-gradient lg:backdrop-blur-sm ${
        openNavigation
          ? "bg-custom-gradient"
          : "bg-custom-gradient backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="chill-tech" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[8rem] left-0 right-0 bottom-0   lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-custom-color-w transition-colors hover:text-custom-color-a ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-lg lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-custom-color-a"
                    : "lg:text-custom-color"
                } lg:leading-5 lg:hover:text-custom-color-a xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu  />
        </nav>
        {/* 
        <a
          href="#signup"
          className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
        >
          New account
        </a> */}
        <Button className="hidden lg:flex" href="mailto:techwings01@gmail.com">
          Contact Us
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
