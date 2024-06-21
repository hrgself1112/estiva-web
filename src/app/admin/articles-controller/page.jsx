import React from 'react' 

import ProtectedRoute from '../protected-routes'
import Table from '@/components/table/table'

const Page = () => {
  return (
    <>  
    <ProtectedRoute>
         <Table/>
    </ProtectedRoute>
    </>
  )
}

export default Page