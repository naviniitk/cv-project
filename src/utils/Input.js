import React from 'react';

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
