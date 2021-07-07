import React from 'react';

const ExperienceItem = ({ experienceItem }) => {
  return (
    <div>
      <h4>{experienceItem.position}</h4>
      <div>
        {experienceItem.from} - {experienceItem.to}
      </div>
      <p>
        {experienceItem.company}, {experienceItem.city}
      </p>
    </div>
  );
};

export default ExperienceItem;
