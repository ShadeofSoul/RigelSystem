import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ForgotPass = () => {
  const { resetPass } = useAuth();
  const [mess, setMess] = useState("");
  const handleInp = (e) => {
    setMess(e.target.value);
  };
  return (
    <div className='font-mono bg-blue-400'>
      {/* Container */}
      <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen px-6'>
          {/* Row */}
          <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
            {/* Col */}
            <div
              className='w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg'
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/originals/7f/2c/11/7f2c1169fb3939b3694ce65aae7942c5.jpg")',
              }}
            />
            {/* Col */}
            <div className='w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none'>
              <div className='px-8 mb-4 text-center'>
                <h3 className='pt-4 mb-2 text-2xl'>Forgot Your Password?</h3>
                <p className='mb-4 text-sm text-gray-700'>
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              </div>
              <form className='px-8 pt-6 pb-8 mb-4 bg-white rounded'>
                <div className='mb-4'>
                  <label
                    className='block mb-2 text-sm font-bold text-gray-700'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='w-full px-3 py-2 text-sm leading-tight text-blue-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Enter Email Address...'
                    onChange={(e) => handleInp(e)}
                  />
                </div>
                <div className='mb-6 text-center'>
                  <button
                    onClick={() => resetPass(mess)}
                    className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline'
                    type='button'
                  >
                    Reset Password
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <Link
                    to='/login'
                    className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                    href='./register.html'
                  >
                    Create an Account!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
