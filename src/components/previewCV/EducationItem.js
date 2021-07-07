import React from 'react';

const EducationItem = ({ educationItem }) => {
  return (
    <div>
      <h4>{educationItem.universityName}</h4>
      <div>
        {educationItem.from} - {educationItem.to}
      </div>
      <div>
        <section>
          <p>Degree: {educationItem.degree}</p>
          <p>Subject: {educationItem.subject}</p>
        </section>
      </div>
    </div>
  );
};

export default EducationItem;
