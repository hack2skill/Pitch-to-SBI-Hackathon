'use client'
import Image from "next/image";
import Link from "next/link";
import './firebase'
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import { getDatabase, ref, set } from 'firebase/database';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const db = getDatabase();

  const router = useRouter(); // Use useRouter for routing

  const handleSignInOrSignUp = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
  
      // Store the user's UID in session storage
      if (user) {
        sessionStorage.setItem('userUid', user.uid);
      }
  
      // Save user data to Realtime Database
      await saveUserDataToDatabase(user);
  
      console.log('signed in');
      router.push('/Dashboard'); // Use router.push for navigation
    } catch (signInError) {
      if (signInError.code === 'auth/user-not-found') {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
  
          // Store the user's UID in session storage
          if (user) {
            sessionStorage.setItem('userUid', user.uid);
          }
  
          // Save user data to Realtime Database
          await saveUserDataToDatabase(user);
  
          console.log('signed up');
          router.push('/Dashboard'); // Assuming you want to redirect after sign-up
        } catch (signUpError) {
          console.error('Error signing up:', signUpError.message);
        }
      } else {
        console.error('Error signing in:', signInError.message);
      }
    }
  };
  
  // Function to save user data to Realtime Database
  async function saveUserDataToDatabase(user) {
    if (user) {
      const userUid = user.uid;
      const userRef = ref(db, 'Customers/' + userUid);
  
      // Replace 'userData' with the actual data you want to save
      const userData = {
        email: user.email,
        // Add other user data fields as needed
      };
  
      // Save user data to the Realtime Database
      await set(userRef, userData);
    }
  }
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white  w-full md:w-1/2 rounded-md shadow-md flex flex-col md:flex-row">
       <div>
       <Image src="/cl3.jpg" alt="Your Image" width={350} height={400} className="hidden md:block h-full"/>
       </div>
        <div className="md:w-1/2 pt-8 md:pl-12 pl-6 pb-8 md:pr-0 pr-4 " >
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <p className="">Corporate Loan in few steps</p>
          <form className="flex flex-col space-y-4 pb-0 mt-7 ">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2" >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Placeholder Content"
                className="bg-200 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Placeholder Content"
                className="bg border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
                value={password}
          onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span className="text-sm ml-auto">Forgot Password?</span>
            <Link href="/Dashboard">
            <button
              type="submit"
              className="bg-blue-500 text-white width py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full"
              onClick={handleSignInOrSignUp}
            >
              Login
            </button>
            </Link>
            
            <div className="flex items-center">
              <div className="flex-1 border-b border-gray-300"></div>
              <span className="bg-white px-2">or</span>
              <div className="flex-1 border-b border-gray-300"></div>
            </div>
            <Link href='/Dashboard'>
            <button
              type="submit"
              className="text-black width py-2 px-4 rounded-md  transition-colors w-full border"
            >
              Register Now
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;