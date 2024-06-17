import Image from "next/image"
import style from './ourTeam.module.css'
import Link from "next/link"
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6"
import { CgTwitter } from "react-icons/cg"
import { AiFillInstagram } from "react-icons/ai"


const OurTeamCard = ({items}) => {

  return (
    <>

    {
      items.map((items,i)=>{
        let{UserName,rol}=items
        return(
          <>


<div key={i} className=" w-fit ">
  <div className=" h-fit group">
    <div className="relative overflow-hidden">
      <Image alt="" width={350} height={300}  src={"/ourteam/OurTeam.jpg"}  />
      <div className="absolute h-full w-full bg-black/40 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">


       <h4 className="text-white">{UserName}</h4>
<p className="text-white text-xl">{rol}</p>
<div className="social_icon mt-5">
                <ul className="flex gap-4 px-4">
                  <li>

                  <Link aria-label="Facebook" href=""><FaFacebookF className=" h-8 w-8 rounded-full ring-2 text-white ring-white py-2 px-2 hover:bg-icon-facebook ease-in-out duration-300 hover:py-1 hover:px-1" /></Link>
                  </li>
                  <li>
                  <Link aria-label="Instagram" href=""><AiFillInstagram className="h-8 w-8 rounded-full ring-2 text-white ring-white py-2 px-2 hover:bg-icon-instagram ease-in-out duration-300 hover:py-1 hover:px-1" /></Link>
                  </li>
                  <li>
                  <Link aria-label="LinkedinIn" href=""><FaLinkedinIn className="h-8 w-8 rounded-full ring-2 text-white ring-white py-2 px-2 hover:bg-icon-linkedin ease-in-out duration-300 hover:py-1 hover:px-1" /></Link>
                  </li>
                  <li>
                  <Link aria-label="Twitter" href=""><CgTwitter className="h-8 w-8 rounded-full ring-2 text-white ring-white py-2 px-2 hover:bg-icon-twitter ease-in-out duration-300 hover:py-1 hover:px-1" /></Link>
                  </li>
                  <li>
                    <Link aria-label="Pinterest" href=""><FaPinterestP className="h-8 w-8 rounded-full ring-2 text-white ring-white py-2 px-2 hover:bg-icon-pinterest ease-in-out duration-300 hover:py-1 hover:px-1" /></Link>
                  </li>
                </ul>
              </div>
      </div>
    </div>
  </div>
</div>
          </>
        )
      })
    }








    </>
  )
}

export default OurTeamCard