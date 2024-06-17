import Image from "next/image";
import Link from "next/link";
import style from "../app/error.module.css";
import Layout from "@/components/headerMAin/layout";

export default function NotFound() {
  let {
    central_body,
    bg_purple,
    glowing_stars,
    earth_moon,
    star,
    error,
    objects,
    object_earth,
    object_rocket,
    object_moon,
    box_astronaut,
    object_astronaut,
    btn_go_home,
    image_404,
  } = style;
  return (
    <>
      <Layout>
        <div className={`${bg_purple} relative  ${error}`}>
          <div className={`${central_body} flex flex-col items-center`}>
            <Image
              className={`${image_404}  animate-bounce ease-in-out transition-transform  duration-500 `}
              src="/estiva404.svg"
              width={300}
              height={200}
              alt="estiva error"
            />
            <Link href="/" className={btn_go_home}>
              GO BACK HOME
            </Link>
          </div>
          <div className={objects}>
            <Image
              className={object_rocket}
              src="/rocket.svg"
              width={40}
              height={40}
              alt="estiva rocket"
            />
            <div className={earth_moon}>
              <Image
                className={object_earth}
                src="/earth.svg"
                width={100}
                height={100}
                alt="estiva earth"
              />
              <Image
                className={object_moon}
                src="/moon.svg"
                width={80}
                height={100}
                alt="estiva earth"
              />
            </div>
            <div className={box_astronaut}>
              <Image
                className={object_astronaut}
                src="/astronaut.svg"
                width={140}
                height={100}
                alt="estiva earth"
              />
            </div>
          </div>
          <div className={glowing_stars}>
            <div className={star}></div>
            <div className={star}></div>
            <div className={star}></div>
            <div className={star}></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
