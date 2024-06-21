import React from 'react'
import { Editor } from '@/components/page-builder/page-builder'
import ProtectedRoute from '../protected-routes'

const Page = () => {
  return (
    <>  
    <ProtectedRoute>
     <Editor/>
    </ProtectedRoute>
    </>
  )
}

export default Page