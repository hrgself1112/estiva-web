import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


export const  DemoCarousel =({data})=> {


        return (
            <Carousel autoPlay={true} showIndicators={true} stopOnHover={false} useKeyboardArrows={true} swipeable={true} emulateTouch={true} showThumbs={false} infiniteLoop={true} showArrows={false} showStatus={false}>
            {data && data.map((items , index)=>{
                return(
              <div key={index} style={{position:"relative"}}>
                <Image className='sterling' fill src={`${items.image}`} alt="some" />
                </div>


                )
            })}

            </Carousel>
        );
    }