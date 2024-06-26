import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import AddNewProject from "./components/addNewProject.jsx";
import ProjectSideBar from "./components/projectSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState,setProjectsState] = useState({
    projecSelectedId: undefined,
    projects : [],
    tasks:[]
});

function handleAddTask(text) {
  setProjectsState(prevState => {
    const taskId = Math.random();
    const newTask = {
      text:text,
      pojectId:prevState.projecSelectedId,
      id: taskId
    }

    return {
      ...prevState,
      tasks: [...prevState.tasks, newTask],
    };
  });

}

function handleDeleteTask(id) {
  setProjectsState(prevState => {
    return {
      ...prevState,
      tasks: prevState.tasks.filter((task)=>task.id !== id),
    };
  });
}

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

function handleDeleteProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      projecSelectedId: undefined,
      projects: prevState.projects.filter((project)=>project.id != prevState.projecSelectedId),
    };
  });
}

const selectedProject = projectsState.projects.find((project) => project.id === projectsState.projecSelectedId);

let content = <SelectedProject 
project={selectedProject} 
onDelete={handleDeleteProject} 
onAddTask={handleAddTask} 
onDeleteTask={handleDeleteTask}
tasks={projectsState.tasks}
/>;

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
