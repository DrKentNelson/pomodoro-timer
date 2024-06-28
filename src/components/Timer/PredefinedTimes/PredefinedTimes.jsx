/*
* Import Order:
* 1. External Libraries
* 2. Local Modules or Components
* 3. Styles or CSS
* 4. Resources (images, etc.)
* 5. Types (TypeScript)
* 6. Configuration or Environment Variables
*/

import React, { useState, useEffect } from 'react';

import styles from "./PredefinedTimes.module.css";

/**
* Application PredefinedTimes Component.
* 
*/
const PredefinedTimes = () => {

    const predefinedTimes = ['10:00', '15:00', '20:00', '25:00'];
    const isDarkMode = true;

    return (
        <ul className={styles.preTimes} >
            {predefinedTimes.map((time, index) => (
                <li key={index} className={styles.preTime}>
                    <button className={`${styles.preTimeButton} ${isDarkMode ? styles.preTimeButtonDarkMode : ''}`} onClick={() => selectDefinedTime(time)}>
                        {time}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default PredefinedTimes;
