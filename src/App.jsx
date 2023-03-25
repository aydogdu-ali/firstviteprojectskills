import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Skills from "./components/Skills";
import Loading from "./components/Loading";

function App() {
  // stateler
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  // veri çekme fonksiyonu
  const fetchSkills = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/skills");
      // debugger;
      setSkills(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchSkills();
  }, []);

  // veri silme fonksiyonu
  const handleClick = (id) => {
    console.log(id);
    console.log("tıklandı");
    const updateskill = skills.filter((skill) => skill.id != id);
    console.log(updateskill);
    setSkills(updateskill);
  };

    
  

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {skills.length === 0 ? (
            <div className="yineleme">
              <h3>Hiç Yetenekler Kalmadı</h3>
              <button className="yinelemeBtn" onClick={() => fetchSkills()}>Tekrar Göster</button>
            </div>
          ) : (
            <Skills
              skills={skills}
              handleClick={handleClick}
              fetchSkills={fetchSkills}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
