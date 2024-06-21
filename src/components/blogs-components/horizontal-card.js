import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HorizontalCard = ({image, url, alt, heading, description}) => {



  return (
   <>
   
   
   <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <div className="card-header">
        <Image height={300} width={300}
src={image ?? "/bg/home_bg.webp"} 
         alt={alt}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        {/* <span className="inline-block bg-teal-400 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
          Technology
        </span> */}
        <h4 className="mt-2 text-lg font-semibold text-gray-900">
         {heading}
        </h4>
        <p className="mt-2 text-gray-600 text-sm">
         {description}
        </p>
        {/* <div className="flex items-center mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
            alt="User"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="ml-3">
            <h5 className="text-sm font-semibold text-gray-900">
              Jerome Walton
            </h5>
            <small className="text-gray-500">2h ago</small>
          </div>
        </div> */}

<div className="py-3">

<span className="btn-register-header animation-on-hover clickcustomform" > <Link href={`/blogs/${url}`}> Read More </Link></span>
</div>
      </div>
    </div>
    
   </>
  )
}

export default HorizontalCard