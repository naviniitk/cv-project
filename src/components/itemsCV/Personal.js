import React from 'react';
import Input from '../../utils/Input';

const Personal = ({ personalInfo, onChange }) => {
  return (
    <section title='Personal Information' direction='column'>
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='firstName'
        placeholder='First Name'
        value={personalInfo.firstName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='lastName'
        placeholder='Last Name'
        value={personalInfo.lastName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='address'
        placeholder='Address'
        value={personalInfo.address}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='email'
        placeholder='Email'
        value={personalInfo.email}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='phoneNumber'
        placeholder='Phone Number'
        value={personalInfo.phoneNumber}
      />
    </section>
  );
};

export default Personal;