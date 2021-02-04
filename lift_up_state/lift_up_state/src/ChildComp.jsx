import React, {Fragment} from 'react';

const ChildComp = (props) => {
    return(
        <Fragment>
            <h2>Child</h2>
            <button onClick={props.handlerFunc}>Lift Up Data</button>
        </Fragment>
    )
}

export default ChildComp; 