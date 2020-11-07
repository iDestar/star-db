import React from 'react';

import './error-indicator.css'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">Boom!</span>
            <span>
                somthing gone wrong
            </span>
            <span>
                but it will ok soon
            </span>
        </div>
    );
};

export default ErrorIndicator