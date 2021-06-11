import './App.css';
import BusinessCard from './components/BusinessCard';
import ProjectsField from './components/ProjectsField';
import ExperienceField from './components/ExperienceField';
import ilwel from './personalData';

function App() {
  return (
    <div className="app">
      
      <BusinessCard {...ilwel}/>
      <ProjectsField/>
      <ExperienceField/>

    </div>
  );
}

export default App;
