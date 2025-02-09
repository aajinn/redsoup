import { doc, setDoc, addDoc, collection, getDocs } from "firebase/firestore"
import { fireStore } from "./firebase"


export const createProject = (project) => {
    // Use addDoc to automatically generate a projectId
    addDoc(collection(fireStore, 'projects'), project).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export const deleteProject = () =>{

}

export const editProject = (projectId, newName) => {
    // Use setDoc to update the project name
    setDoc(doc(fireStore, 'projects', projectId), { name: newName }, { merge: true })
        .then(() => {
            console.log("Project updated successfully");
        })
        .catch((error) => {
            console.error("Error updating project: ", error);
        });
}

// Function to list all projects of the current user
export const listProjects = async (userId) => {
    const projectsCollection = collection(fireStore, 'projects');
    const querySnapshot = await getDocs(projectsCollection);
    const userProjects = [];

    querySnapshot.forEach((doc) => {
        const projectData = doc.data();
        if (projectData.userId === userId) { // Assuming each project has a userId field
            userProjects.push({ id: doc.id, ...projectData });
        }
    });

    return userProjects;
}       