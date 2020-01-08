import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const DebounceComponent = ({
  name = '',
  type = '',
  handleChange,
  placeholder = '',
  maxLength = 10,
  minChar = 3,
  timeout = 400
}) => {
  const handleDebounce = event => {
    const { value } = event.target;

    handleChange(name, value);
  };

  return (
    <DebounceInput
      name={name}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={handleDebounce}
      debounceTimeout={timeout}
    />
  );
};

export default DebounceComponent;
