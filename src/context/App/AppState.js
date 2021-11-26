import React, { useReducer } from 'react';
import AppReducer from './appReducer';
import AppContext from './appContext';
import { ADD_EVENT } from '../types';

const AppState = props => {
    const initialState = {
        events: [],
        colours: ["Primary", "Success", "Danger", "Info", "Warning"],
        selectedEvent: {}
    }
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const addEvent = event => {
        let userEvents = [...state.events];
        userEvents.push(event);
        dispatch({
            type: ADD_EVENT,
            payload: userEvents
        })
    }
    return (
        <AppContext.Provider
            value={{
                events: state.events,
                colours: state.colours,
                selectedEvent: state.selectedEvent,
                addEvent
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
