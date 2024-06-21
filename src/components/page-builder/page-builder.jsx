
"use client"
import  { Puck } from "@measured/puck";
import React , {useState , useEffect} from "react"
import "@measured/puck/puck.css";
import { config } from "./config"; 
import toast from 'react-hot-toast';


import LoadingBar from 'react-top-loading-bar'
import Button, { BTnOutline, BtnAnimation } from "../buttonMain/buttonfill";
import Link from "next/link"; 
 



export  function  Editor({blog_id}) {
  

  const [initialDataState , setInitialData] = React.useState("")
  const [progress, setProgress] = useState(0)

  
  


  async function fetchData(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      let obj = data[0].data
      const jsonString = JSON.stringify(obj);
      setInitialData(obj)
      console.log(data[0].data)
    } catch (error) { 
      console.error('Error fetching data:', error); 
    }
  }
  
  
  React.useEffect(() => {
    if (blog_id != undefined) {
      fetchData(`http://localhost:4000/api/blogs/get-blog-by-id/${blog_id}`)
    }
  }, []);

 

  
const save = async (editorData) => { 
  setProgress(20)
  try {
    const response = await fetch('http://localhost:4000/api/blogs/submit-articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editorData)
    });

    setProgress(40)

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    setProgress(80)
    const data = await response.json();
    console.log('Post request successful:', data);
    // Optionally update state or perform other actions after successful POST
    toast.success('Aricle Update Successfully.')
    setProgress(100)
  } catch (error) {
    console.error('Error:', error);
    // Handle error as needed
    toast.error('Some Error Occured.')
    setProgress(100)

  }
};
 


  return(
    <>  
 
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
     

    {blog_id == undefined ?   <Puck  className="relative"  config={config} data={initialDataState} onPublish={save} /> : blog_id != undefined  && initialDataState!= "" ?  <Puck   config={config} data={initialDataState} onPublish={save} /> :  <Error/> }
      
    </>
  ) 
}


const Error = ()=>{



  return(
<>


<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-100">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl text-center">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">Oops... something went wrong  ( ´•︵•` )</h1>
                <img src="/error.png" alt="Error Illustration" className="mx-auto" />

                <BtnAnimation><Link href="/admin"> Dashboard</Link></BtnAnimation>
              </div>

              
            </div>
     


     
     </>

  )
}