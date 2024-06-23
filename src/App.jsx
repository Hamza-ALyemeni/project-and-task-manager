import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import AddNewProject from "./components/addNewProject.jsx";
import ProjectSideBar from "./components/projectSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState,setProjectsState] = useState({
    projecSelectedId: undefined,
    projects : []
});

function handleSelectProject(id) {
  setProjectsState(prevState => {
    return {
      ...prevState,
      projecSelectedId: id,
    };
  });
}

function handleStartAddProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      projecSelectedId: null,
    };
  });
}

function handleCancelAddProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      projecSelectedId: undefined,
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

const selectedProject = projectsState.projects.find((project) => project.id === projectsState.projecSelectedId);

let content = <SelectedProject project={selectedProject}/>;

if (projectsState.projecSelectedId === null) {
  content = <AddNewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
} else if (projectsState.projecSelectedId === undefined) {
  content = <NoProjectSelected onStartAddProjects={handleStartAddProject}/>
}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
      onStartAddProjects={handleStartAddProject}
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
