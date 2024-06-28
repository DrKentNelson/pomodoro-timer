/*
* Import Order:
* 1. External Libraries
* 2. Local Modules or Components
* 3. Styles or CSS
* 4. Resources (images, etc.)
* 5. Types (TypeScript)
* 6. Configuration or Environment Variables
*/

import React from 'react';

/**
* Application Button Component.
* 
*/
const Button = ({
    text,
    type,
    classStyle,
    onClick }) => {
    return (
        <button className={`btn ${type} ${classStyle}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
