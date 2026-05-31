'use client'
import React from 'react';
import { Button } from '@heroui/react';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();


  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    
    const formData = new FormData(e.currentTarget);
    // console.log(formData);

    const registerData = Object.fromEntries(formData.entries())
    // console.log(registerData);

    const { data, error } = await authClient.signUp.email({
      ...registerData,
      
    })
    
    if (error) {
      console.log(error.message);
      
      toast.error('Registration Failed')
      return;
    }


    router.push('/')


  }
    

  return (
    <div className="pt-23 min-h-screen bg-transparent text-white flex justify-center items-center px-6">
      <div className="w-full max-w-md bg-transparent px-8 py-5 rounded-2xl shadow-2xl border border-gray-800">
        {/* header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400">Join us to start booking tickets</p>
        </div>

        {/* form */}
        <form
          onSubmit={handleRegister}
        
          className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="John Doe"
              name="name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="example@mail.com"
              name="email"
            />
          </div>

          {/* Image URL Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Profile Image URL</label>
            <input
              type="url"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="https://example.com/photo.jpg"
              name="image"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="••••••••"
              name="password"
            />
          </div>

          <Button
         type="submit"
         className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition cursor-pointer">
            Register
          </Button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google Register Button */}
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-3 border-gray-400 hover:bg-gray-800 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
        >
          <FcGoogle size={22} />
          Register with Google
        </Button>

        <p className="text-center text-gray-400 text-sm mt-2">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-red-500 hover:text-red-400 font-semibold cursor-pointer"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;