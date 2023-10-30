import React, { useState, Fragment } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const [nav, setNav] = useState(false);
  const { navigation, company, mainHero } = config;
  const { name } = company;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 z-50"
    >
      <div className="topbar m-auto flex justify-between items-center px-4 py-2 shadow-md">
        <Link to="/">
          <h1 className="text-2xl text-white">
            {name}
          </h1>
        </Link>
        <ul className="hidden md:flex">
          {navigation.map((item) => (
            <li className='px-4 flex items-center' key={item.name}>
              <Link
                spy={true}
                active="active"
                smooth={true}
                duration={100}
                to={item.href}
                offset={-50}
                className={`text-white cursor-pointer hover:no-underline text-xl`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className='px-4'>
            <button
              className={`bg-color-green rounded-full text-white px-5 py-2 shine shadow-md`}
            >
              お部屋を送る
            </button>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block md:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className={`text-white`} />
          ) : (
            <AiOutlineMenu size={20} className={`text-white`} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={"md:hidden absolute left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-color-primary text-center ease-in duration-500 pb-10 " + (nav ? "top-0 overflow-auto" : "top-[-100vh] overflow-hidden")}
        >
          <div className={`text-left text-white px-5 py-5 text-2xl`}>{name}</div>
          <ul className={`text-white`}>
            {navigation.map((item) => (
              <Link
                spy={true}
                active="active"
                smooth={true}
                duration={100}
                to={item.href}
                offset={-50}
                key={item.name}
                className={`cursor-pointer hover:no-underline text-xl font-bold`}
              >
                <li className='hover:text-black flex items-center p-5 justify-center hover-header-menu-item' onClick={handleNav}>
                    {item.mobile_name}
                </li>
              </Link>
            ))}
            <li className={`items-center p-5 justify-center`}>
              <a href='/'>
                <button className={`bg-color-green font-bold text-2xl rounded-full shine shadow-md px-6 py-3`}>{mainHero.sendBtnTitle}</button>
              </a>
            </li>
            <li className={`items-center px-7 justify-center text-black md:`} onClick={handleNav}>
              <div className={`text-xl px-8 py-4 shadow-md rounded-lg bg-color-skin flex flex-col gap-y-5 w-full`}>
                <div className={`flex sm:gap-x-12 gap-x-3`}>
                  <div className='text-right w-2/5'>対応時間</div>
                  <div className='text-left w-3/5 font-bold'>10:00〜19:00</div>
                </div>
                <div className={`flex sm:gap-x-12 gap-x-3`}>
                  <div className='text-right w-2/5'>営業日</div>
                  <div className='text-left w-3/5 font-bold'>水曜定休</div>
                </div>
              </div>
            </li>
            <li className={`items-center p-3 pt-5`}>
              <a className={`text-xl cursor-pointer border-b-2 border-white`} href='/terms'>​利用規約</a>
            </li>
            <li className={`items-center p-3`}>
              <a className={`text-xl cursor-pointer border-b-2 border-white`} href='/privacypolicy'>​プライバシーポリシー​</a>
            </li>
            <li className={`items-center p-3`}>
              <a className={`text-xl cursor-pointer border-b-2 border-white`} href='/brokerage-fee'>​仲介手数料について</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
