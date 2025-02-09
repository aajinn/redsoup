import { createProject } from '@/lib/project';
import React, { useState, useEffect } from 'react'
import { useAuth } from "@/context/AuthContext";

function NewProjectForm() {
  const { user } = useAuth();

  const [projectName, setProjectName] = useState('');
  const [userId, setUserId] = useState('');
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    if (user?.uid) {
      setUserId(user.uid);
      setNotes([]);
    }
  }, [user]);

  function handleProjectCreation() {
    const project = {
      projectName,
      userId,
      notes
    }
    createProject(project);
  }

  return (
    <div>
      <h1>New Project</h1>
      <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder='project name..' />
     <button onClick={handleProjectCreation} >Create</button>
    </div>
  )
}

export default NewProjectForm
