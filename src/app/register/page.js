'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import img from '../assets/login.png'
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess('Registration successful! You can now log in.');
      setError('');
      // Redirect to login after registration success
      router.push('/login');
    } else {
      setError(data.error);
      setSuccess('');
    }
  };

  return (
    <div className="flex h-screen p-0 md:p-10 bg-secondary rounded-sm">
      {/* Left Section */}
      <div className="flex-1 bg-primary hidden md:flex flex-col justify-center items-center">
        <Image src={img} alt="Bird illustration" width={300} height={300} />
        <h2 className="text-2xl font-semibold text-center mt-5 text-white">
          Healthcare Management
        </h2>
        <p className="text-center mt-2 text-white w-80" >
          An advanced Electronic Healthcare System designed to streamline patient care
        </p>
      </div>

      {/* Right Section */}
      <div onSubmit={handleRegister} className="flex-1 bg-white flex flex-col items-center px-5">
        <h1 className="text-3xl font-semibold my-5 mb-10">Healthcare</h1>
        <h2 className="text-xl text-gray-600 mb-10">Welcome to Healthcare Management</h2>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input
              className="appearance-none w-full px-0 py-1 text-gray-700 leading-tight focus:outline-none shadow-none border-b-2"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="appearance-none w-full px-0 py-1 text-gray-700 leading-tight focus:outline-none shadow-none border-b-2"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none w-full px-0 py-1 text-gray-700 leading-tight focus:outline-none shadow-none border-b-2"
              id="password"
              type="password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              className="appearance-none w-full px-0 py-1 text-gray-700 leading-tight focus:outline-none shadow-none border-b-2"
              id="confirmpassword"
              type="password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Role</label>
            <div className='flex w-full'>
            <div className="flex items-center mb-2 mr-5">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2"
                required
              />
              <label htmlFor="admin" className="text-sm">Admin</label>
            </div>

            <div className="flex items-center mb-2 mr-5">
              <input
                type="radio"
                id="doctor"
                name="role"
                value="doctor"
                checked={role === "doctor"}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2"
                required
              />
              <label htmlFor="doctor" className="text-sm">Doctor</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="patient"
                name="role"
                value="patient"
                checked={role === "patient"}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2"
                required
              />
              <label htmlFor="patient" className="text-sm">Patient</label>
            </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-10 focus:outline-none focus:shadow-outline rounded-3xl"
              type="button"
            >
              Register
            </button>

          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="mt-4">
          <span className="text-gray-500">Have Account? </span>
          <Link href="/login" className="text-green-500 hover:underline underline-custom">Login</Link>
        </div>
      </div>
    </div>
  );
}
