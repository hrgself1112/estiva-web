

import React from 'react'

export async function fetchImageNames() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/filenames`, { next: { revalidate: 3600 } });
      return res.json();
    } catch (error) {
      console.log(error)
      return error;
    }
  }
  

  
  const ImageNames = async () => {

    const data = await fetchImageNames()

    return (
      <>
      
      {data?.map((items, index) => {
            return (
              <> 
                  <div className='bg-gray-100'>
                    {items}
                  </div> 

              </>
            )
          })}


      
      </>
    )
  }
  
  export default ImageNames