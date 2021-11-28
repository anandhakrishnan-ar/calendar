import React, { useReducer } from 'react';
import AppReducer from './appReducer';
import AppContext from './appContext';
import { ADD_EVENT, GET_EVENTS } from '../types';
import { useLocalStorage } from '../../hooks/storage'

const AppState = props => {
    const initialState = {
        events: [],
        colours: ["Primary", "Success", "Danger", "Info", "Warning"],
        selectedEvent: {}
    }
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [item, setEvent] = useLocalStorage('events');
    const addEvent = event => {
        let userEvents = [...state.events];
        userEvents.push(event);
        setEvent(userEvents);
        dispatch({
            type: ADD_EVENT,
            payload: userEvents
        })
    }
    const getEvents = () => {
        if (item) {
            dispatch({
                type: GET_EVENTS,
                payload: item
            })
        }
    }
    return (
        <AppContext.Provider
            value={{
                events: state.events,
                colours: state.colours,
                selectedEvent: state.selectedEvent,
                addEvent,
                getEvents
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
