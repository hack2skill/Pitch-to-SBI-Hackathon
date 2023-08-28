// src/components/Login.js
'use client'
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import '../firebase';
import './style.css';
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
    <Container maxWidth="xs" style={{ marginTop: '20vh' }}>
      <Typography variant="h5" align="center" gutterBottom className="title">
        Login to your Corporate Loan Dashboard
      </Typography>
      <form>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignInOrSignUp}
        >
          Sign In / Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Login;
