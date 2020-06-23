import React from 'react';

export default ({ value, handleSearch }) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
};
