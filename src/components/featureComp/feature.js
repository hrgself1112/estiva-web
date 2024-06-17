import styles from "./features.module.css";
import Image from "next/image";

const Feature = ({ items, Data, lowerCards }) => {
  let { cardsMain } = styles;
  return (
    <>
      <section
        className="lg:p-20 md:p-12 py-12 max-sm:p-6  bg-[#f3f7fd]"
        style={{ backgroundPosition: "bottom ,center" }}
      >
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className=" w-1/2 max-lg:w-full max-xl:w-full max-xl:mb-12 ">
              <div>
                {items.map((items, i) => {
                  let { heading, subheading } = items;
                  return (
                    <>
                      <div key={i}>
                        <h2>{heading}</h2>
                        <h3 className="border-l-2 px-3 border-pink-800 ">
                          {subheading}
                        </h3>
                      </div>
                    </>
                  );
                })}

                {Data.map((items, i) => {
                  let { liData } = items;
                  return (
                    <>
                      <li key={i} className="flex gap-4 pt-6 pr-7">
                        <Image
                          src="/icons/middle_icon/rigth.png"
                          width={48}
                          height={48}
                          alt="arrow"
                          className="min-w-[40px] max-h-[48px]"
                        />
                        <p dangerouslySetInnerHTML={{ __html: liData }}></p>
                      </li>
                    </>
                  );
                })}
              </div>
            </div>
            <div className=" w-1/2 max-lg:w-full max-xl:w-full ">
              <ul className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 ">
                {lowerCards.map((items, i) => {
                  let { title, dec, icon } = items;
                  return (
                    <>
                      <li
                        key={i}
                        className={`${cardsMain} group shadow-lg shadow-blue-500/50 px-6 py-8 justify-center flex flex-col items-center text-center`}
                      >
                        <Image
                          alt={"about-estivasoftech"}
                          src={icon}
                          width={80}
                          height={80}
                          className="transition ease-in-out group-hover:-translate-y-1 group-hover:scale-110 mb-3"
                        />
                        <h4>{title}</h4>
                        <p>{dec}</p>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
