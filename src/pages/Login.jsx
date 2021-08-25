// import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleLogout,
  } = useAuth();

  return (
    <div className='bg-blue-900 h-screen w-screen'>
      <div className='flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0'>
        <div
          className='flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-blue-500 sm:mx-0'
          style={{ height: "500px" }}
        >
          <div className='flex flex-col w-full md:w-1/2 p-4'>
            <div className='flex flex-col flex-1 justify-center mb-8'>
              <h3 className='text-4xl text-center font-thin text-gray-600'>
                Welcome
              </h3>
              <div className='w-full mt-4'>
                <section
                  className='form-horizontal w-3/4 mx-auto'
                  method='POST'
                >
                  <div className='flex flex-col mt-4'>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id='email'
                      type='text'
                      className='bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700'
                      name='email'
                      defaultValue
                      placeholder='Email'
                    />
                  </div>
                  <p>{emailError}</p>
                  <div className='flex flex-col mt-4'>
                    <input
                      id='password'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700'
                      name='password'
                      required
                      placeholder='Password'
                    />
                  </div>
                  <p>{passwordError}</p>
                  <div className='flex flex-col mt-8'>
                    {hasAccount ? (
                      <>
                        <button
                          className='bg-gray-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded'
                          onClick={handleLogIn}
                        >
                          Sign in
                        </button>
                        <p>
                          Don't have an account ?
                          <span
                            className='hover:text-blue-700 text-white text-sm'
                            onClick={() => setHasAccount(!hasAccount)}
                          >
                            Sign up
                          </span>
                        </p>
                      </>
                    ) : (
                      <>
                        <button
                          className='bg-gray-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded'
                          onClick={handleSignup}
                        >
                          Sign up
                        </button>
                        <p>
                          Have an account ?
                          <span
                            className='hover:text-blue-700 text-white text-sm'
                            onClick={() => setHasAccount(!hasAccount)}
                          >
                            Sign in
                          </span>
                        </p>
                        <p>
                          <Link to='/resetpass'>
                            <span className='hover:text-blue-700 text-white text-sm'>
                              Forgot your password?
                            </span>
                          </Link>
                        </p>
                      </>
                    )}
                  </div>
                </section>
                {/* <div className='text-center mt-4'>
                  <a
                    className='no-underline hover:underline text-blue-dark text-xs'
                    href="{{ route('password.request') }}"
                  >
                    Forgot Your Password?
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className='hidden md:block md:w-1/2 rounded-r-lg'
            style={{
              background:
                "url(https://i.ytimg.com/vi/9fqA3iiCyHM/maxresdefault.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
