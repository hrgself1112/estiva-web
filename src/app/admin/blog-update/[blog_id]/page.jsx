"use client"
import React from 'react'
import { Editor } from '@/components/page-builder/page-builder'
import ProtectedRoute from '../../protected-routes'

const Page = ({params}) => {



  return (
    <>  
    <ProtectedRoute>
     <Editor blog_id={params.blog_id}  />
    </ProtectedRoute>
    </>
  )
}

export default Page