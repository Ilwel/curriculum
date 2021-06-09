import './App.css';
import BusinessCard from './components/BusinessCard';
import ilwel from './personalData';

function App() {
  return (
    <div className="app">
      <BusinessCard {...ilwel}/>

    </div>
  );
}

export default App;
