/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Estiva_logo from "./estiva_logo/Estiva";
import { GrLocation } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

const FooterMain = () => {
  return (
    <>

      <section className=" footer_glass max-sm:px-4 lg:px-20 footerbgsets ">
        <section className="">
          <div className="container  mx-auto pt-8 pb-40 max-lg:pb-24">
            <div className="w-full  divide-devider-color border-b-1 mb-4">
              <Link href="/">
                <Image
                  className="mediaLogoSet "
                  priority
                  src={`data:image/png;base64,${Estiva_logo}`}
                  alt="EstivaSoftech Company Logo"
                  width={250}
                  height={65}
                />
              </Link>
            </div>
            <div className="grid grid-cols-7 gap-8  max-md:gap-1 max-lg:grid-cols-3 max-sm:grid-cols-2 ">
              <div className="footer_about col-span-3 max-lg:col-span-6 max-sm:col-span-3">
                <h4 className="text-cyan-950">Sharing our Ideas!</h4>
                <strong className="mt-4">
                We Create, we Code, we Conquer!
                </strong>

                <p className="mt-2">
                Imagine a place where innovation isn't an option – it's the only language we speak. From crafting genius-level solutions to providing smart time support, we offer everything you need to excel in this digital realm. Join us in the digital revolution, where every project is a masterpiece, and every client is a success story.
                </p>
              </div>

              <div className="footer_service  ">
                <h4 className="text-cyan-950">  Company</h4>
                <ul className="mt-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/estivasoftech-history">Case study</Link>
                  </li>
                  <li>
                    <Link href="https://www.estivasoftech.com/blog/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-estivasoftech">Contact
</Link>
                  </li>

                </ul>
              </div>

              <div className="footer_comapny  ">
                <h4 className="text-cyan-950">Our services</h4>
                <ul className="mt-4">
                  <li>
                    <Link href="/digital-marketing-services">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="/web-development-services">Web development</Link>
                  </li>
                  <li>
                    <Link href="/web-design-services">Designing</Link>
                  </li>
                  <li>
                    <Link href="/software-development-services">Software</Link>
                  </li>
                  <li>
                    <Link href="/multimedia-presentation-services">Multimedia</Link>
                  </li>
                </ul>
              </div>

              <div className="footer_contact col-span-2 ">
                <h4 className="text-cyan-950">Find us here</h4>
                <ul className="mt-4">
                  <li className="flex py-1">
                    <i>
                      <GrLocation className="text-2xl " />
                    </i>
                    <span className="pl-2">
                      <Link href="https://goo.gl/maps/mw3cSvwAqQ6JsAe89">
                        Mayur Vihar Phase -3, Delhi 96, India
                      </Link>
                    </span>
                  </li>
                  <li className="flex py-1">
                    <i>
                      <MdAlternateEmail className="text-2xl " />
                    </i>
                    <span className="pl-2">
                      <Link href="mailto:sales@estivasoftech.com">
                        sales@estivasoftech.com
                      </Link>
                    </span>
                  </li>
                  <li className="flex py-1">
                    <i>
                      <BsTelephoneOutbound className="text-2xl " />
                    </i>
                    <span className="pl-2">
                      <Link href="tel:+919990140888">+91-999 0140 888</Link>
                    </span>
                  </li>
                  <li className="flex py-1">
                    <i>
                      <FaWhatsapp className="text-2xl " />
                    </i>
                    <span className="pl-2">
                      <Link href="tel:+919990140888">+91-931 1691 080</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  );
};

export default FooterMain;
