import { START_TIMER, PAUSE_TIMER, RESET_TIMER, SET_TIMER } from '../types';

const initialState = {
    timerRunning: false,
    timerPaused: false,
    timerDuration: 25 * 60,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                ...state,
                timerRunning: true,
                timerPaused: false,
            };
        case PAUSE_TIMER:
            return {
                ...state,
                timerRunning: false,
                timerPaused: true,
            };
        case RESET_TIMER:
            return {
                ...state,
                timerRunning: false,
                timerPaused: false,
            };
        case SET_TIMER:
            return {
                ...state,
                timerDuration: action.payload,
            };
        default:
            return state;
    }
};

export default timerReducer;
