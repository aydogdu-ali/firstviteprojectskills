import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skills from './components/Skills';
import Loading from './components/Loading';

function App() {
  const [skills, setSkills] = useState([])
  const [loading ,setLoading]= useState(false)
 

  const fetchSkills =async()=>{
    setLoading(true)
    try {
       const { data } = await axios.get("http://localhost:3000/skills");
       // debugger;
       setSkills(data);
       setLoading(false)
    } catch (error) {
      setLoading(true)
    }
   
    
  }
  useEffect(()=>{
    fetchSkills()

  }, [])

  return (
    <div className="App">
      {loading ? (<Loading/>):(<Skills skills={skills} />)}
      
    </div>
  );
}

export default App
