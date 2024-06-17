
import style from "./homeFourGridCard.module.css";
import Button from "../buttonMain/buttonfill";
import Image from "next/image";
import EstivaWhy from "@/data/homeDatacomp/why";


const HomeFourGridCard = () => {
  let { why_card, whypadding} = style;
  return (
    <>

      <section className="lg:p-20 md:p-12 p-12   max-sm:p-6 sm:p-6 estiva_home_why ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div data-aos="fade-right" data-aos-easing="ease-in-out"  data-aos-duration="1000"
    data-aos-once="true"  className={`${whypadding} w-1/2 max-xl:w-full`} >
              <div className="max-xl:mb-8">
                <h4 className="font-normal mb-4">Why Choose us</h4>
                <h2 className="mb-5 leading-9">
                  Discovery stage is the most important part of the project
                  development
                </h2>
                <h3>
                  In our experience, the discovery stage of application
                  development is often crucial for project success. That’s true
                  whether you are developing a new product or onboarding an
                  existing one.
                </h3>
                <p>
                  Our team will study your project, gather key functional
                  requirements, define the market fit, and analyze every option
                  to find the technical approach that will work best for your
                  product. By working with us to map out your entire product
                  development cycle, you’ll be able to effectively plan project
                  stages, perform initial estimates, and define critical points
                  to be defined further.
                  <br />
                  <br />
                  Think of the discovery phase as your trail map for a hike
                  through a dense forest. Without that map, you have a good
                  chance of getting lost. To get where you want to go, you need
                  that map.
                </p>

                <div className="mt-8">
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
            <div className="w-1/2  max-xl:w-full max-xl:mt-5">
            <div className={`${why_card}`}>

              <ul className="grid grid-cols-2 gap-5 pb-10 max-sm:grid-cols-1">
                {
                    EstivaWhy.map((items, index)=>{
                    let {heading, paragraph, icon} = items
                    return(
                        <>
                        <li key={index} className="text-center flex justify-center items-center flex-col shadow-lg shadow-blue-500/50 ">
                  <Image src={icon} alt="estivasoftech benifit" width={80} height={80} className="transition ease-in-out group-hover:-translate-y-1 group-hover:scale-110 "/>
                  <h3 >{heading}</h3>
                  <p dangerouslySetInnerHTML={{__html:paragraph}}></p>
                </li>
                        </>
                    )
                  })

}
              </ul>


            </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomeFourGridCard;
