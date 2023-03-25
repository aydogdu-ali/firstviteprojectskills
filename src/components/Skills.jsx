import React from 'react'
import Skill from './Skill';

const Skills = ({ skills }) => {
  console.log(skills);
  return (
    <div>
    {skills?.map((skill,id)=>{
        return <Skill/>
    })}  
    </div>
  );
};

export default Skills