/* eslint-disable react/no-unescaped-entities */
'use client'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import { BsEmojiSmile, BsGlobeAmericas } from 'react-icons/bs';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { HiDesktopComputer } from 'react-icons/hi';

const SatisFiedUsers = () => {
    const [first, second]= useState(false)
  return (
  <>

<section className='lg:p-20 md:p-12 p-12   max-sm:p-6 sm:p-6  '>


<ScrollTrigger onEnter={() => second(true)} onExit={() => second(false)}>
{/* Testimonials with Stats */}
<div className=" container mx-auto">
  {/* Grid */}
  <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
    <div className="lg:col-span-5 lg:col-start-1">
      {/* Title */}
      <div className="mb-8">
        <h2 className="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl ">
          It's all about speed
        </h2>
        <p className="">
          We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
        </p>
      </div>
      {/* End Title */}


    </div>
    {/* End Col */}
    <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
      <div className="space-y-6 sm:space-y-8">
        {/* List */}
        <ul className="grid grid-cols-2 divide-y divide-y-2 divide-x divide-x-2 divide-gray-200 overflow-hidden dark:divide-gray-700">
          <li className="flex flex-col -m-0.5 p-4 sm:p-8">
            <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-3 ">
            <i className='text-[33px] p-2 text-[yellow]'><BsEmojiSmile/></i>
            {first && <CountUp start={0} end={754} duration={2} delay={0} />}
            </div>
            <p className="text-sm sm:text-base ">
            Website / Development
            </p>
          </li>
          <li className="flex flex-col -m-0.5 p-4 sm:p-8 ">
            <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-3">
            <i className='text-[33px] p-2 text-[blue]'><MdOutlineRocketLaunch/></i>
            {first && <CountUp start={0} end={125} duration={2} delay={0} />}
            </div>
            <p className="text-sm sm:text-base ">
            Print Media / Design
            </p>
          </li>
          <li className="flex flex-col -m-0.5 p-4 sm:p-8">
            <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-3 ">
            <i className='text-[33px] p-2 text-[darkblue]'><HiDesktopComputer/></i>
            {first && <CountUp start={0} end={150} duration={2} delay={0} />}
            </div>
            <p className="text-sm sm:text-base ">
            Software Development
            </p>
          </li>
          <li className="flex flex-col -m-0.5 p-4 sm:p-8">
            <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-3 ">
            <i className='text-[33px] text-[green] p-2'><BsGlobeAmericas/></i>
            {first && <CountUp start={0} end={150} duration={2} delay={0} />}
            </div>
            <p className="text-sm sm:text-base ">
            Digital Promotion
            </p>
          </li>
        </ul>
        {/* End List */}
      </div>
    </div>
    {/* End Col */}
  </div>
  {/* End Grid */}
</div>
{/* End Testimonials with Stats */}
</ScrollTrigger>
</section>
  </>
  )
}

export default SatisFiedUsers