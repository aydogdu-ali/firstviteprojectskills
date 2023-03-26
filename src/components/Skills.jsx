import React, { useState } from "react";
import AdUpdate from "./AdUpdate ";
import Skill from "./Skill";


const Skills = ({
  skills,
  deleteSkill,
  fetchSkills,
  editClick,
  createSkill,
}) => {
  
  // modalın açılması için state tanımladım. 
const [open, setOpen] = useState(false)

  




  return (
    <div>
      <div className="skillsMainPage">
        <div>
          <h2 className="skillTitle">Yeteneklerim</h2>
          <button
            className="addBtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=>setOpen(true)}
          >
            Ekle
          </button>
        </div>

        {skills.lenght === 0 ? (
          <div>
            <p>Hiç Yetenekler Kalmadı</p>
            <button onClick={fetchSkills}>Tekrar Göster</button>
          </div>
        ) : (
          <div className="skill">
            {skills?.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  skill={skill}
                  skills={skills}
                  deleteSkill={deleteSkill}
                  editClick={editClick}
                  createSkill={createSkill}
                />
              );
            })}
          </div>
        )}
      </div>
      <div>
        { setOpen &&
          <AdUpdate
                     createSkill={createSkill}
                     setOpen={setOpen}
           
         
          />
        }
      </div>
    </div>
  );
};


export default Skills;
