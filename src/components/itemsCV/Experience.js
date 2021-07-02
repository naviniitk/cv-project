import React from 'react';
import Input from '../../utils/Input';

const Experience = ({experienceInfo, onChange}) => {
  return (
    <section title='Experince' direction='column'>
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='position'
        placeholder='Position'
        value={experienceInfo.position}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='company'
        placeholder='Company'
        value={experienceInfo.company}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='city'
        placeholder='City'
        value={experienceInfo.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='from'
        placeholder='From'
        value={experienceInfo.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='to'
        placeholder='To'
        value={experienceInfo.to}
      />
    </section>
  );
};

export default Experience;
