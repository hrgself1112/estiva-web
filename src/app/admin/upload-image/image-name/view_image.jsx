"use client"

import ProtectedRoute from '@/app/admin/protected-routes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ViewImage = ({imagePath}) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/images/base64/${imagePath}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        setImageData(await response.json());
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
    fetchImage();
  }, [imagePath]);

  return ( 
    <div>
      {imageData && (
        <div  className='relative h-[90vh]  w-[100%] '>
        <Image src={imageData?.base64Image} fill alt={imageData?.filename} />
          </div>
      )}
    </div> 
  );
};

export default ViewImage;
