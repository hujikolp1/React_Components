import React, {Fragment} from 'react';

const AddFunctionalEvent = (props) => {
    const keyDownHandler = (event) => {
      console.log('Down Handler', event.keyCode);
    };
  
    React.useEffect(() => {
      window.addEventListener('keydown', keyDownHandler);
      return () => {
        window.removeEventListener('keydown', keyDownHandler);
      };
    }, []);
  
    return (
      <Fragment className='key_down_container'>
        <p>key down container</p>
      </Fragment>
    );
  };

  export default AddFunctionalEvent; 