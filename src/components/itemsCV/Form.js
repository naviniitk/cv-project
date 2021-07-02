import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';


const Form = ({
  cv,
  handlePersonalChange,
  handleExperienceChange,
  handleEducationChange,
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
      />
      <Experience
        experienceInfo={cv.experienceInfo}
        onChange={handleExperienceChange}
      />
    </div>
  );
};

export default Form;
