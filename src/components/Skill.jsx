import React from "react";
import Update from "./Update";

const Skill = ({ skill, skills, deleteSkill, editClick }) => {
  console.log(skill);
const {id, title,content} = skill
  const handleSubmit = (id, newTitle, newContent) => {
    editSkill(id, newTitle, newContent);
    setTitle("");
    setContent("");
  };

  return (
    <div key={skill.id}>
      <div className="card">
        <div>
          <h2 className="cardTitle">{title}</h2>
        </div>
        <p className="cardContent">{content}</p>
        <div className="btn">
          <button className="deleteBtn" onClick={()=>deleteSkill(id)}>
            Sil
          </button>
          <button
            className="updateBtn"
            onClick={handleSubmit}
            data-bs-toggle="modal"
            data-bs-target="#edit-modal"
          >
            Güncelle
          </button>{" "}
        </div>
      </div>

      <Update
        skill={skill}
        skills={skills}
        editClick={editClick}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Skill;
