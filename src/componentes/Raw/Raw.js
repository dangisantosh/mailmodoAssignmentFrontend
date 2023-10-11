import React from 'react';

const Raw = ({ data }) => {
  const jsonString = JSON.stringify(data, null, 2); // The second argument (null) is for a replacer function, and the third (2) is for pretty-printing with indentation.

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <pre>{jsonString}</pre>
    </div>
  );
};

export default Raw;
