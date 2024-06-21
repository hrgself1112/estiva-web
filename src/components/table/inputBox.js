"use client"
import React from 'react'

const InputBox = () => {
    const [inputValue, setInputValue] = React.useState('');
    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    };


    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/blogs/getArticleMetadataByURL/${inputValue}`);
            const data = await response.json();
         
            // console.log(data); // Handle the response data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>
            <div className='flex gap-2 items-center'>
                <div>

                    <input onChange={handleChangeInput} placeholder="Enter Blog URL to search from db."
                        className="appearance-none rounded-3xl w-[25rem]   border border-gray-400 border-b block pl-8 pr-6 py-2   bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />

                </div>
                <div>

                    <button className="rounded-3xl bg-blue-500 text-white p-2 px-8" onClick={fetchData}>Search </button>
                </div>

            </div>
        </>
    )
}

export default InputBox