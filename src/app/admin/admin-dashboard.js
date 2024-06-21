import PageNav from '@/components/headerMAin/pagenav'
import React from 'react'
import Link from 'next/link';

const Admindashboard = () => {
  return (
    <>


      <div className="m-3" >

        <div className="flex gap-5">

          <div className="p-3 bg-slate-300 w-[12rem] rounded-xl" >
            <p>Create Articles </p>
            <Link className="link estivatagslink" href="/admin/blog-creator">
              Blog creator
            </Link>
          </div>
          <div className="p-3 bg-slate-300 w-[12rem] rounded-xl" >
            <p>Published Articles </p>
            <Link className="link estivatagslink" href="/admin/articles-controller">
              Articles Controllers
            </Link>
          </div>
          <div className="p-3 bg-slate-300 w-[12rem] rounded-xl" >
            <p>View Images </p>
            <Link className="link estivatagslink" href="/admin/upload-image/image-name">
              View Image Name
            </Link>
          </div>
          <div className="p-3 bg-slate-300 w-[12rem] rounded-xl" >
            <p>Upload Images </p>
            <Link className="link estivatagslink" href="/admin/upload-image">
              Upload Image
            </Link>
          </div>


        </div>
      </div>





    </>
  )
}

export default Admindashboard



