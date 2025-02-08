import React from 'react'
import { useAuth } from "@/context/AuthContext";
import GoogleSignOut from './auth/GoogleSigInOut';
function Side() {
  const { user } = useAuth();

  return (
    <div className='border-2 border-black w-1/6 h-svh p-2' >

            <h1 className='text-blue-800 font-bold' >{user?.displayName}</h1>
            <p>{user?.uid}</p>
            <GoogleSignOut/>
    </div>
  )
}

export default Side