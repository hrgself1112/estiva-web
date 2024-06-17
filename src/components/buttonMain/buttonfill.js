/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import style from './buttonOutline.module.css'
import styles from './btnanimation.module.css'
import Css from './btnAnimtionOutline.module.css'
import { FaCircle } from 'react-icons/fa6'


const Button = ({ children }) => {
  return (
   <>

<span className="btn-register-header animation-on-hover clickcustomform" >{ children }</span>
   </>
  )
}

export default Button



export const BTnOutline =()=>{
  let{container,btn,btn_1}=style
  return(

<div className={container}>
  <a href="https://twitter.com/Dave_Conner" className={`${btn} ${btn_1}`}>
    <svg>
      <rect x={0} y={0} fill="none" width="100%" height="100%" />
    </svg>
    Hover
  </a>
</div>
  )
}



export const BtnAnimation =({children})=>{
  let{btnAnimation}=styles
  return(
    <>
      <span className={btnAnimation} >{children}</span>
    </>
  )
}


export const BTnAnimationOutline =({ isBlack  })=>{
  let{btnoutline,wdt_button,wdt_buttons,wdt_button_icon,spanoo,icos,wdt_button_text,spanoTwo}=Css

  const buttonStyle = {
    color: isBlack ? 'black' : 'white',

  };

  return(
    <>
      <div  className={btnoutline}>
      <span className={`${wdt_button} ${wdt_buttons}`}>

        <div className={wdt_button_icon}>
          <span className={spanoo}>
            <i className={icos}><FaCircle/></i>
          </span>
        </div>

        <div className={`${wdt_button_text} `}>
          <span style={buttonStyle} className={`${spanoTwo} `}>
          Explore++
          </span>
        </div>
      </span>
      </div>
    </>
  )
}



export const BtnAnimationCircle =()=>{
  let{btnoutlinee,wdt_button,wdt_button_icon,spanoo,icos,wdt_button_text,spanoTwo}=Css
  return(
    <>
      <div className={`${btnoutlinee} `}>
      <div  className={wdt_button}>

        <div className={wdt_button_icon}>
          <span className={`${spanoo}`}>
            <i><FaCircle/></i>
          </span>
        </div>

        <div className={wdt_button_text}>
          <span className={`${spanoTwo} text-[26px]`} >
          Let's Talk
          </span>
        </div>
      </div>
      </div>
    </>
  )
}

