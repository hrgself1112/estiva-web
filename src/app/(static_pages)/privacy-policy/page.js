import Layout from "@/components/headerMAin/layout";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";
import { HeroData } from "@/data/privacyData";
import { SatisFiedData } from "@/data/satisfiedData";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const PP = () => {
  return (
    <>
      <Layout>
        <HeroSectionPages items={HeroData} />
        <SatisfiedNewuser items={SatisFiedData} />
        <section className="lg:px-20  overflow-x-hidden  lg:py-12 md:p-12 p-12 max-sm:p-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div>
                  <h2 className="mb-4">PRIVACY POLICY</h2>
                  <p className="mb-3">
                    Nowadays, privacy has become a very crucial subject. Talking
                    on digital marketing, so, yes, privacy is an essential
                    ingredient in it.
                  </p>
                  <p className="mb-3">
                    Estivasoftech is the data protector of your personal data.
                    This privacy policy statement will explain to you our ideal
                    working criteria. From collecting the valuable information
                    to how we store it, we’ll be your complete right and to work
                    for you. We are a team of robust and specialized management,
                    which will manage your data with complete security and
                    responsibility.
                  </p>
                  <p>
                    With Estivasoftech you can feel secure and relax. We never
                    compromise with the data privacy, and which is why aims to
                    works with full sincerity and dedication.
                  </p>
                  <h3 className="mt-4 mb-4">
                    WHAT INFORMATION DO WE ACCUMULATE & HOW ?
                  </h3>

                  <p>
                    The personal data will only be collected when we have the
                    authorization to do so.
                  </p>

                  <div className="flex gap-3 mt-4">
                    <i>
                      <HiOutlineArrowCircleRight />
                    </i>
                    <span>
                      Information collected from you- while using the site,
                      you’ll provide us various information including your name,
                      postcode, billing address, emails, and much more.
                    </span>
                  </div>

                  <p className="mt-3">
                    Apart from sources, we can get information automatically
                    also. When a viewer visits your website, we’ll automatically
                    collect the information from the user’s device. Information
                    that will be collected- Device type, web browser, IP
                    address.
                  </p>

                  <h3 className=" mt-4 mb-4">HOW DO WE MANAGE THE DATA</h3>

                  <div className="flex gap-3 mt-4">
                    <i>
                      <HiOutlineArrowCircleRight />
                    </i>
                    <span>
                      Your system security- When you execute with us on the
                      internet we scramble information sent from your device to
                      our frameworks. We have firewalls, interruption discovery
                      frameworks, and infection filtering apparatuses to secure
                      against unapproved people and infections getting to our
                      frameworks. We limit access by requiring the utilization
                      of passwords.
                    </span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <i>
                      <HiOutlineArrowCircleRight />
                    </i>
                    <span>
                      Pulverizing information when not required- Our regulations
                      say us not to keep data unnecessarily, when not in use.
                    </span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <i>
                      <HiOutlineArrowCircleRight />
                    </i>
                    <span>
                      Credit card information- Where credit card data is
                      required, our procedures for recording, overseeing, and
                      utilizing charge card details are planned in arrangement
                      with worldwide PCI Security Standards.
                    </span>
                  </div>

                  <p className="font-semibold mt-4">
                    Protecting your data is our major role and priority. We are
                    very bona fide towards our work and ensure you protect your
                    data with complete security and confidentiality.
                  </p>

                  <h3 className=" mt-3 mb-3">CONSENT</h3>
                  <span className="text-[22px] ">We are Unique to other</span>
                  <p>
                    By using our website, you can hereby sanction to our privacy
                    policy and can refer to our terms & conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PP;
