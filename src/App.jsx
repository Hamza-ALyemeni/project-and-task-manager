import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import AddNewProject from "./components/addNewProject.jsx";
import ProjectSideBar from "./components/projectSideBar.jsx";

function App() {
  const [projectsState,setProjectsState] = useState({
    projecSelectedId: undefined,
    projects : []
});

function handleStartAddProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      projecSelectedId: null,
    };
  });
}

function handleAddProject(projectData) {
  setProjectsState(prevState => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId
    }

    return {
      ...prevState,
      projecSelectedId: undefined,
      projects: [...prevState.projects, newProject],
    };
  });

}

let content;

if (projectsState.projecSelectedId === null) {
  content = <AddNewProject onAdd={handleAddProject}/>
} else if (projectsState.projecSelectedId === undefined) {
  content = <NoProjectSelected onStartAddProjects={handleStartAddProject}/>
}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
      onStartAddProjects={handleStartAddProject}
      projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
