/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidecart from "./side-cart";
import Middlecart from "./middle-cart";
import { DemoCarousel } from "./carousel";
import { data } from "./data";

const HomeIndustry = () => {
  const [filterredData, setfilterredData] = useState([]); 
  const [activeButton, setActiveButton] = useState(null);

  const classActiveRef = useRef();

  const handleFilter = (e) => {
    let value = e.target.id;
    const filtered = data.filter((item) => item.id == value);
    setfilterredData(filtered);
    setActiveButton(e.target.id);
  };

  const buttonIsActive = (buttonId) => {
    return activeButton === buttonId ? "RedishAactive" : "";
  };

  useEffect(() => {
    let filter = data.filter((items) => items.id == "toFilterEducation");
    setfilterredData(filter);
    setActiveButton("toFilterEducation");
    buttonIsActive();
  }, []);

  return (
    <>
    <section className=" bg-[url('/bg/estiva-mlm-bg-comps.webp')] bg-cover bg-center">
      <div className="container mx-auto lg:p-20 md:p-12 p-12  max-sm:p-6 sm:p-6">
            <div className="w-full text-center">
              <h2>Strategic Innovation for Diverse Industries</h2>
              <h3>A Holistic Approach to Digital Transformation</h3>
              <p>Discover unparalleled industry elevation with Estivasoftech, where our expertise in digital marketing, UI/UX design, mobile applications, web, and software development spans a diverse spectrum of sectors. We go beyond conventional solutions, empowering businesses with meticulously crafted and custom-tailored development and digital marketing strategies. At Estivasoftech, our commitment is to understand the unique needs and goals of each industry, ensuring our clients embark on a transformative journey towards success. With a holistic approach to digital transformation,  we don't just offer services; we craft digital experiences that elevate industries, ensuring our clients thrive in the dynamic and competitive digital realm.</p>
            </div>
            </div>

      <section className="lg:p-20 md:p-12 p-12   max-sm:p-6 sm:p-6    relative z-30"
      >
        <div className="container mx-auto ">
          <div className="flex rounded-2xl flex-wrap overflow-hidden application_before application_after ">

            <div className="w-[12%]  max-lg:w-[15%] max-sm:w-[22%] ">
              <Sidecart
                ref={classActiveRef}
                activeButton={buttonIsActive}
                onClick={(e) => handleFilter(e)}
              />
            </div>

            <div className="w-[47%] flex justify-center max-lg:flex-col px-4 items-center bg-white application_shadow max-lg:w-[85%] max-lg:z-50 max-sm:w-[78%] relative left-1 max-sm:left-2">
              {filterredData.map((items, index) => {
                return (
                  <Middlecart
                    key={index}
                    title={items.title}
                    description={items.description}
                  />
                );
              })}
            </div>

            <div className="w-[45%]  slider-bg flex justify-center items-center max-lg:hidden">
              <DemoCarousel
                data={filterredData[0] && filterredData[0].images}
              />
            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export default HomeIndustry;
