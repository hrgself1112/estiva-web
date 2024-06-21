"use client"

import ProtectedRoute from '@/app/admin/protected-routes';
import { useEffect, useState } from 'react';

const Page = ({params}) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(`http://localhost:4000/images/${params.image}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        setImageData(URL.createObjectURL(blob));
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
    fetchImage();
  }, []);

  return (
    <ProtectedRoute>

    <div>
      {imageData && (
        <img src={imageData} alt="Your image alt text" style={{ maxWidth: '100%' }} />
      )}
    </div>
      </ProtectedRoute>
  );
};

export default Page;
