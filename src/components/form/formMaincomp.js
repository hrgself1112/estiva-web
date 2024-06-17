/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from "next/link";


import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import Button from "../buttonMain/buttonfill";

const formvalues = {
  name: "",
  phoneNumber: "",
  email: "",
  subject: "",
  message: "",
};


const formdata = { values: formvalues, isLoading: false };
const Form = () => {

  const router = useRouter();

  const [state, setState] = useState(formdata);
  const { values, isLoading } = state;


  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      (values.name = ""),
        (values.phoneNumber = ""),
        (values.email = ""),
        (values.subject = ""),
        (values.message = ""),
        setState((prev) => ({
          ...prev,

          isLoading: false,
          error: error.message,
        }));
    }
    router.push("Thank-you");
  };

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  return (
    <>
      <form action="" method="post" >
        <div className="lg:max-w-lg mx-auto ">
          {/* Card */}
          <div className="p-4 sm:p-7 flex flex-col bg-transparent rounded-2xl shadow-lg  ">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">
                We're excited to create something amazing!
              </h1>
              <p className="mt-2 text-sm ">
                We're here into 24 hours only for you.
              </p>
            </div>
            <div className="mt-5">
              <div className="grid grid-cols-1 gap-4">
                {/* Input Group */}
                <div>
                  {/* Floating Input */}
                  <div className="relative">
                    <input

                      type="text" name="name" value={values.name} onChange={handleChange} required
                      className="peer p-4 block w-full  bg-transparent placeholder:text-transparent border-b border-gray-800 focus-within:outline-none   disabled:opacity-50 disabled:pointer-events-none
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-9
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                      placeholder="********"
                    />
                    <label className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                     Name
                    </label>
                  </div>
                </div>

                <div>
                <div className="relative">
                    <input

                      type="text" name="email" value={values.email} onChange={handleChange} required
                      className="peer p-4 block w-full bg-transparent placeholder:text-transparent border-b border-gray-800 focus-within:outline-none   disabled:opacity-50 disabled:pointer-events-none
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-9
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                      placeholder="********"
                    />
                    <label className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                     Email
                    </label>
                  </div>

                </div>

                <div>

                <div className="relative">
                    <input

                      type="number" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} required
                      className="peer p-4 block w-full spin-icon-none  bg-transparent placeholder:text-transparent border-b border-gray-800 focus-within:outline-none   disabled:opacity-50 disabled:pointer-events-none
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-9
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                      placeholder="********"
                    />
                    <label className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                     Phone Number
                    </label>
                  </div>
                </div>

                <div>
                <div className="relative">
                    <input

                      type="text" name="subject"  value={values.subject} onChange={handleChange} required
                      className="peer p-4 block w-full  bg-transparent placeholder:text-transparent border-b border-gray-800 focus-within:outline-none   disabled:opacity-50 disabled:pointer-events-none
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-9
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                      placeholder="********"
                    />
                    <label className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                     Requirement
                    </label>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="relative">
  <textarea id="hs-floating-textarea" type="text" name="message"  value={values.message} onChange={handleChange} required  className="peer p-4 block w-full border-b border-gray-800 focus-within:outline-none  bg-transparent  text-sm placeholder:text-transparent  disabled:opacity-50 disabled:pointer-events-none
  focus:pt-6
  focus:pb-2
  [&:not(:placeholder-shown)]:pt-9
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
     <label for="hs-floating-textarea" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                     Your message
                    </label>
</div>

                </div>


<Link href='' aria-label="submit" onClick={onSubmit}>

                  <Button> Send message</Button>
</Link>


              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
