import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Skills from "./components/Skills";
import Loading from "./components/Loading";

function App() {
  // stateler
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  //veri ekleme fonksiyonu
  const createSkill = async (title, content) => {
    const response = await axios.post("http://localhost:3000/skills", {
      title,
      content,
    });
    const createdSkill = [...skills, response.data];
    
    setSkills(createdSkill);
  };

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
  const deleteSkill = async (id) => {
    await axios.delete(`http://localhost:3000/skills/${id}`);
    const deleteskill = skills.filter((skill) => skill.id != id);
    setSkills(deleteskill);
  };

  //! Update (PUT:Whole Update,PATCH :Partially Update)

  return (
    <div>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            {skills.length === 0 ? (
              <div className="yineleme">
                <h3>Hiç Yetenekler Kalmadı</h3>
                <button className="yinelemeBtn" onClick={() => fetchSkills()}>
                  Tekrar Göster
                </button>
              </div>
            ) : (
              <Skills
                skills={skills}
                deleteSkill={deleteSkill}
                fetchSkills={fetchSkills}
                createSkill={createSkill}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
