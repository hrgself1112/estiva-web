import { FaUserSecret } from 'react-icons/fa6'
import style from './mlmlinfo.module.css'

const Mlminfo = ({items}) => {
    let{bxx,infomain,numbsets,icon,iconCodepen,content,numberCover,coverWrap,infoGraphic,ulst,number,fontColor1,listss,numberWrap}=style
  return (
    <>

<section className="py-16 lg:px-20 max-sm:px-5 bg-[url('/bg/estiva-mlm-bg-comps.webp')] bg-cover bg-no-repeat ">
    <div className="container mx-auto">
    <h2 className="mb-3">
    Our MLM Plans
    </h2>
    <h4>Our MLM Software boasts of having various MLM Business compensation plans that skyrocket the growth of your network marketing business.</h4>
<div className=" grid grid-cols-3 gap-5 mt-10 max-sm:grid-cols-1 max-lg:grid-cols-2  ">

{
    items.map((items,i)=>{
        let{count,title,dec}=items
        return(

<div key={i} class={`${bxx}  `}>
    <div class={infomain}>
        <ul class={`${infoGraphic} ${ulst}`}>
          <li class={`${listss} `}>
            <div class={numberWrap}>
              <div class={`${number} ${fontColor1} ${numbsets}`}></div>
              <div class={coverWrap}>
                <div class={numberCover}></div>
              </div>
            </div>
            <div class={content}>
              <div class={`${icon} ${iconCodepen}`}><FaUserSecret /></div>
              <h5>{title}</h5>
              <p>{dec}</p>
            </div>
          </li>


        </ul>

      </div>


</div>
        )
    })
}

</div>
    </div>
</section>



    </>
  )
}

export default Mlminfo