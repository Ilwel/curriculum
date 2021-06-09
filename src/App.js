import './App.css';
import BusinessCard from './components/BusinessCard';
import ProjectsField from './components/ProjectsField';
import ilwel from './personalData';

function App() {
  return (
    <div className="app">
      <BusinessCard {...ilwel}/>
      <ProjectsField/>

    </div>
  );
}

export default App;
