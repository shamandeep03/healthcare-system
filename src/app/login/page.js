'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import img from '../assets/login.png'
import Image from 'next/image';
import Link from 'next/link';
import CustomToast from '../hooks/customToast';
import Loading from '../components/svgs/Loading';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fetching, setFetching] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setFetching(true)
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      document.cookie = `auth-token=${data.token}; path=/`;
      
      // Redirect based on role
      if (data.user.role === 'admin') {
        router.push('/dashboard/admin');
      } else if (data.user.role === 'doctor') {
        router.push('/dashboard/doctor');
      } else {
        router.push('/dashboard/patient');
      }
      setFetching(false)
      CustomToast({type:'success',message:'Login Successfully!'})
    } else {
      setFetching(false)
      CustomToast({type:'error',message: data.error})
    }
  };

  return (
    <div className="flex h-screen p-10 md:p-28 bg-secondary rounded-sm">
    {/* Left Section */}
    <div className="flex-1 bg-primary hidden md:flex flex-col justify-center items-center">
      <Image src={img} alt="Bird illustration" width={300} height={300} />
      <h2 className="text-2xl font-semibold text-center mt-6 text-white">
             Healthcare Management
      </h2>
      <p className="text-center mt-2 text-white w-80" >
      An advanced Electronic Healthcare System designed to streamline patient care
      </p>
    </div>

    {/* Right Section */}
    <div className="flex-1 bg-white flex flex-col items-center px-8">
      <h1 className="text-3xl font-semibold my-10 mb-16">Healthcare</h1>
      <h2 className="text-xl text-gray-600 mb-10">Welcome to Healthcare Management</h2>
      
      <form className="w-full max-w-sm" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="appearance-none w-full px-0 py-1 text-gray-700 leading-tight focus:outline-none shadow-none border-b-2"
            id="username"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none w-full px-0 py-1 text-gray-700 leading-tight focus:outline-none shadow-none border-b-2"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800 text-end w-full"  href="#">
            Forgot password?
        </a>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-800 hover:bg-gray-700 h-10 max-w-[150px] text-white font-bold py-2 px-10 focus:outline-none focus:shadow-outline rounded-3xl"
            type="submit"
          >
            {fetching ? <Loading color={'#fff'} height={20} width={20} /> : 'Sign In'}
          </button>
         
        </div>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-4">
        <span className="text-gray-500">New User? </span>
        <Link href="/register" className="text-green-500 hover:underline underline-custom">Create Account</Link>
      </div>
    </div>
    </div>
  );
}
