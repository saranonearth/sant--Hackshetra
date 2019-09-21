import React from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
const Back = props => {
  console.log(props);
  const handleClick = () => {
    props.history.goBack();
  };
  return (
    <div>
      <Button onClick={handleClick} className='clg'>
        Back
      </Button>
    </div>
  );
};

export default withRouter(Back);
