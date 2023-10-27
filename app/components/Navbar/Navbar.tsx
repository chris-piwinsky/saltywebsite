"use client"

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import navImage from '../../images/main.png';
import { Mail, Instagram, Facebook } from 'react-feather'; // Import Mail and Instagram icons
import styles from './Navbar.module.css';

const companyEmail = "mailto:thesaltycurmudgeons@gmail.com";
const facebookLink = "https://www.facebook.com/thesaltycurmudgeons";
const instagramLink = "https://www.instagram.com/thesaltycurmudgeons";

const Navbar: React.FC = () => {
  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };


  return (
    <header className=' bg-slate-500  w-full ease-in duration-300 fixed top-0 left-0 z-10'>
      <nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4'>
        <div>
          <Link href="./" onClick={handleSmallerScreenNavigation}>
            <span className='font-extrabold text-3x1 md:text-2x1 xl:text-3x1 uppercase'>
              <Image
                src={navImage}
                alt="Logo"
                className={styles.navbarLogo}
                width={200}
                height={100}
              />
            </span>
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <ul className='hidden md:flex uppercase font-semibold text-1x1 lg:text-[20px] text-slate-800 flex-grow justify-center'>
          <li className='mr-4 lg:mr-8 hover:text-[#ff5722]'>
            <Link href="./">Home</Link>
          </li>
          <li className='mr-4 lg:mr-8 hover:text-[#ff5722]'>
            <Link href="./about">The Curmudgeons</Link>
          </li>
        </ul>

        <div className='hidden md:flex'>
          <div className='flex'>
            <a href={companyEmail} target="_blank" rel="noopener noreferrer" className='mr-5 text-slate-800 hover:text-[#ff5722]'>
              <Mail size={25} />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className='mr-5 text-slate-800 hover:text-[#ff5722]'>
              <Facebook size={25} />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className='mr-5 text-slate-800 hover:text-[#ff5722]'>
              <Instagram size={25} />
            </a>
          </div>
        </div>

        {/* smaller screens - navigation icons */}
        <div onClick={handleSmallerScreenNavigation} className='flex md:hidden'>
          {menuIcon ?
            (<AiOutlineClose size={25} className='text-[#ff5722]' />)
            :
            (<AiOutlineMenu size={25} className='text-[ff5722]' />)
          }
        </div>

        {/* Smaller Screen navbar */}
        <div className={menuIcon ?
          'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-white ease-in duration-300'
          :
          'md:hidden absolute top-[100px] right-0 left-[-100%] flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-white ease-in duration-300'
        }>
          <div>
            <ul className='uppercase font-bold text-2xl'>
              <li onClick={handleSmallerScreenNavigation} className='py-5 hover:text-[#ff5722] cursor-pointer'>
                <Link href="./">Home</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className='py-5 hover:text-[#ff5722] cursor-pointer'>
                <Link href="./about">The Curmudgeons</Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col justify-center items-center mt-16'>
            <a href={companyEmail} target="_blank" rel="noopener noreferrer" className='py-5 hover-red-text' >
              <Mail size={25} />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className='py-5 hover-red-text'>
              <Facebook size={25} />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className='py-5 hover-red-text'>
              <Instagram size={25} />
            </a>
          </div>
        </div>


      </nav>
    </header>
  );
};

export default Navbar;
