"use client";
import Image from "next/image";

import { useEffect } from "react";
import { PiUsersThreeBold } from "react-icons/pi";
export const SimpleAccordian = (items) => {
  const { Faq } = items;

  useEffect(() => {
    const accordionItemHeaders = document.querySelectorAll(
      ".accordionitemheader"
    );

    accordionItemHeaders.forEach((accordionItemHeader) => {
      accordionItemHeader.addEventListener("click", (event) => {
        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(
          ".accordionitemheader.active"
        );
        if (
          currentlyActiveAccordionItemHeader &&
          currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
          currentlyActiveAccordionItemHeader.classList.toggle("active");
          currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
          accordionItemBody.style.maxHeight =
            accordionItemBody.scrollHeight + "px";
        } else {
          accordionItemBody.style.maxHeight = 0;
        }
      });
    });
  }, []);

  return (
    <>
      <section className="lg:p-[4rem] resbro estiva_cate_service overflow-x-hidden overflow-y-hidden md:p-12 sm:p-12 relative p-12   h-[600px]">
        <div className="container mx-auto">
          <div className="flex  ">
            <div className="lg:md:w-7/12 max-sm:w-full ">
              <h2>FAQs</h2>
              <div className={`accordion `}>
                {Faq.map((items) => {
                  let { question, answer, url } = items;
                  return (
                    <>
                      <div className={`accordionitem  `}>
                        <div className={`accordionitemheader text-[#3b2a82]`}>
                          {question}
                        </div>
                        <div className={`accordionitembody`}>
                          <div className={`accordionitembodycontent`}>
                            {answer}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="lg:md:w-5/12    max-sm:hidden max-lg:hidden  ">
              <div className="borderrOne py-[1.5rem] pl-[13px] bg-[white] h-[550px] mx-5">
                <div className="flex my-4 ml-2" style={{ gap: "6px" }}>
                  <div className="iconsMaondov" />
                  <div className="iconsMaondov" />
                  <div className="iconsMaondov" />
                </div>

                <div className=" bg-[white] h-[456px] relative borderrThree  ">
                  <div className=" absolute shine  ">
                    <Image
                      alt=""
                      src="/aboutbgfaq.jpg"
                      width={500}
                      height={400}
                      className=" rounded-lg "
                    />
                  </div>
                  <div className="absolute top-80  left-[-5rem]">
                    <div className="flex items-center px-4 border-2 border-white rounded-lg  py-7 gap-4 bg-bg-estiva-footer">
                      <i className="text-[32px] text-white pl-3">
                        <PiUsersThreeBold />
                      </i>
                      <span className=" text-white ">
                        Transforming Complexities into Seamless Innovations
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
