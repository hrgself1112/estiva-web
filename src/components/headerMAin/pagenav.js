"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./navPages.module.css";
import { LuArrowUpRightFromCircle, LuPhoneCall } from "react-icons/lu";

import React, { useState, useEffect } from "react";
import { mobile } from "./utilities/mobile";

import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
const PageNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the threshold as needed
      setIsSticky(scrollPosition > 100);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* {/ <!-- ========== HEADER ========== --> /} */}
      <section
        className={`relative z-50 lg:px-20 md:px-12 max-sm:px-6 ${
          isSticky ? styles.stickyNavbar : styles.normalNavbar
        }`}
      >
        <header className={`container mx-auto  estiva-nav`}>
          <nav className="flex flex-wrap">
            <div
              className="w-[25%] max-lg:w-[90%] items-center max-sm:w-[90%] max-lg:py-2 pt-4"
              id="brand"
            >
              <Link href="/">
                <Image
                  className="max-w-[13rem]"
                  priority
                  src={isSticky ? "/estiva.png" : "/estiva.png"}
                  alt="EstivaSoftech Logo"
                  width={250}
                  height={200}
                />
              </Link>
            </div>
            <ul className="flex w-[50%] justify-end font-semibold text-base py-6 max-lg:hidden">
              <li>
                <Link
                  href="/"
                  className="py-7 uppercase px-4 estiva_nav hover:shadow-lg transition ease-in-out  duration-300 shadow-blue-500/50"
                >
                  <span>Home </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/estivasoftech-history"
                  className="py-7 uppercase px-4 estiva_nav hover:shadow-lg transition ease-in-out  duration-300 shadow-blue-500/50"
                >
                  <span>About</span>
                </Link>
              </li>
              <li className="nav-item">
                <span className="py-7  px-4  uppercase cursor-pointer group estiva_nav hover:shadow-lg transition ease-in-out  duration-300 shadow-blue-500/50">
                  <span>Solutions</span>
                </span>

                <div className="estiva_submenu absolute w-full bg-white z-20 left-0 lg:px-20 md:px-12 max-sm:px-6 top-16">
                  <div className="container mx-auto flex flex-wrap">
                    <ul className="gap-6 py-9 w-[75%] pr-[2%] flex">
                      <div className="50%">
                        <li
                          className={`estiva_nav w-[100%] flex gap-5  p-3   group hover:bg-slate-100 rounded-lg`}
                        >
                          <Image
                            src="/icons/middle_icon/ads.png"
                            width={52}
                            height={52}
                            alt="digital marketing"
                            className="group-hover:scale-105 transition ease-in-out  duration-300"
                          />
                          <Link href="/digital-marketing-services ">
                            <span>Digital Marketing</span>
                            <p className="text-sm ">
                              Build strategic campaigns that speak louder than
                              pixels.
                            </p>
                          </Link>
                        </li>
                        <li
                          className={`estiva_nav w-[100%] flex gap-5 group hover:bg-slate-100 rounded-lg  p-3`}
                        >
                          <Image
                            src="/icons/middle_icon/agile2.png"
                            width={52}
                            height={52}
                            alt="web development"
                            className="group-hover:scale-105 transition ease-in-out  duration-300"
                          />
                          <Link href="/web-development-services">
                            <span>Web Development</span>
                            <p className="text-sm ">
                              Integrate lasting online experience with
                              innovative codes & user-focused design.
                            </p>
                          </Link>
                        </li>
                        <li
                          className={`estiva_nav w-[100%] flex gap-5  group hover:bg-slate-100 rounded-lg p-3`}
                        >
                          <Image
                            src="/icons/middle_icon/ui.png"
                            width={52}
                            height={52}
                            alt="ui ux desing"
                            className="group-hover:scale-105 transition ease-in-out  duration-300"
                          />
                          <Link href="/web-design-services">
                            <span>Web & UI/UX</span>
                            <p className="text-sm ">
                              Turn ideas into visually stunning realities– where
                              creativity meets purpose.
                            </p>
                          </Link>
                        </li>
                      </div>
                      <div className="50%">
                        <li
                          className={`estiva_nav w-[100%] flex gap-5 group hover:bg-slate-100 rounded-lg  p-3`}
                        >
                          <Image
                            src="/icons/middle_icon/endtoend.png"
                            width={52}
                            height={52}
                            alt="software development"
                            className="group-hover:scale-105 transition ease-in-out  duration-300"
                          />
                          <Link href="/software-development-services">
                            <span>Software Development</span>
                            <p className="text-sm ">
                              Turn complexity into responsive solutions with
                              coding precision.
                            </p>
                          </Link>
                        </li>
                        <li
                          className={`estiva_nav w-[100%] flex gap-5 group hover:bg-slate-100 rounded-lg  p-3`}
                        >
                          <Image
                            src="/icons/middle_icon/timly.png"
                            width={52}
                            height={52}
                            alt="multimedia"
                            className="group-hover:scale-105 transition ease-in-out  duration-300"
                          />
                          <Link href="/multimedia-presentation-services">
                            <span>Multi-Media</span>
                            <p className="text-sm ">
                              Bringing stories to life with a symphony of
                              interactivity
                            </p>
                          </Link>
                        </li>
                      </div>
                    </ul>
                    <div className="estivaTagline w-[25%]">
                      <div className="experties mt-12">
                        <ul className="flex flex-col gap-5 h-full text-right font-bold">
                          <span className="flex gap-2 justify-end">
                            <li>12+ Years Experience</li>
                            <LuArrowUpRightFromCircle />
                          </span>
                          <span className="flex gap-2 justify-end">
                            <li>8+ Countries Served</li>
                            <LuArrowUpRightFromCircle />
                          </span>
                          <span className="flex gap-2 justify-end">
                            <li>700+ Satisfied Client</li>
                            <LuArrowUpRightFromCircle />
                          </span>
                          <span className="flex gap-2 justify-end">
                            <li>1000+ Products Delivered</li>
                            <LuArrowUpRightFromCircle />
                          </span>
                          <span className="flex gap-2 justify-end">
                            <li>12+ Years Experience</li>
                            <LuArrowUpRightFromCircle />
                          </span>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="https://estivasoftech.com/blog/"
                  className="py-7 uppercase px-4 estiva_nav hover:shadow-lg transition ease-in-out  duration-300 shadow-blue-500/50"
                >
                  <span>blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-estivasoftech"
                  className="py-7 uppercase px-4 estiva_nav hover:shadow-lg transition ease-in-out  duration-300 shadow-blue-500/50"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>

            <div className="callus w-[25%] max-lg:w-[60%]  flex gap-5 items-center justify-end max-lg:justify-end max-lg:hidden max-lg:pr-4">
              <span className="text-xl font-bold border-r-2 border-gray-700 px-4 leading-6">
                <Link href="tel:+919990140888">
                  <LuPhoneCall className="text-[28px] mt-2" />
                </Link>
              </span>
              <span className="font-normal text-sm">
                <Link href="tel:+919990140888">
                  Call & chat us today! <br />
                  <span className="font-bold text-base">+91-9990 140 888</span>
                </Link>
              </span>
            </div>

            <div className="mobile-opne hidden max-lg:block max-lg:w-[10%] items-center max-sm:pt-2 min-lg:pt-2 max-sm:w-[10%] max-sm:justify-end">
              <RxHamburgerMenu
                onClick={mobile}
                className="estiva_close active"
                id="estiva_burgerid"
              />
              <RxCross1
                onClick={mobile}
                id="estiva_burgeridw"
                className="estiva_close"
              />
            </div>
          </nav>
        </header>

        {/* {/ mobile menu start /} */}

        <div
          id="sidebar"
          className={` ${
            isSticky ? styles.sidePagesticky : styles.sidePageNormal
          }`}
        >
          <nav className="flex flex-wrap flex-col ">
            <ul className="flex font-semibold flex-col gap-6">
              <li className="estiva_nav ">
                <Link href="/" className="py-7  px-4 ">
                  Home
                </Link>
              </li>
              <li className="estiva_nav ">
                <Link href="/estivasoftech-history" className="py-7  px-4 ">
                  <span>About</span>
                </Link>
              </li>
              <li className="nav-item_mobile estiva_nav ">
                <span className="py-7  px-4 relative cursor-pointer">
                  <span>Solutions</span>
                  <span className="absolute right-0 text-lg  top-8">
                    <IoIosArrowDown />
                  </span>
                </span>

                <div className="estiva_submenu_mobile relative z-10 overflow-y-auto ">
                  <ul className="gap-2 py-9 w-full flex flex-col flex-wrap px-4">
                    <li className={`estiva_nav flex gap-5   p-3`}>
                      <Image
                        src="/icons/middle_icon/ads.png"
                        width={42}
                        height={30}
                        alt="digital marketing"
                        className="group-hover:scale-105 transition ease-in-out  duration-300"
                      />
                      <Link href="/digital-marketing-services ">
                        <span>Digital Marketing</span>
                        <p className="text-sm hidden">
                          Build strategic campaigns that speak louder than
                          pixels.
                        </p>
                      </Link>
                    </li>
                    <li className={`estiva_nav  flex gap-5  p-3`}>
                      <Image
                        src="/icons/middle_icon/agile2.png"
                        width={42}
                        height={30}
                        alt="web development"
                        className="group-hover:scale-105 transition ease-in-out  duration-300"
                      />
                      <Link href="/web-development-services">
                        <span>Web Development</span>
                        <p className="text-sm hidden">
                          Integrate lasting online experience with innovative
                          codes & user-focused design.
                        </p>
                      </Link>
                    </li>
                    <li className={`estiva_nav flex gap-5  p-3`}>
                      <Image
                        src="/icons/middle_icon/ui.png"
                        width={42}
                        height={30}
                        alt="ui ux desing"
                        className="group-hover:scale-105 transition ease-in-out  duration-300"
                      />
                      <Link href="/web-design-services">
                        <span>Web & UI/UX</span>
                        <p className="text-sm hidden">
                          Turn ideas into visually stunning realities– where
                          creativity meets purpose.
                        </p>
                      </Link>
                    </li>

                    <li className={`estiva_nav  flex gap-5  p-3`}>
                      <Image
                        src="/icons/middle_icon/endtoend.png"
                        width={42}
                        height={30}
                        alt="software development"
                        className="group-hover:scale-105 transition ease-in-out  duration-300"
                      />
                      <Link href="/software-development-services">
                        <span>Software Development</span>
                        <p className="text-sm hidden">
                          Turn complexity into responsive solutions with coding
                          precision.
                        </p>
                      </Link>
                    </li>
                    <li className={`estiva_nav flex gap-5  p-3`}>
                      <Image
                        src="/icons/middle_icon/timly.png"
                        width={42}
                        height={30}
                        alt="multimedia"
                        className="group-hover:scale-105 transition ease-in-out  duration-300"
                      />
                      <Link href="/multimedia-presentation-services">
                        <span>Multi-Media</span>
                        <p className="text-sm hidden">
                          Bringing stories to life with a symphony of
                          interactivity
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="estiva_nav ">
                <Link
                  href="https://www.estivasoftech.com/blog/"
                  className="py-7  px-4 "
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li className="estiva_nav ">
                <Link href="/contact-estivasoftech" className="py-7  px-4 ">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* {/ <!-- ========== END HEADER ========== --> /} */}
    </>
  );
};

export default PageNav;
