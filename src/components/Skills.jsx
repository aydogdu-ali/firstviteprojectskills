import React from 'react'
import Skill from './Skill';

const Skills = ({ skills, handleClick, fetchSkills }) => {
  return (
    <div className="skillsMainPage">
      <div>
        <h2 className='skillTitle'>Yeteneklerim</h2>
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
              <Skill key={skill.id} skill={skill} handleClick={handleClick} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Skills