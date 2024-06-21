"use client" 

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  
import { auth } from '@/auth/firebase';

const useAuth = () => {
    
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  
 
  const router = useRouter();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false); 
      if (!user) {
        router.replace('/admin');  
      }
    });

    return () => unsubscribe();
  }, [router]);

  return {user , loading};
};

export default useAuth;
