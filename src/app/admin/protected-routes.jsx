"use client"

import useAuth from '@/hooks/useAuth';
import PageLoading from './page-loading';
import LoginForm from '@/components/auth/login-form';
import Header  from '@/components/admin-dashbaord/header'; 

const ProtectedRoute = ({ children }) => {
    const {user ,loading} = useAuth()
   
 
   if (loading) {
    return <PageLoading/>
  }

  if (user) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }
    return <LoginForm/>
       
    };

export default ProtectedRoute;
