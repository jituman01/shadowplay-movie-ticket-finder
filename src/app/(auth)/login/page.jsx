'use client'
import React from 'react';
import { Button } from '@heroui/react';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const LoginPage = () => {

  const handleLogin = async (e) => {
      e.preventDefault();
      // console.log(e.currentTarget);
      
      const formData = new FormData(e.currentTarget);
      // console.log(formData);
  
      const loginData = Object.fromEntries(formData.entries())
      // console.log(loginData);
  
      const { data, error } = await authClient.signIn.email({
        ...loginData,
        callbackURL: '/'
        
      })
      
      if (error) {
        // console.log(error.message);
        
        toast.error('Login Failed')
        return;
      }
  
    }
  return (
    <div className="pt-25 min-h-screen bg-transparent text-white flex justify-center items-center px-6">
      <div className="w-full max-w-md bg-transparent p-8 rounded-2xl shadow-2xl border border-gray-800">
        {/* header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Please enter your details to sign in</p>
        </div>

        {/* form*/}
        <form
        onSubmit={handleLogin}
          className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 rounded border-gray-700 bg-gray-800"
              />
              Remember me
            </label>
            <a href="#" className="text-red-500 hover:text-red-400">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition cursor-pointer">
             Login
          </Button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google Login Button */}
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-3 border-gray-400 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
        >
          <FcGoogle size={22} />
          Sign in with Google
        </Button>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{' '}
          <a
            href="register"
            className="text-red-500 hover:text-red-400 font-semibold cursor-pointer"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
