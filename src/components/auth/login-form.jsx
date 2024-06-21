"use client"
import { signinWithEmailPassword } from '@/auth/auth';
import React from 'react';

const LoginForm = () => {


  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signinWithEmailPassword(email, password); 
      console.log("successfully signed in");
    } catch (error) {
      console.error('Sign in error:', error); 
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">

        <div className="bg-white  w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">

          <div className="w-full  border border-2  pb-12 rounded-xl  px-12 h-100">
 

            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 mb-8">Log in to your account</h1>
              <form onSubmit={handleSignIn}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
                 </div>

              

              <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
            </form>

           
        

      

            <p className="text-sm text-gray-500 mt-12">&copy; 2024 Estivasoftech.com - All Rights Reserved.</p>
          </div>
        </div>

      </section>
    </>
  );
}

export default LoginForm;
