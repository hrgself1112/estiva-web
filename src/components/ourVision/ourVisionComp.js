/* eslint-disable react/no-unescaped-entities */
import Button from "../buttonMain/buttonfill";
import styles from "./ourVision.module.css";
const OurVision = () => {
  let { bg, bg_h, bgset } = styles;
  return (
    <>
      <section className="estiva_home_service max-sm:px-1 lg:px-20 py-20 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap">

            <div className="w-1/2 max-lg:w-full">
              <div className=" grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
                <div className={bgset}>
                  <h3 className="text-gray-200">Our Mission</h3>
                  <h2 className={bg_h}>Mission</h2>
                  <p className="text-gray-400">
                  EstivaSoftech works on a simple notion. Revolutionizing brands, startups and organizations through strategic marketing and development. We're committed to providing cutting-edge solutions that amplify brand impact, foster engagement, and accelerate growth.

                  </p>

                </div>
                <div className={bgset}>
                  <h3 className="text-gray-200">Our Vision</h3>
                  <h2 className={bg_h}>Vision</h2>
                  <p className="text-gray-400">
                  Our vision is to be the driving force behind a digital renaissance, where businesses & brands of all sizes harness the full potential of the digital realm to thrive and succeed. We envision a future where our aesthetic digital marketing solutions empower our clients to navigate today's challenges and lead the way in shaping tomorrow's trends.
                  </p>

                </div>
              </div>
            </div>
            <div className="w-1/2 max-lg:hidden">
              <div className="bg-[url('/ourVision.jpg')] bg-center bg-no-repeat bg-cover h-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVision;
