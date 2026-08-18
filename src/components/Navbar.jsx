/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constans";
import { useLanguage } from "../context/LanguageContext";
import { logo1, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const currentNavLinks = navLinks[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo1} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Hisu &nbsp;
            <span className="sm:block hidden"> | Fresher Developer </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {currentNavLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="flex gap-2 text-white font-bold text-[18px] ml-4">
            <button 
              onClick={() => setLanguage('vi')} 
              className={language === 'vi' ? 'text-white' : 'text-secondary'}
            >
              VI
            </button>
            <span className="text-secondary">|</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={language === 'en' ? 'text-white' : 'text-secondary'}
            >
              EN
            </button>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {currentNavLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="flex gap-2 font-poppins font-medium cursor-pointer text-[16px] mt-2">
                <button 
                  onClick={() => { setLanguage('vi'); setToggle(!toggle); }} 
                  className={language === 'vi' ? 'text-white' : 'text-secondary'}
                >
                  VI
                </button>
                <span className="text-secondary">|</span>
                <button 
                  onClick={() => { setLanguage('en'); setToggle(!toggle); }} 
                  className={language === 'en' ? 'text-white' : 'text-secondary'}
                >
                  EN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
