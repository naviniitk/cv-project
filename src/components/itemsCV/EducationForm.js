import React from 'react';
import Input from '../../utils/Input';

const EducationForm = ({
  id,
  educationItem,
  onChange,
  onDeleteEducation,
}) => {
  
  return (
    <>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="universityName"
        placeholder="University Name"
        value={educationItem.universityName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={educationItem.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationItem.degree}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationItem.subject}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={educationItem.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="datetime"
        name="to"
        placeholder="To"
        value={educationItem.to}
      />
      <button className="del-btn" onClick={onDeleteEducation(id)}>
        Delete
      </button>
    </>
  );
};

export default EducationForm;
