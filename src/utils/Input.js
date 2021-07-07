import React from 'react';

const Input = ({ type, name, placeholder, onChange, value }) => {
  const myStyle = {
    fontFamily: 'Georgia, Times New Roman, Times, serif',
    border: 'none',
    borderRadius: '4px',
    fontSize: '15px',
    margin: '0',
    outline: '0',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '30px',
  };

  return (
    <input
      style={myStyle}
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
