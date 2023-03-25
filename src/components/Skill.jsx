import React from 'react'


const Skill = ({ skill, handleClick }) => {
  const { id, title, content, price } = skill;
  return (
    <div>
      <div className="card">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price}</h4>
      </div>
      <button className="deleteBtn" onClick={() => handleClick(id)}>
        Sil
      </button>
    </div>
  );
};

export default Skill