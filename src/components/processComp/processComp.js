import Link from "next/link";
import Button from "../buttonMain/buttonfill";
import styles from "./processComp.module.css";
const ProcessComp = ({ items, data, lower, info }) => {
  let { cards, linemidle, cardss, circlebox, circleboxTwo } = styles;
  return (
    <>
      <section className="lg:p-20 md:p-12 p-12 overflow-x-hidden bg-black max-sm:p-6 sm:p-6 ">
        <div className="container mx-auto">
          <div className={`${linemidle}  relative `}>
            <div className={`flex flex-wrap  `}>
              <div className="w-1/2 max-md:w-full">
                {items.map((items, i) => {
                  let { title, heading } = items;
                  return (
                    <>
                      <div key={i} className="mt-14 max-md:mb-10">
                        <h3 className="text-[#9ea2a2]">{title}</h3>
                        <h2 className="text-[3.5rem]  text-white">{heading}</h2>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="w-1/2 max-md:w-full">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                  {data.map((items, i) => {
                    let { cardTitle, cardDec } = items;
                    return (
                      <>
                        <div
                          key={i}
                          className={`${cards} relative group hover:after:-bottom-3 `}
                        >
                          <h4 className="text-white text-[27px] mb-4 ">
                            {cardTitle}
                          </h4>
                          <p className="text-[#9ea2a2]">{cardDec}</p>

                          <div
                            className={`${circlebox} max-md:hidden group-hover:bg-transparent group-hover:before:bg-green-500`}
                          ></div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* -----------------rowTwo start-------------- */}
          <div className="mt-24 max-md:mt-4">
            <div className="flex flex-wrap">
              <div className="w-1/2 max-md:w-full">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                  {lower.map((items, i) => {
                    let { LowerCardTitle, LowerCardDEc } = items;
                    return (
                      <>
                        <div
                          key={i}
                          className={`${cardss} relative group hover:after:-top-[10px] `}
                        >
                          <h4 className="text-white text-[27px] mb-4 ">
                            {LowerCardTitle}
                          </h4>
                          <p className="text-[#9ea2a2]">{LowerCardDEc}</p>
                          <div
                            className={`${circleboxTwo} max-md:hidden  group-hover:bg-transparent group-hover:before:bg-green-500 `}
                          ></div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="w-1/2 max-md:w-full">
                <div className="px-14 max-md:mt-10">
                  {info.map((items, i) => {
                    let { dec } = items;
                    return (
                      <>
                        <p key={i} className="text-[#9ea2a2]">
                          {dec}
                        </p>
                      </>
                    );
                  })}

                  <div className="mt-7">
                    <Link aria-label="contact" href="/contact-estivasoftech">
                      <Button>Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessComp;
