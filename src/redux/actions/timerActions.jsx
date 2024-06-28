// src/redux/actions/timerActions.js

import { START_TIMER, PAUSE_TIMER, RESET_TIMER, SET_TIMER } from '../types';

export const startTimer = () => {
    return { type: START_TIMER };
};

export const pauseTimer = () => {
    return { type: PAUSE_TIMER };
};

export const resetTimer = () => {
    return { type: RESET_TIMER };
};

export const setTimer = (duration) => {
    return { type: SET_TIMER, payload: duration };
};
