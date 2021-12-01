import React, { useReducer } from 'react';
import AppReducer from './appReducer';
import AppContext from './appContext';
import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT, GET_EVENTS, SELECT_EVENT } from '../types';
import { useLocalStorage } from '../../hooks/storage'

const AppState = props => {
    const initialState = {
        events: [],
        colours: ["Primary", "Success", "Danger", "Info", "Warning"],
        selectedEvent: {}
    }
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [item, setEvent] = useLocalStorage('events');
    const [selectedItem, setSelectedEvent] = useLocalStorage('selectedevent');
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
    const selectEvent = (event) => {
        setSelectedEvent(event);
        dispatch({
            type: SELECT_EVENT,
            payload: event
        })
    }
    const editSelectedEvent = event => {
        const newEvents = item.map(e => {
            return e.id === event.id ? event : e;
        });
        setEvent(newEvents);
        dispatch({
            type: EDIT_EVENT,
            payload: newEvents
        })
    }
    const deleteSelectedEvent = (event) => {
        const newEventsArray = item.filter(e => e.id !== event.id)
        setEvent(newEventsArray);
        dispatch({
            type: DELETE_EVENT,
            payload: newEventsArray
        })
    }
    return (
        <AppContext.Provider
            value={{
                events: state.events,
                colours: state.colours,
                selectedEvent: state.selectedEvent,
                addEvent,
                getEvents,
                selectEvent,
                editSelectedEvent,
                deleteSelectedEvent
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
