import React from 'react';
import Input from '../../utils/Input';

const ExperienceForm = ({
  id,
  experienceItem,
  onChange,
  onDeleteExperience,
}) => {
  
  return (
    <>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="position"
        placeholder="Position"
        value={experienceItem.position}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="company"
        placeholder="Company"
        value={experienceItem.company}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={experienceItem.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={experienceItem.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
        value={experienceItem.to}
      />
      <button className="del-btn" onClick={onDeleteExperience(id)}>
        Delete
      </button>
    </>
  );
};

export default ExperienceForm;
