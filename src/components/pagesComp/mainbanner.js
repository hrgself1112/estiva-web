import Image from "next/image";
import { parseContent } from "../content-parser/parser";

const MainBannerPAges = ({ items }) => {

  
  return (
    <>
      <section className="main-bg py-16 lg:px-20 max-sm:px-5 overflow-x-hidden pb-24 max-lg:pb-[27rem] max-sm:pb-[1rem]  relative">
        <div className="container mx-auto">
          {items.map((items, i) => {
            let { heading, subheading, para, imgOne, imgTwo, alt1, alt2 } =
              items;
            return (
              <>
                <div className="flex flex-wrap ">
                  <div className="w-1/2 max-lg:w-full ">
                    <h2 key={i} className="lg:md:font-semibold">
                      {heading}
                    </h2>
                    <h3 className="border-l-2 px-3 border-pink-800">
                      {subheading}
                    </h3>

                    <p className="py-6" >

                {parseContent(para)}

                    </p>
                  </div>
                  <div className="pl-4 relative w-1/2 max-lg:w-full estiva-before mt-9 max-xl:mt-12 max-sm:hidden  ">
                    <div className="thumb">
                      <Image
                        src={imgOne}
                        alt={alt1}
                        width={400}
                        height={200}
                        className="w-[400px]  h-[200] max-sm:w-full "
                      />
                      <Image
                        src={imgTwo}
                        alt={alt2}
                        width={400}
                        height={200}
                        className="w-[400px]  h-[200] max-sm:hidden "
                      />
                    </div>
                    <div className="overlay max-sm:hidden relative z-50 w-[250px] rounded-lg py-6 bg-gray-50 top-[60%] left-[20%] max-lg:top-[290%] outline-double outline-6 outline-offset-2 outline-blue-400 px-4 text-center">
                      <h4 className="font-light">
                        Ready To <br />
                        <strong className="brand text-2xl text-bg-estiva-footer font-bold ">
                          Boost Your Business Online?
                        </strong>
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MainBannerPAges;
