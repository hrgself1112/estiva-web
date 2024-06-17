/* eslint-disable react/no-unescaped-entities */


import { BtnAnimationCircle } from "@/components/buttonMain/buttonfill";
import Link from "next/link";

const HeroSectionPages = ({ items }) => {
  return (
    <>
      <section className="lg:p-[4rem] resbro estiva_hero_bg overflow-x-hidden overflow-y-hidden md:p-12  relative p-6 ">
        {items.map((items, i) => {
          let { heading, dec, imgpath } = items;
          return (
            <div key={i} className="container mx-auto">
              <div className="flex ">
                <div className="lg:w-1/2 md:w-full estva_hero_bg">
                  <div className="max-md:px-0 mt-[2rem] max-lg:mt-[1rem] max-sm:mb-[2rem] max-md:mt-[4rem] lg:pr-4 max-sm:mt-[80px]">
                    <h1 className="estiva_hero_gradient  leading-[3rem] font-bold max-sm:leading-[36px] max-sm:text-[2.0rem]">
                      {heading}
                    </h1>
                    <p
                      className="text-[16px] mt-6 max-md:mt-10"
                      dangerouslySetInnerHTML={{ __html: dec }}
                    ></p>
                    <div className="mt-20 max-sm:pb-8 max-lg:pb-20 pb-7">
                      <Link aria-label="contact" href="/contact-estivasoftech">
                        <BtnAnimationCircle />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="lg:w-1/2  absolute top-0 right-0 hidden lg:block bg-image "
                style={{ backgroundImage: `url('${imgpath}')` }}
              ></div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HeroSectionPages;
