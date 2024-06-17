import Link from "next/link"
import Button from "../buttonMain/buttonfill"



const CategoriePages = ({items}) => {
  return (
    <>
 <section className="lg:px-20 overflow-x-hidden lg:py-32 max-lg:py-32 max-md:py-20 max-md:px-4  bg-[url('/bg/estiva_bg.webp')] bg-cover bg-no-repeat bg-center estiva_hero_bg_glass">

<div className="container mx-auto w-[80%] text-left">
<div className="flex flex-wrap">
    <div className=" w-full  max-md:w-full max-lg:w-full">

    {
        items.map((items,i)=>{
            let{heading,para,subheading}=items
            return(
                <>

        <div  key={i} className="text-center">
            <h1 className="mb-4 estiva_cate_gradient ">
           {heading}
            </h1>

            <h4 className="mb-5 text-yellow-50 text-xl">{subheading}</h4>

            <p className="mb-4 text-gray-400 text-lg" dangerouslySetInnerHTML={{__html:para}}></p>


            <div className="mt-8">
            <Link aria-label="contactpage" href="/contact-estivasoftech">

            <Button>Lets Chat</Button>
            </Link>
            </div>
        </div>
                </>
            )
        })
    }
    </div>
</div>

</div>

   </section>


    </>
  )
}

export default CategoriePages