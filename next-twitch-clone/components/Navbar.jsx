import Image from "next/image";
import NextLink from "next/link";
import React, { Fragment, useState } from "react";
import Logo from "../public/assets/twitch (1).png";
import { Menu, Transition } from "@headlessui/react";
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {useSession, signIn, signOut} from 'next-auth/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const {data: session } = useSession();

  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10">
      {/*Left SIde */}
      <div className="flex frow items-center justify-start">
        <NextLink href="/" passHref className="flex">
          <Image
            src={Logo}
            alt="/"
            width="36"
            height="36"
            className="cursor-pointer z-10"
          />
        </NextLink>
        <p className="p-4">Browse</p>
        <div className="p-4">
          <Menu>
            <Menu.Button>
              <BsThreeDotsVertical size={20} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-opacity-5 focus:outline-none"
                style={{
                  top: "calc(100% + 0.5rem)",
                  transform: "translateY(0.5rem)",
                }}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"} block`}
                      href="/account-settings"
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"} block`}
                      href="/account-settings"
                    >
                      Documentation
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/*Middle  */}
      <div className="hidden md:flex grow-[2] items-center justify-center">
        <div className="bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl">
          <div>
            <input
              type="text"
              className="bg-transparent border-none text-white focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div>
            <BsSearch />
          </div>
        </div>
      </div>
      {/*Right SIde */}
      <div className="hidden md:flex grow items-center justify-end">
       {session ? (<div className="flex items-center">
<Link href='/account'>
  <div>
    <p className="pr-4 cursor-pointer">
      Welcome, {session.user.name}
    </p>
  </div>
</Link>
<Menu>
            <Menu.Button>
              <Image src={session.user.image} className='rounded-full' width='45' height='45' />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-opacity-5 focus:outline-none"
                style={{
                  top: "calc(100% + 0.5rem)",
                  transform: "translateY(0.5rem)",
                }}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"} block`}
                      href="/account"
                    >
                      Account 
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p
                    onClick={() => signOut()}
                      className={`${active && "bg-blue-500"} block`}
                      
                    >
                      Logout
                    </p>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

       </div>
       ) 
       : (
        <div className="flex items-center">
        <Link href="/account">
          <button className="px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2">
            Account
          </button>
        </Link>
        <BsPerson size={30} />
      </div>
       )}
      </div>
      {/* Hamburger Menu  */}
      <div
        onClick={handleNav}
        className=" block  md:hidden z-10 cursor-pointer absolute  right-0 pr-2"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/*Mobile Menu*/}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
            : "fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="text-center">
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Live Channeks</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Top Categories</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
