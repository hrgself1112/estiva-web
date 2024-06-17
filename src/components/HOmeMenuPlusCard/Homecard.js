import { BTnAnimationOutline } from "@/components/buttonMain/buttonfill";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";

export const HomeCards = ({ items, lidata }) => {
    return (
      <>
        {items.map((items, i) => {
          let { heading, dec, urlbt, url, letme } = items;

          return (
            <div
              key={i}
              className="lg:p-4 max-sm:py-4 glasseffect max-sm:mb-5 sm:py-4"
            >
              <div className="flex flex-wrap">
                <div  className="w-[30%] max-sm:hidden max-xl:hidden max-lg:block mt-3">
                  <h3 className=" font-semibold text-[1.4rem] px-4 text-gray-400">
                    Related Services
                  </h3>
                  <div className="mt-1">
                    <ul className=" leading-8 text-gray-400 text-[16px]">
                      {letme?.map((items, index) => {
                        return (
                          <>
                            <li  className="slide-right flex group" key={index}>
                            <i className="text-xs p-2  group-hover:text-cyan-200"><GiCheckMark /></i>
                            <Link href={items.url} className=" group-hover:text-cyan-200">{items.sub}</Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="w-[70%] max-lg:mx-auto max-xl:w-full max-lg:w-[70%] max-lg:px-3 max-sm:w-full max-sm:px-6">
                  <i className="flex">
                <h3 className="capitalize text-[1.8rem] font-semibold w-[70%] mt-4 mb-3 spanGlowerone">
                     {heading}
                  </h3>
                  </i>
                  <p className="text-gray-300">
                    {dec}
                  </p>

                  <div className="mt-5">

                  <Link href={urlbt}>

                   <BTnAnimationOutline />
                  </Link>


                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };