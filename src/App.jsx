import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skills from './components/Skills';

function App() {
  const [skills, setSkills] = useState([])
 

  const fetchSkills =async()=>{
    const {data} = await axios.get('http://localhost:3000/skills')
    // debugger;
    setSkills(data);
    
  }
  useEffect(()=>{
    fetchSkills()

  }, [])

  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App
