import React from 'react';
import Input from '../../utils/Input';

const Education = ({educationinfo, onChange}) => {
  return (
    <section title='Education' direction='column'>
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='unverityName'
        placeholder='University Name'
        value={educationinfo.universityName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='city'
        placeholder='City'
        value={educationinfo.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='degree'
        placeholder='Degree'
        value={educationinfo.degree}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='subject'
        placeholder='Subject'
        value={educationinfo.subject}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='from'
        placeholder='From'
        value={educationinfo.from}
      />
    </section>
  );
};

export default Education;
