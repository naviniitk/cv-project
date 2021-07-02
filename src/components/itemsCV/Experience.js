import React from 'react';
import Input from '../../utils/Input';

const Experience = ({ experienceInfo, onChange }) => {
  const myStyle = {
    display: "flex",
    flexDirection: "column"
  }
  return (
    <section title="Experince" direction="column" style={myStyle}>
      Experience
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="position"
        placeholder="Position"
        value={experienceInfo.position}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="company"
        placeholder="Company"
        value={experienceInfo.company}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={experienceInfo.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={experienceInfo.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
        value={experienceInfo.to}
      />
      <button>Add Experience</button>
    </section>
  );
};

export default Experience;
