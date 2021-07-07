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
        onChange={(e) => onChange(e, id)}
        type="text"
        name="position"
        placeholder="Position"
        value={experienceItem.position}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="company"
        placeholder="Company"
        value={experienceItem.company}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={experienceItem.city}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="date"
        name="from"
        placeholder="From:"
        value={experienceItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="date"
        name="to"
        placeholder="To:"
        value={experienceItem.to}
      />
      <button className="del-btn" onClick={(id) => onDeleteExperience(id)}>
        Delete
      </button>
    </>
  );
};

export default ExperienceForm;
