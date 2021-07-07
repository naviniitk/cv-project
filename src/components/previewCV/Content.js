import React from 'react';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';

const Content = ({ personalInfo, experienceInfo, educationInfo }) => {
  const experienceItems = experienceInfo.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = educationInfo.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <div>
      <h1>
        {personalInfo.firstName} {personalInfo.lastName}
      </h1>
      <h2>{personalInfo.email}</h2>
      <h2>{personalInfo.phoneNumber}</h2>
      <p>{personalInfo.address}</p>
      <hr></hr>
      <section>
        <h3>Experience</h3>
        {experienceItems}
      </section>
      <hr></hr>
      <section>
        <h3>Education</h3>
        {educationItems}
      </section>
    </div>
  );
};

export default Content;
