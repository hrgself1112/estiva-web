/* eslint-disable react/no-unescaped-entities */


import styles from "./benefits.module.css";

import Image from "next/image";

import Link from "next/link";
import { BtnAnimation } from "../buttonMain/buttonfill";

const EstivaBenefits = ({ items, heads, down }) => {
  let { Imgone,res } = styles;
  return (
    <>

      <section className=" max-sm:px-1  lg:px-20 py-20 estiva_why">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-1/2 max-md:w-full max-sm:w-full  max-lg:w-full ">
              {heads.map((items, i) => {
                let {  heading, subheading } = items;
                return (
                  <div
 key={i}>
                    <h2>{heading}</h2>
                    <h3>{subheading}</h3>
                  </div>
                );
              })}

              {down.map((items, i) => {
                let { img, alt, CardTitle, dec } = items;
                return (
                  <>
                    <div
 className="flex items-center gap-4  mt-3">
                      <div key={i}>
                        <Image src={img} alt={alt} width={80} height={80}  className="max-w-[60px]"/>
                      </div>
                      <div className="w-full">
                        <h5>{CardTitle}</h5>
                        <p>{dec}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className=" mt-7">
              <Link aria-label="contact" href="/contact-estivasoftech">

                <BtnAnimation >Let's Chat</BtnAnimation>
              </Link>
              </div>
            </div>

            <div className="w-1/2  max-md:hidden max-sm:hidden max-lg:hidden  ">
              {items.map((items, i) => {
                let {
                  imgOne,

                  imgalt,

                } = items;
                return (
                  <>
                    <div
                      key={i}
                      className="relative h-full justify-center flex items-center "
                    >
                      <Image
                        className={`${Imgone} ${res} hover:animate-pulse cursor-pointer  `}
                        src={imgOne}
                        alt={imgalt}
                        width={450}
                        height={200}
                      ></Image>

                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default EstivaBenefits;
