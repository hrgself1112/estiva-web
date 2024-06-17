/* eslint-disable react/jsx-key */

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLogoAndroid } from "react-icons/io";

import { SiCakephp ,SiAndroidstudio,SiDjango,SiJquery,SiFlutter,SiTailwindcss, SiGoogleads, SiGoogleanalytics, SiKalilinux, SiWireshark, SiGooglemarketingplatform } from "react-icons/si";
import { FaBootstrap,FaAngular,FaAws,FaSass,FaCss3Alt,FaGitAlt,FaDigitalOcean,FaGithub,FaDocker,FaHtml5,FaNodeJs,FaPhp,FaPython,FaOpencart,FaReact,FaMagento,FaShopify,FaWordpress,FaJoomla,FaDrupal } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandLaravel ,TbBrandMongodb,TbBrandNextjs,TbBrandMysql} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
const LOGOS = [
<IoLogoAndroid  />,
<SiCakephp   />,
<FaBootstrap  />,
<FaAngular  />,
<SiAndroidstudio />,
<FaAws />,
<FaDigitalOcean />,
<SiDjango />,
<FaDocker />,
<SiJquery />,
<SiFlutter />,
<DiJavascript />,
<TbBrandLaravel />,
<FaCss3Alt />,
<TbBrandMongodb />,
<TbBrandNextjs />,
<FaGitAlt />,
<FaNodeJs />,
<FaPhp />,
<FaPython />,
<FaReact />,
<TbBrandMysql />,
<FaMagento />,
<FaShopify />,
<FaSass />,
<FaWordpress />,
<FaJoomla />,
<FaGithub />,
<FaDrupal />,
<FaOpencart />,
<SiTailwindcss />,
<FaHtml5 />,
<SiGoogleads />,
<SiGoogleanalytics />,
<SiKalilinux />,
<SiWireshark />,
<BiLogoPostgresql />,
<SiGooglemarketingplatform/>

];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 150,
  arrows : false,
  accessibility: true,
  pauseOnHover: false,
  centerMode: true,
  centerPadding: '380px',

  responsive: [


    {
      breakpoint: 1650,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 150,
        centerMode: true,
        centerPadding: '290px',

        accessibility: true,
        pauseOnHover: false,
      },
    },

    {
      breakpoint: 1260,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 150,
        centerMode: true,
        centerPadding: '200px',

        accessibility: true,
        pauseOnHover: false,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow:2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 150,
          centerMode: true,
  centerPadding: '150px',

        accessibility: true,
        pauseOnHover: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow:2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 150,
        centerMode: true,
        centerPadding: '70px',

        accessibility: true,
        pauseOnHover: false,
      },
    },

    {
      breakpoint: 450,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 150,
        centerMode: true,
        centerPadding: '100px',

        accessibility: true,
        pauseOnHover: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 150,
        centerMode: true,
        centerPadding: '100px',

        accessibility: true,
        pauseOnHover: false,
      },
    },
    {
      breakpoint: 765,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 150,
        centerMode: true,
        centerPadding: '100px',

        accessibility: true,
        pauseOnHover: false,
      },
    },



  ],
};

export const ServiceSlider = () => {
  return (
    <section className="py-10 lg:px-20 overflow-x-hidden sliderbg" >
      <div className="container mx-auto flex flex-wrap">

        <div className="w-[20%]  max-sm:hidden min-sm:w-full text-gray-300 font-bold leading-32 "><h4 className="text-4xl text-white">Technology</h4>

        </div>
        <div className="w-[80%]  max-sm:w-full px-5 ">


        <Slider {...settings}>
          {LOGOS.map((logo, index) => {
            return (
              <div key={index} className=" flex justify-center items-center ">
                <i className=" text-gray-500  hover:text-white" style={{fontSize:"52px"}}>{logo}</i>
              </div>
            );
          })}
        </Slider>
        </div>
      </div>
    </section>
  );
};
