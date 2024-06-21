import Link from 'next/link';
import React from 'react'
import ProtectedRoute from '../../protected-routes';

export async function fetchImageNames() {
    try {
      const res = await fetch(`http://localhost:4000/filenames`, { next: { revalidate: 3600 } });
      return res.json();
    } catch (error) {
      console.log(error)
      return error;
    }
  }


const Page = async () => {

    const data = await fetchImageNames()


  return (
    <>
    
    <ProtectedRoute>

    <div className="  mx-5  gap-3 grid grid-flow-dense   my-5 -m-2.5">

{data?.map((items, index)=>{
  return(
    <>
         
 

        <Link href={`/admin/upload-image/view-image/${items}`}>
        <div className='bg-gray-100'>
        {items}
        </div>
        </Link> 
 
        </>
    )
  })}
 
    </div>
    
    
  </ProtectedRoute>
    </>
  )
}

export default Page