import React from 'react';

const DebounceComponent = ({
  name = '',
  type = '',
  handleChange,
  placeholder = '',
  maxLength = 10,
  minChar = 3
}) => {
  const handleDebounce = event => {
    const { value } = event.target;
    console.log(minChar);
    if (value.length >= minChar) setTimeout(handleChange(name, value), 900);
  };
  console.log({ name, type, handleChange, placeholder, maxLength, minChar });
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={handleDebounce}
    />
  );
};

export default DebounceComponent;
