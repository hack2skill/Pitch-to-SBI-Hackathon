'use client'
import { useState } from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import Layout from '../components/Layout'
import '../firebase'
import {getAuth} from 'firebase/auth'
import { getDatabase, ref, query, equalTo, get } from 'firebase/database';

export default function Dash() {
  const auth=getAuth();
    const db = getDatabase();
    const uid=sessionStorage.getItem('userUid');
    console.log(uid)
    const usersRef = ref(db, 'Customers');

   const userRef = ref(db, 'Customers/' + uid);
    const [email,setEmail]=useState('User')

   get(userRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      // The snapshot contains user data
      const userData = snapshot.val();
      setEmail(userData.email)
      console.log('User email:', userData.email);
    } else {
      console.log('User not found.');
    }
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  });
  return (
    <Layout title='Home Layout'>
        <Dashboard />
    </Layout>
  )
}