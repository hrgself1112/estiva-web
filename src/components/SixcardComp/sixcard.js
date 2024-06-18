import Image from "next/image";

const Cards = ({cardTwoData,UpperData}) => {
  return (
    <>
      <section className="py-16 lg:px-20 max-sm:px-5 estiva_middle_card">
        <div className="container mx-auto">
          <div className="flex flex-wrap">


            <div  className="w-full">
            { UpperData.map((items,i)=>{
                let{mainHeading,subHeading}=items
                return(  
                <div key={i} className="mb-10">
                <h2>{mainHeading}</h2>
                <h4>{subHeading}</h4>
                </div>
                )
              })
            }

              <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
              { cardTwoData.map((items,i)=>{
              let{description,heading,icons,alt}=items
              return(
                <div key={i} className=" p-6 shadow-xl shadow-slate-100  transition duration-500 rounded-3xl estiva_card_shadow">
                  <div className="w-20 h-20 bg-slate-100 border-dotted border-2 rounded-2xl text-3xl flex align-middle justify-center items-center shadow-sm">
                    <Image src={icons} alt={alt} width={68} height={68} className="hover:scale-110"></Image>
                  </div>
                  <div className="content mt-7">
                    <h5>
                     {heading}
                    </h5>
                    <p className="mt-3">
                     {description}
                    </p>

                  </div>
                </div>
                )
            })
          }



              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
