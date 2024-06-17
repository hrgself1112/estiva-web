"use client";
import Image from "next/image";
import { CategorieMenuCards } from "./categoriecard";

const CategorieMenu = ({ CardsDataMenu, service }) => {
  return (
    <>
      <section className="lg:px-20 overflow-x-hidden lg:py-10 md:p-12 p-12 max-sm:p-4 estiva_cate_service">
        <div className="container mx-auto">
          <section className="flex flex-wrap pt-7 pb-10">
            <div className="w-[70%]  max-lg:w-[60%] max-md:w-full">
              {service.map((items, i) => {
                let { heading, details } = items;
                return (
                  <>
                    <section key={i}>
                      <h2 className="py-5">{heading}</h2>
                      <p>{details}</p>
                    </section>
                  </>
                );
              })}
            </div>
            <div className="w-[30%] max-lg:w-[40%] flex justify-end items-center">
              <Image
                src={"/bg/estivasoftech-service-logo.png"}
                width={250}
                height={200}
                alt="Estivasoftech Service brand"
                className="max-w-[250px] mix-blend-color-burn opacity-50 max-xl:w-full max-md:hidden max-xl:h-[230px]"
              />
            </div>
          </section>

          <div className="grid lg:md:grid-cols-2 max-sm:grid-cols-1 gap-4 py-10">
            <CategorieMenuCards items={CardsDataMenu} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorieMenu;
