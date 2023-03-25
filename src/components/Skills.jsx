import React from 'react'
import Skill from './Skill';

const Skills = ({ skills, handleClick }) => {
  return (
    <div>
      <div>
        <h3>Yeteneklerim</h3>
      </div>
      <div>
        {skills?.map((skill) => {
          return (
            <Skill key={skill.id} skill={skill} handleClick={handleClick} />
          );
        })}
      </div>
    </div>
  );
};

export default Skills