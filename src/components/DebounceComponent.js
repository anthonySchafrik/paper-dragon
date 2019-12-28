import React from 'react';

const DebounceComponent = ({ name, type, handleChange, placeholder }) => {
  const handleDebounce = event => {
    const { value } = event.target;

    if (value.length > 2) setTimeout(handleChange(value), 900);
  };

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleDebounce}
    />
  );
};

export default DebounceComponent;
