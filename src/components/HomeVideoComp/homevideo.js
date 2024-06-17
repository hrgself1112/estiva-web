/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import  { BtnAnimationCircle } from "../buttonMain/buttonfill";
import Link from "next/link";

const HOmeVideo = ({ items }) => {

  return (
    <>
      <section className="flex flex-col text-white py-0 px-3 overflow-x-hidden min-h-[34vh] max-sm:min-h-[60vh] lg:px-20 relative ">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src="/herovideo.webm"
            type="video/mp4"
            autoPlay
            muted
            loop
          />
        </div>

        {items.map((items, i) => {
          let { paraone, paratwo, Dec } = items;
          return (
            <div key={i} className="container mx-auto relative">
              <div className="video-content">
                <div className="mt-40 mb-40 w-[55%] max-xl:w-[80%] max-lg:w-[90%] max-md:w-full">
                  <h2 className=" text-white  text-[52px]  leading-[3.5rem] font-bold
                  ">
                  <p ><span className="estiva_text_gradient">Transform your Business and Vision</span> into reality with our elite professional team!</p>

                  </h2>
                  <p className="py-12 text-white">{Dec}</p>

                  <div className="max-sm:block mt-10">

<Link href="/contact-estivasoftech">

                    <BtnAnimationCircle />
</Link>

                  </div>
                </div>

                <div className="relative estiva_video_card">
                  <div className="max-lg:mt-10 max-sm:hidden">
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  setboxnew ">
                      <div className="flex boxmaintop estiva_border_bottom  gap-1 px-2 py-4 ">
                        <div className="left">
                          <Image
                            src="/bg/quality.svg"
                            alt={"Quality Assurance"}
                            width={85}
                            height={85}
                            className="max-w-[62px]"

                          />
                        </div>
                        <div className="right">
                          <p className="text-gray-400">100% Quality Assurance</p>
                          <p className="text-white text-lg">
                          We love investing time in thinking, planning, and exploring. We don't rush.
                          </p>
                        </div>
                      </div>
                      <div className="flex boxmaintop estiva_border_bottom  gap-1 px-2 py-4 ">
                        <div className="">
                          <Image
                            src="/bg/agile.svg"
                            alt={"Agile Stage Flow"}
                            width={85}
                            height={85}
                            className="max-w-[62px]"


                          />
                        </div>
                        <div className="right">
                          <p className="text-gray-400 ">Agile Stage Flow</p>
                          <p className="text-white text-lg">
                          A team of Business Analysts, Project Managers, Scrum Masters, & developers with trailblazing ideas.
                          </p>
                        </div>
                      </div>
                      <div className="flex boxmaintop estiva_border_bottom  gap-1 px-2 py-4 ">
                        <div className="left ">
                          <Image
                            src="/bg/experience.svg"
                            alt={"Experience with Expertise"}
                            width={85}
                            height={85}
                            className="max-w-[62px]"

                          />
                        </div>
                        <div className="right">
                          <p className="text-gray-400">Experience with Expertise</p>
                          <p className="text-white text-lg">
                          You’ll get market-marvels with more than 10+ years of experience in the field.
                          </p>
                        </div>
                      </div>
                      <div className="flex boxmaintop    gap-1 px-2 py-4 ">
                        <div className="left ">
                          <Image
                            src="/bg/ending.svg"
                            alt={"Curiosity"}
                            width={85}
                            height={85}
                            className="max-w-[62px]"
                          />
                        </div>
                        <div className="right">
                          <p className="text-gray-400">Never-Ending Curiosity</p>
                          <p className="text-white text-lg">
                          We constantly strive for innovation, refusing to rely on previous achievements.
                          </p>
                        </div>
                      </div>
                      <div className="flex boxmaintop    gap-1 px-2 py-4 ">
                        <div className="left ">
                          <Image
                            src="/icons/middle_icon/lightbulb.png"
                            alt={"Transparency"}
                            width={85}
                            height={85}
                            className="max-w-[62px]"
                          />
                        </div>
                        <div className="right">
                          <p className="text-gray-400">Transparency</p>
                          <p className="text-white text-lg">
                          Our professional, flexible, and integrated process is simply reflected in what we do.
                          </p>
                        </div>
                      </div>
                      <div className="flex boxmaintop    gap-1 px-2 py-4 ">
                        <div className="left ">
                          <Image
                            src="/bg/quality.svg"
                            alt={"Under a Roof"}
                            width={85}
                            height={85}
                            className="max-w-[62px]"
                          />
                        </div>
                        <div className="right">
                          <p className="text-gray-400">Under a Roof</p>
                          <p className="text-white text-lg">
                          Find strategic plans, complex software, UI/UX, development & custom programming at one-stop.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOmeVideo;
