import React from 'react';
import { Button } from 'semantic-ui-react';

const Back = props => {
  const handleClick = () => {
    console.log(props);
  };
  return (
    <div>
      <Button onClick={handleClick} className='clg'>
        Back
      </Button>
    </div>
  );
};

export default Back;
