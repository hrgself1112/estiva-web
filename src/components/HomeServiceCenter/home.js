
import Button from "../buttonMain/buttonfill";


import Image from "next/image";

import Link from "next/link";


const HomeApplicationCard = () => {
  return (
    <>

      <section className="py-20 max-sm:px-1 lg:px-20  bgsetsst">
        <div className="container mx-auto ">
          <div className=" mb-5 max-2xl:px-4  lg:px-4 max-xl:px-4 ">
            <h2 className=" mb-4">
              Why EstivaSoftech Stands Out in the Digital Landscape?
            </h2>
            <h3 className="border-l-2 px-3 border-pink-800">

              We implement widely accepted Digital, web design and software
              development standards, which include the following stages.
            </h3>
          </div>

          <div className="flex flex-wrap mt-16">
            <div className="w-[30%] max-lg:hidden max-md:hidden">
              <div  className="flex estiva_home_service_card rounded-[12px] setstcikt gap-3 py-6 mt-2 mb-3 px-3">
                <div className=" flex justify-center items-center ">
                {/* <i className=" text-[63px] px-2"><IoMdRocket /></i> */}
                <Image src="/icons/middle_icon/experice.png" alt=" Passion for Excellence" width={84} height={84} className="min-w-[64px]"/>
                </div>
                <div  className=" nuberset ">
                  <h4 className="pb-2">
                  Passion for Excellence
                  </h4>
                  <p>At Estivasoftech, we believe in setting the bar high and consistently surpassing expectations to deliver exceptional outcomes for our clients.</p>

                </div>
              </div>
              <div className="flex estiva_home_service_card rounded-[12px] setstcikt  gap-3 py-6 mt-2 mb-3 px-3">
                <div className=" flex justify-center items-center ">
                <Image src="/icons/middle_icon/time.png" alt="Empowering Growth" width={84} height={84} className="min-w-[64px]"/>
                </div>
                <div className=" nubersetone ">
                  <h4 className="pb-2">
                  Empowering Growth
                  </h4>
                  <p>Our dedication ensures that each individual within our organization has the opportunity not only to succeed but to thrive. </p>

                </div>
              </div>
              <div className="flex estiva_home_service_card rounded-[12px] setstcikt  gap-3 py-6 mt-2 mb-3 px-3">
                <div className=" flex justify-center items-center ">
                <Image src="/icons/middle_icon/agile2.png" alt="Agile Methodology" width={84} height={84} className="min-w-[64px]"/>
                </div>
                <div className="  nubersetTwo ">
                  <h4 className="pb-2">
                  Agile Methodology
                  </h4>
<p>At the Estivasoftech of our project management strategy is the adoption of dynamic development frameworks, exemplified by the Agile methodology.</p>
                </div>
              </div>
              <div className="flex estiva_home_service_card rounded-[12px] setstcikt  gap-3 py-6  mt-2 mb-3  px-3">

                <div className=" flex justify-center items-center ">
                <Image src="/icons/middle_icon/cost-about.png" alt="Significant Experience" width={84} height={84} className="min-w-[64px]"/>
                </div>
                <div className=" nubersetThree ">
                  <h4 className="pb-2">
                  Significant Experience
                  </h4>
<p>Our rich portfolio of successful projects stands as a testament to our proficiency in meeting diverse client requirements across various sectors and utilizing advanced techniques. </p>
                </div>
              </div>
            </div>
            <div className="w-[70%] lg:md:sticky lg:h-[38rem]  max-md:w-full  max-lg:w-full  glassmorff  top-44 ">
              <div className="lg:h-[27rem] resonsbb max-md:w-full lg:mx-20 md:mx-20 max-md:px-4 max-md:py-12  md:py-20  ">
                <h2 className="mt-6 max-sm:mt-0 ">
                  Unleashing Imagination, Fostering Teamwork, and Celebrating
                  Success: The Essence of Estivasoftech
                </h2>
                <h3 className="border-l-2 px-4 border-pink-800">
                Prioritizing Scalability, Reliability, and Quality
                </h3>
                <p className=" mt-4">
                  <strong>Are you searching for a reliable and experienced software, web
                  development, UI/UX Design and best digital marketing company
                  in India? </strong><br></br>Look no further than Estivasoftech. We are a
                  one-stop destination for businesses seeking top-notch
                  solutions to enhance their online presence and achieve growth.
                  Since our establishment in 2013, we have consistently
                  delivered exceptional services and gained a reputation for
                  technological excellence. At Estivasoftech, we never
                  compromise on the quality of our services, technology, or
                  security.
                </p>
                <div className="mt-[5%] max-sm:mt-3 max-lg:mt-2  flex gap-4 items-center ">
<Link href="/estivasoftech-history">

                  <Button> Read more</Button>
</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomeApplicationCard;
