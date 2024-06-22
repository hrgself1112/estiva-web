"use client"
import React, { useState } from 'react';
import ProtectedRoute from '../protected-routes';
import Image from 'next/image';
const axios = require('axios');

const Page = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const maxLength = 20;

  const handleImageChange = (e) => {

    const files = Array.from(e.target.files);

    files.forEach((file) => {
      if (!file.type.match('image.*')) {
        return;
      }

      if (images.length >= maxLength) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prevImages) => [
          ...prevImages,
          { name: file.name, url: e.target.result }
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageRemove = (fileName) => {
    setImages((prevImages) => prevImages.filter((image) => image.name !== fileName));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNameDoubleClick = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index].isEditing = true;
      return updatedImages;
    });
  };

  const handleNameChange = (index, newName) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index].name = newName;
      return updatedImages;
    });
  };

  const handleNameBlur = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index].isEditing = false;
      return updatedImages;
    });
  };
 
  const handleSubmit = async () => {
    if (images.length === 0) {
      alert('Please select images to upload.');
      return;
    }

    const formData = new FormData();

    for (const image of images) {
      const file = await fetch(image.url) // Fetch actual image data
        .then((response) => response.blob());
      formData.append('file', file, image.name); // Use original file name
    }

    try { 
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_PORT}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setImages([]); // Clear images after successful upload (optional)
    } catch (error) {
      console.error(error);
    }
  };

  



  return (
<ProtectedRoute>

    <div className="p-10">
   
<div className='bg-gray-200 p-5 flex gap-2'>
<div className='w-[420px] flex-[2] bg-white p-8 rounded-2xl  flex flex-col gap-4 '>
  <label>
  <div className='w-full hover:cursor-pointer p-12 border-2 rounded-2xl  group flex flex-col items-center justify-center border-dashed   border-blue-400'>
    <input 
     onChange={handleImageChange}
     
     type="file" 
      className="hidden"
       multiple  />
    <svg className='w-14 aspect-square  group-hover:scale-105 ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g id="Open_Folder-2" data-name="Open Folder">
        <path d="m45 18h-4v-4a2.996 2.996 0 0 0 -3-3h-15.25a2.9991 2.9991 0 0 1 -2.33-1.11l-1.96-2.41a3.9846 3.9846 0 0 0 -3.1-1.48h-11.36a2.996 2.996 0 0 0 -3 3v29.57a3.3672 3.3672 0 0 0 1.01 2.42 3.3672 3.3672 0 0 0 2.42 1.01h33.66a3.441 3.441 0 0 0 3.3-2.47l5.53-18.97a2.003 2.003 0 0 0 -1.92-2.56z" fill="#376cfb" />
        <path d="m44.9987 18h-28.4262a3.43 3.43 0 0 0 -3.2925 2.47l-5.56 19.0614a3.4286 3.4286 0 0 1 -3.2914 2.4686h33.6638a3.43 3.43 0 0 0 3.2933-2.47l5.5331-18.97a2 2 0 0 0 -1.9201-2.56z" fill="#4294ff" />
      </g>
    </svg>
    <p className='text-gray-400'>Drag & Drop your files here</p>
  <p className="py-2 text-gray-700">  Total  Uploaded</p> 
  </div>
    </label>
   
    {
images.length>0?<>
        <div className='text-center'> 
           <span  onClick={handleSubmit}  className="px-12 py-2 cursor-pointer bg-gray-200 rounded-xl"> Submit </span>
        </div>
</>
  :null
  }

  {/* <Button className="max-sm:w-[70%]  py-6 bg-blue-500  hover:bg-blue-300  mx-2 bg" onClick={handleSubmit} >Submit</Button> */}
    </div> 
     

          
     


        
 
  </div>
  
  <div className="flex bg-gray-100  flex-wrap my-5 -m-2.5">
       
  {images.map((image, index) => (
          <div className="w-[200px] hover:bg-blue-200 rounded-2xl p-2.5 mb-3" key={index}>
            <div
              style={{ backgroundImage: `url(${image.url})` }}
              className="relative pb-[100%] rounded-2xl bg-center bg-cover cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div
                className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.5)] absolute top-2.5 right-2.5 text-center leading-6 text-white cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageRemove(image.name);
                }}
              >
                ✖
              </div>
            </div>
            {image.isEditing ? (
              <input
               onKeyDown={(e)=>e.key=="Enter"?handleNameBlur(index):null}
                type="text"
                value={image.name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                onBlur={() => handleNameBlur(index)}
                className="mt-2 text-sm text-center w-full border border-gray-300 rounded-md p-1"
                autoFocus
              />
            ) : (
              <p
                className="mt-2 text-sm text-center w-full cursor-pointer"
                onDoubleClick={() => handleNameDoubleClick(index)}
              >
                {image.name}
              </p>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div onClick={handleCloseModal} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative h-[100vh]  w-[100%] ">
            <Image fill src={selectedImage.url} alt={selectedImage.name} className="max-w-full max-h-screen" />
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={handleCloseModal}
            >
              ✖
            </button>

          </div>
        </div>
      )}
    </div>


</ProtectedRoute>
  );
};

export default Page;
