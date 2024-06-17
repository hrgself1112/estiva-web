/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

import { BtnAnimationCircle } from "../buttonMain/buttonfill";
import Form from "./formMaincomp";

const FormMian = () => {
  return (
    <>
      <section className="lg:px-20 bgformsets lg:py-12 md:p-12 p-12 max-sm:p-4 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-[50%] max-lg:w-full max-lg:mb-10 flex items-center">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                data-aos-once="true"
                className="max-sm:w-full  "
              >
                <h2 className="font-bold text-[44px] gradint  leading-[3.2rem]  mb-8">
                  Let’s build something great together
                </h2>
                <p className="mb-12">
                  We believe in turning ideas into reality and we're ready to
                  join your journey. Reach out to us and let's start discussing
                  your vision. Together, we can craft software solutions that
                  elevate your business to new heights.
                </p>
                <Link href="/contact-estivasoftech" aria-label="callus">
                  <BtnAnimationCircle />
                </Link>
              </div>
            </div>

            <div className="w-[50%] max-lg:w-full flex justify-end max-lg:justify-center">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormMian;
