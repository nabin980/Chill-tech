import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import image1 from "../assets/location.svg"
import image2 from "../assets/phone.svg"

const Footer = () => {
  return (
    <>
    <Section crosses className="!px-0 !py-10 lg:bg-custom-gradient lg:backdrop-blur-sm   ">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-black lg:block flex flex-col gap-2">
          <div>
            © {new Date().getFullYear()} Chill Tech. All rights reserved.
          </div>
          <div className="flex gap-2"><img src={image2} alt="" width={12}/>+977-9842806811</div>
          <div className="flex gap-2"><img src={image1} alt="" width={12}/>Chabhil, Kathmandu</div>
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-sky-400 rounded-full transition-colors hover:bg-sky-200"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      
    </Section>
    <iframe src="https://embeds.beehiiv.com/bc2185fb-e52b-4bde-8e41-27c422492ad1" data-test-id="beehiiv-embed" width="100%" height="320" frameborder="0" scrolling="no" 
   ></iframe>

</>
  );
};

export default Footer;
