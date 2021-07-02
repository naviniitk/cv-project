import React from 'react';
import Input from '../../utils/Input';

const Education = ({ educationInfo, onChange }) => {
  const myStyle = {
    display: "flex",
    flexDirection: "column"
  }
  return (
    <section title="Education" direction="column" style={myStyle}>
      Education
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="universityName"
        placeholder="University Name"
        value={educationInfo.universityName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={educationInfo.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationInfo.degree}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationInfo.subject}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={educationInfo.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
        value={educationInfo.to}
      />
      <button>Add Education</button>
    </section>
  );
};

export default Education;
