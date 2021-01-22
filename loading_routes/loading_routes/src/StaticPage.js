import React, { useState, useEffect } from 'react';

const StaticPage = ({  }) => {
    useEffect(() => {
        console.log("SetUp Static Assets")
    }, []);

    return(
        <div>
            <p>
            This is STATIC 
            </p>
        </div>
    )
    
}

export default StaticPage; 