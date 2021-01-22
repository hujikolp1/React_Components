import React, { useState, useEffect } from 'react';

const InfoPage = ({  }) => {
    useEffect(() => {
        console.log("SetUp Render")
    }, []);

    return(
        <div>
            <p>
            This is only shown when loading is done
            </p>
        </div>
    )
    
}

export default InfoPage; 