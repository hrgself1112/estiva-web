"use client"
  
import React from 'react'
import Admindashboard from './admin-dashboard' 
import ProtectedRoute from './protected-routes'



const Page = () => {
 return(

<ProtectedRoute>
  
   <Admindashboard />
</ProtectedRoute>
  )
}
 

export default Page


