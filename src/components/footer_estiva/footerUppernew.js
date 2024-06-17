/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Button from "../buttonMain/buttonfill";
import { IoIosArrowForward } from "react-icons/io";

const FooterUppernew = () => {
  return (
    <>
      <section className=" max-sm:px-1 lg:px-20 feedback-bg py-10">
        <div className="container mx-auto  ">
          <div className="wrapper">
            <div className="w-[70%] max-lg:w-full ">
              <div className=" ml-20 max-md:block  max-xl:block flex items-center gap-6">
                <div className="w-[80%] px-9">
                  <h3 className="titlebox text-3xl">
                  Embark on Your Growth Expedition with Estivasoftech's Premier Digital Marketing &
                  Software Agency!
                  </h3>

                </div>

                <div className="w-[20%] flex items-center mainbtn rounded max-md:w-[150px] max-xl:w-[150px]  max-xl:mt-5  max-md:mt-5 max-md:ml-5    ">
                  <Link className="btnfooter " href="/contact-estivasoftech">
                    Get in Touch
                  </Link>
                  <i>
                    <IoIosArrowForward />
                  </i>
                </div>
              </div>
            </div>

            <div className="w-[30%] max-lg:hidden">
              <span className="boxOne"></span>
              <span className="boxTwo"></span>
              <span className="normalbox boxthree"></span>
              <span className="normalbox boxFour"></span>
              <span className="normalbox boxFIve"></span>
              <span className="hiddenbox mainbox"></span>
              <span className="hiddenboxTwo mainbox"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterUppernew;
