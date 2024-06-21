import React from 'react'
import Link from "next/link"
import InputBox from './inputBox';

export async function fetchData() {
    try {
      const res = await fetch("http://localhost:4000/api/blogs/get-metadata"); 
      return res.json();
    } catch (error) { 
      return null;
    }
  }

  


const Table = async() => {

const data = await fetchData()

console.log(data.articles);




  return (
    <>
      
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div> 
            </div>
            <div className="my-2 flex sm:flex-row flex-col">
                
                <div className="block relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                   {/* <InputBox/> */}
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    ID
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    URL
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Staus
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Publish/Unpulish
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          
                          
                          <TableRow data={data.articles} />


                        </tbody>
                    </table>
                    {/* <div
                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div> 
    
    </>
  )
}

export default Table


const TableRow= ({data})=>{
return(
<>
{
data?.map((items, index)=>{

return(

<tr>
                                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                         
                                        <div className="ml-3">
                                            <p className="text-gray-900   text-md font-semibold   whitespace-no-wrap">
                                                {items._id}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-md font-semibold   whitespace-no-wrap"> {items.data.root.props.Url}</p>
                                </td>
                                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 text-md font-semibold  whitespace-no-wrap">
                                       {items.updatedAt}
                                    </p>
                                </td>
                            
                                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative  text-md font-semibold  ">Active</span>
                                    </span>
                                </td>
                               
                               
                                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                     <label for="toggleB" class="flex items-center cursor-pointer">
                                        <div class="relative">
                                        <input checked={true} type="checkbox" id="toggleB" class="sr-only" />
                                        <div class="block bg-gray-600 w-10 h-5 rounded-full"></div>
                                        <div class="dot absolute left-1 top-[2px] bg-white w-4 h-4 rounded-full transition"></div>
                                        </div> 
                                    </label> 
                                 </td>


                                <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <Link  target="_blank" href={`/admin/blog-update/${items._id}`}>Edit</Link>
      
                                    </td>









                            </tr> 

)

})

}
</>


)
}