import Layout from "@/components/headerMAin/layout";
import styles from "./contactPage.module.css";
import Link from "next/link";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiMail, CiMobile1 } from "react-icons/ci";
import Form from "@/components/form/formMaincomp";
import { generateMetaTags } from "@/components/metacomp/metamain";
import { ContactMeta } from "@/data/metaTags/metaData";

const ContactData = [
  {
    heading: "Contact Us.    ",
    dec: "We love connecting with people and exchanging thoughts who are eager for their brand. Let's get in touch to know your brand better and give it a makeover like never before. We shall get back to you within 24 hours!",
    imgpath:
      "/DigitalMarketing/content-marketing-company/content-marketing-Herosection.webp",
  },
];

const ContactUs = () => {
  let { flip_vertical_right } = styles;
  return (
    <>
      <Layout>
      {generateMetaTags(ContactMeta)}
        <HeroSectionPages items={ContactData} />

        <section className="lg:px-20  lg:py-20 max-lg:py-32 max-md:py-20 max-md:px-4 ">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-1/2 max-lg:w-full">
                <div>
                  <h2 className="mb-2">
                    <span className="estiva_text_gradient">
                      Start your business appearance by Estivasoftech.
                    </span>{" "}
                    Bigger than you thought right now?
                  </h2>
                  <h4 className="border-l-2 px-3 border-blue-800 py-5 ">
                    We’ll do successful your business with our technical skills
                    and strategy, Ideally, connect with us.
                  </h4>
                </div>
                <div className="mt-10 ">
                  <div className="flex items-center gap-4 mb-10">
                    <div
                      className={`estiva_gradient transition-all duration-100 ease-in-out cursor-pointer ${flip_vertical_right}  py-4 px-4 rounded-full`}
                    >
                      <i className="text-3xl  text-white">
                        <CiMobile1 />
                      </i>
                    </div>
                    <div>
                      <h4 className="mb-2">Support Number</h4>
                      <span>
                        <Link href="tel:+919311691080">+91 - 9311 69 1080</Link>{" "}
                        <br />{" "}
                        <Link href="tel:+91 9990140888">
                          +91 - 9990 14 0888
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-10">
                    <div
                      className={`estiva_gradient transition-all duration-100 ease-in-out cursor-pointer ${flip_vertical_right}  py-4 px-4 rounded-full`}
                    >
                      <i className="text-3xl  text-white">
                        <HiOutlineBuildingOffice />
                      </i>
                    </div>
                    <div>
                      <h4 className="mb-2">Head Office</h4>
                      <span>
                        <Link href="https://www.google.com/maps/place/Estivasoftech+%7C+Digital+Marketing+In+India+%7C+eCommerce+Development+Company+%7C+Software+Development+India/@28.6119759,77.335521,15z/data=!4m5!3m4!1s0x0:0xe842ffd00fffe267!8m2!3d28.6119715!4d77.3355187">
                          A - 1233, G. D. Colony Mayur Vihar Phase - 3, DELHI -
                          110096, INDIA
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-10">
                    <div
                      className={`estiva_gradient transition-all duration-100 ease-in-out cursor-pointer ${flip_vertical_right}  py-4 px-4 rounded-full`}
                    >
                      <i className="text-3xl  text-white">
                        <CiMail />
                      </i>
                    </div>
                    <div>
                      <h4 className="mb-2">Email</h4>
                      <span>
                        <Link href="mailto:sales@estivasoftech.com">
                          sales@estivasoftech.com
                        </Link>
                        s<br />
                        <Link href="mailto:info@estivasoftech.com">
                          info@estivasoftech.com
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 max-lg:w-full">
                <div className="mt-10">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.373119892216!2d77.335521!3d28.6119759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4b344e1e8eb%3A0xe842ffd00fffe267!2sESTIVASOFTECH-Digital%20Marketing%20%7C%20MLM%20Software%20Development%20%7C%20Web%20Development%20%7C%20EHR%20-%20EMR%20Software%20%7C%20SEO%20%7C%20PPC%20%7C%20SMO!5e0!3m2!1sen!2sin!4v1704554087226!5m2!1sen!2sin"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactUs;
