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
* Application Input Component.
* 
*/
const Input = ({
    type,
    placeholder,
    onChange }) => {
    return (
        <input
            className="input-field"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
