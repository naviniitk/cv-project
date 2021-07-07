import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

const Form = ({
  cv,
  handlePersonalChange,
  handleExperienceChange,
  handleEducationChange,
  handleAddEducation,
  handleAddExperience,
  handleDeleteEducation,
  handleDeleteExperience,
  handleReset,
}) => {
  return (
    <div>
      <Personal
        personalInfo={cv.personalInfo}
        onChange={handlePersonalChange}
      />
      <Education
        educationInfo={cv.educationInfo}
        onChange={handleEducationChange}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
      />
      <Experience
        experienceInfo={cv.experienceInfo}
        onChange={handleExperienceChange}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
      />
      <button id="reset-btn" type="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Form;
