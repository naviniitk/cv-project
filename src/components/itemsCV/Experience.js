import React from 'react';
import ExperienceForm from './ExperienceForm';

const Experience = ({
  experienceInfo,
  onChange,
  onAddExperience,
  onDeleteExperience,
}) => {
  const experienceItems = experienceInfo.map((experienceItem) => (
    <ExperienceForm
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDeleteExperience={onDeleteExperience}
    ></ExperienceForm>
  ));

  const myStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  return (
    <section style={myStyle}>
      <h1>Experience</h1>
      {experienceItems}
      <button className="add-btn" onClick={onAddExperience}>
        Add Experience
      </button>
    </section>
  );
};

export default Experience;
