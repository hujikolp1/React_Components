import React, { useState, useEffect } from 'react';

const InfoPage = ({ axiosData }) => {
    useEffect(() => {
        console.log("SetUp Render")
    }, []);

    return(
        <div>
            <p>
                This is only shown when loading is done
            </p>
            <p>
                Random User: {axiosData}
            </p>
        </div>
    )
    
}

export default InfoPage; 