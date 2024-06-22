"use client"
import Link from 'next/link';
import React, {useState} from 'react'
import ProtectedRoute from '../../protected-routes';
import ViewImage from './view_image';
 

const Page =  () => {

  const[image,setimage] = useState("")
  const [data  , setData]= useState([])
 
  React.useEffect(()=>{

  },[image])
  
  React.useEffect(()=>{
    fetchData()
  },[])
  

  
  const  fetchData = async ()=>{
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/filenames`, { next: { revalidate: 3600 } });
    let Imgdata = await res.json()
    setData(Imgdata)
    setimage(Imgdata[0])
  } catch (error) { 
    return error;
  }
}
  
  
  const HandleClick =(items)=>{
    setimage(items)

  }

  return (
    <>

      <ProtectedRoute>
 
 
<div className="flex m-3 mx-2">

<div className="flex-[1]">

        <div className="  mx-5  gap-3 grid grid-flow-dense   my-5 -m-2.5">
          {data?.map((items, index) => {
            return (
              <> 
                  <div onClick={()=>HandleClick(items)} title={items} className={`${image == items ? "bg-blue-200" : "bg-gray-200"  }   p-1 px-3  rounded-xl cursor-pointer truncate bg-gray-200 hover:bg-blue-200`}>
                    {items}
                  </div> 

              </>
            )
          })}
        </div> 
          </div>

         <div className="flex-[4] rounded-2xl overflow-hidden">
        <ViewImage imagePath={image}/>
    
          </div>
          </div>
 
      </ProtectedRoute>
    </>
  )
}

export default Page