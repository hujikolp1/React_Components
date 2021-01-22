import React, { useState, useEffect } from 'react';

const StaticPage = ({  }) => {
    useEffect(() => {
        console.log("SetUp Static Assets")
    }, []);

    return(
        <div>
            <p>
            Waiting for component dependencies to load
            </p>
        </div>
    )
    
}

export default StaticPage; 