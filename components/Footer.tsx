import React from "react";
import siteMetadata from "@/data/siteMetadata";
import Github from "./social-icons/Github";
import Mail from "./social-icons/Mail";
import Linkedin from "./social-icons/Linkedin";

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center'>
      <div className='mb-3 flex justify-between space-x-4'>
        <Mail width='24' height='24' href={`mailto:${siteMetadata.email}`} />
        <Linkedin width='24' height='24' href={siteMetadata.linkedin} />
        <Github width='24' height='24' href={siteMetadata.github} />
      </div>
      <div className='mb-8 flex space-x-2 '>
        <span className='text-sm'>{siteMetadata.author}</span>
        <span className='text-sm'>{` • `}</span>
        <span className='text-sm'>{`© ${new Date().getFullYear()}`}</span>
      </div>
    </div>
  );
};

export default Footer;
