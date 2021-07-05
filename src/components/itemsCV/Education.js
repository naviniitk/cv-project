import React from 'react';
import EducationForm from './EducationForm';

const Education = ({
  educationInfo,
  onChange,
  onAddEducation,
  onDeleteEducation,
}) => {
  const educationItems = educationInfo.map((educationItem) => (
    <EducationForm
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDeleteEducation={onDeleteEducation}
    ></EducationForm>
  ));

  const myStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  return (
    <section style={myStyle}>
      <h1>Education</h1>
      {educationItems}
      <button className="add-btn" onClick={onAddEducation}>
        Add Education
      </button>
    </section>
  );
};

export default Education;
