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

import { CgDarkMode } from "react-icons/cg";
import styles from "./Header.module.scss";

/**
* Application Header Component.
* 
*/
const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                PomodoroTimer _
            </div>
            <div className={styles.darkmode - container}>
                <button className={styles.darkmode - button}>
                    {/* <CgDarkMode /> {isDarkMode ? 'Light Mode' : 'Dark Mode'} */}
                </button>
            </div>
        </header>
    );
};

export default Header;
