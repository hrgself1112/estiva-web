import Link from "next/link";
import Image from "next/image";
import { BTnAnimationOutline } from "@/components/buttonMain/buttonfill";

export const CategorieMenuCards = ({ items }) => {
  return (
    <>
      {items.map((items, i) => {
        let { heading, dec, url, icon, imgalt } = items;
        return (
          <div
            key={i}
            className="rounded-xl estiva_cate_car p-6 hover:scale-104 group  transition ease-in-out "
          >
            <div className=" flex ">
              <div className="h-2rem w-[75%] max-sm:w-full max-md:w-[75%] ">
                <h3 className="mb-6">{heading}</h3>
                <p
                  className="mr-3"
                  dangerouslySetInnerHTML={{ __html: dec }}
                ></p>

                <div className="mt-5">
                  <Link aria-label="contact" href={url}>
                    <BTnAnimationOutline isBlack={true} />
                  </Link>
                </div>
              </div>
              <div className="estiva_cate_icon w-[25%] max-sm:w-[23%] max-md:w-[25%] max-sm:hidden px-2">
                <Image
                  width={350}
                  height={250}
                  src={icon}
                  alt={imgalt}
                  className="group-hover:scale-105 transition ease-in-out  duration-300 max-w-[130px] "
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
