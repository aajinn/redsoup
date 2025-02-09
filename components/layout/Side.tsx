import React, { useState } from 'react'
import { useAuth } from "@/context/AuthContext";
import GoogleSignOut from '../auth/GoogleSigInOut';
import { listProjects } from '@/lib/project';

function Side() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
 listProjects(user?.uid).then((value)=>{
 setProjects(value)

  })
  return (
    <div className='border-2 border-black w-1/6 h-svh p-2' >

            <h1 className='text-blue-800 font-bold' >{user?.displayName}</h1>
            <p>{user?.uid}</p>

            <h1>projects</h1>
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