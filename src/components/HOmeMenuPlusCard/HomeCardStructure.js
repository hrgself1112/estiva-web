/* eslint-disable react/no-unescaped-entities */

import { CardsHomeData, } from '@/data/homecardsData'
import { HomeCards } from './Homecard'


const HomeCardsMenu = () => {
    return (
        <>

            <section className="estiva_home_service max-sm:px-1 lg:px-20  home_style py-20" >

                <div className="container mx-auto">
                    <div data-aos="fade-right" data-aos-easing="ease-in-out"  data-aos-duration="1000"
    data-aos-once="true"  className="headingDivHeroSectionFive pb-6">
                        <h2 className='estiva_home_heading'>Our Global Services</h2>
                        <h5 className='estiva_home-subheading leading-6 py-6'>We don't follow trends, we bend them. Our team of digital revolutionaries harnesses the power of cutting-edge tools and innovative strategies to propel your online endeavors to previously unimaginable heights. We're your passport to the digital future, opening doors to unprecedented success with every click and scroll.</h5>
                    </div>

                    <div className="grid max-lg:grid-cols-1 lg:grid-cols-2  gap-3">
                     <HomeCards items={CardsHomeData}   />


                    </div>
                </div>
            </section>


        </>
    )
}

export default HomeCardsMenu