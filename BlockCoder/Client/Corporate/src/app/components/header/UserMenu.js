import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useRef, useState } from "react";
import OutsideClick from '../../utils/outsideClick';
import {getAuth} from 'firebase/auth'
import { getDatabase, ref, query, equalTo, get } from 'firebase/database';
const UserMenu = () => {
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
  const [userMenuStatus, setUserMenuStatus] = useState(false) ;
  const buttonRef = useRef(null);
  const buttonOutsideClick = OutsideClick(buttonRef);

  const userMenuhandle =()=>{
    setUserMenuStatus(!userMenuStatus)
  }  

  useEffect(()=>{
    if(buttonOutsideClick){
      setUserMenuStatus(false)
    }
  },[buttonOutsideClick])
  
  //console.log("userbutton", buttonOutsideClick)
  return (
    <button className="inline-flex items-center p-2 relative" onClick={userMenuhandle} ref={buttonRef}>
      <span className="sr-only">User Menu</span>
      <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
        <span className="font-semibold text-white">{email}</span>
        {/* <span className="text-sm text-gray-600 text-white">Lecturer</span> */}
      </div>
      <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
        <img
          src="https://placeholder.com"
          alt="user profile photo"
          className="h-full w-full object-cover"
        />
      </span>
       
       {userMenuStatus &&
        <div className='absolute right-0 sm:-bottom-16 bg-slate-500 px-2 py-1 space-x-2 text-yellow-50 w-full -bottom-28'>
            <a className='block hover:bg-gray-50 hover:text-black'>user Profile</a>
            <a className='block hover:bg-gray-50 hover:text-black'>user setting</a>
        </div>
       } 
      
      
      {userMenuStatus ? 
      <ChevronDownIcon className="hidden sm:block h-6 w-6 text-gray-300"/> :
      <ChevronUpIcon className="hidden sm:block h-6 w-6 text-gray-300"/>
      }
    </button>
  );
};

export default UserMenu;