import React, { useState, useEffect } from 'react'
import Image from 'next/image';

import { useAuth } from "@/context/AuthContext";
import GoogleSignOut from '../auth/GoogleSigInOut';
import { listProjects } from '@/lib/project';

function Side() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Array<{ projectName: string }>>([]);

  useEffect(() => {
    if (user?.uid) {
      listProjects(user.uid).then((value) => {
        setProjects(value);
      });
    }
  }, [user]);

  return (
    <div className='border-2 border-black w-1/6 h-svh p-2' >

          <div className='flex space-x-3'>
          {user?.photoURL && (
              <Image  className="rounded-full" src={user.photoURL} width={40} height={40} alt="User avatar" />
            )}
            <h1 className='text-blue-800 font-bold grid place-content-center' >{user?.displayName}</h1>
            </div>  
            <p>{user?.uid}</p>
          
            <h1 className='font-extrabold' >- Projects</h1>
            {projects.map((project, index) => (
              <p key={index} className='text-gray-700 hover:text-blue-500'>
                {project.projectName}
              </p>
            ))}
            <GoogleSignOut/>
    </div>
  )
}

export default Side