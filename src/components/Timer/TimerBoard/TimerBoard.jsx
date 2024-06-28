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

import { CgPlayPause, CgPlayButton, CgRedo } from "react-icons/cg";
import styles from "./TimerBoard.module.css";
import countdownSound from "../../../assets/countdown.mp3";

/**
* Application TimerBoard Component.
* 
*/
const TimerBoard = () => {

    const [minutes, setMinutes] = useState('25');
    const [seconds, setSeconds] = useState('00');
    const [isRunning, setIsRunning] = useState(false);
    const [timerId, setTimerId] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleMinutesChange = (event) => {
        const { value } = event.target;
        if (/^\d{0,2}$/.test(value) && value <= 59) {
            // setMinutes(value.padStart(2, '0'));
            setMinutes(value);
        }
    }

    const handleSecondsChange = (event) => {
        const { value } = event.target;
        if (/^\d{0,2}$/.test(value) && value <= 59) {
            // setSeconds(value.padStart(2, '0'));
            setSeconds(value);
        }
    }

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    }

    const handleReset = () => {
        setIsRunning(false);
        setMinutes('25');
        setSeconds('00');
        clearInterval(timerId);
    }

    const selectDefinedTime = (newTime) => {
        const [newMinutes, newSeconds] = newTime.split(':');
        setMinutes(newMinutes);
        setSeconds(newSeconds);
    }

    const playSound = () => {
        const audio = new Audio(countdownSound);

        audio.play();
    }

    useEffect(() => {
        if (isRunning) {
            const intervalId = setInterval(() => {
                if (parseInt(seconds) === 0) {
                    if (parseInt(minutes) === 0) {
                        handleReset();
                        return
                    } else {
                        setMinutes((prevMinutes) => (parseInt(prevMinutes) - 1).toString().padStart(2, '0'));
                        setSeconds('59');
                    }
                } else {
                    setSeconds((prevSeconds) => {
                        if (parseInt(prevSeconds) === 6) {
                            playSound();
                        }
                        return (parseInt(prevSeconds) - 1).toString().padStart(2, '0');
                    });
                }
            }, 1000);

            return () => {
                clearInterval(intervalId);
            }
        }
    }, [isRunning, minutes, seconds])

    useEffect(() => {
        document.title = "PomodoroTimer " + (isRunning ? "Running" : "");
        document.body.classList.toggle(styles.darkMode, isDarkMode);
    }, [isRunning, isDarkMode])

    return (
        <div className={`${styles.timer} ${isDarkMode ? styles.timerDarkMode : ''}`}>
            <input
                type="text"
                className={styles.timeInput}
                value={minutes}
                onChange={handleMinutesChange}
                readOnly={isRunning}
            />
            <div className={styles.colon}>:</div>
            <input
                type="text"
                className={styles.timeInput}
                value={seconds}
                onChange={handleSecondsChange}
                readOnly={isRunning}
            />
            <div className={styles.controls}>
                <button className={styles.startStopButton} onClick={handleStartStop}>
                    {isRunning ? <CgPlayPause /> : <CgPlayButton />}
                </button>
                <button className={styles.resetButton} onClick={handleReset} disabled={isRunning}>
                    <CgRedo />
                </button>
            </div>
        </div>
    );
};

export default TimerBoard;
