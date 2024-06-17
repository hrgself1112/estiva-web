import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { CgTwitter } from "react-icons/cg";

const FooterBottom = () => {
  return (
    <>
      <section className="py-4 bg-bg-estiva-footer lg:px-20 divide-devider-color border-b-1 text-gray-300 ">
        <div className="container mx-auto">
          <div className="flex  max-sm:block">
            <div className="w-3/4  max-lg:w-1/2 max-sm:w-full max-sm:text-center max-sm:py-2">
              <p>Copyright © 2013-2024 ESTIVASOFTECH. All rights reserved.</p>
            </div>
            <div className="w-1/4 max-lg:w-1/2 max-sm:w-full">
              <ul className="flex gap-4 justify-end max-sm:justify-center">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 estiva_gradient  text-gray-300 footer_box">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-full text-center leading-6 mb-4">
              <p>
                EstivaSoftech MLM Software and Digital Marketing Company India (
                <Link href="">www.estivasoftech.com</Link>)
              </p>
              <p>
                Rated 4.6/5 based on 53 Verified Ratings at Google My Bussiness
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-bg-estiva-footer text-gray-200 footer_box">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="footer_social_icon flex max-sm:block items-center bg-social_bg p-3 rounded-full relative top-[-30px] max-sm:bg-transparent">
              <p className="border-r-2 px-4 font-bold max-sm:text-center max-sm:mb-4 max-sm:mt-8 max-sm:border-r-0">
                Official Channels
              </p>
              <div className="social_icon ">
                <ul className="flex gap-4 px-4">
                  <li>
                    <Link href="">
                      <FaFacebookF className=" h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-facebook ease-in-out duration-300 hover:py-1 hover:px-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <AiFillInstagram className="h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-instagram ease-in-out duration-300 hover:py-1 hover:px-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <FaLinkedinIn className="h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-linkedin ease-in-out duration-300 hover:py-1 hover:px-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <CgTwitter className="h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-twitter ease-in-out duration-300 hover:py-1 hover:px-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <FaPinterestP className="h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-pinterest ease-in-out duration-300 hover:py-1 hover:px-1" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterBottom;
