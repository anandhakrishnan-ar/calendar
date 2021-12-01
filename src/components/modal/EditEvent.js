import React, { useState, useContext, useEffect } from 'react'
import EventForm from './EventForm'
import AppContext from '../../context/App/appContext';
import moment from 'moment';
const EditEvent = () => {
    const appContext = useContext(AppContext);
    const { editSelectedEvent, events, colours, selectedEvent,getEvents } = appContext;
    const [eventName, setEventName] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventColour, setEventColour] = useState("");
    useEffect(() => {
        if (Object.keys(selectedEvent).length > 0) {
            setEventColour(selectedEvent.eventColour);
            setEventName(selectedEvent.title);
            setCheckbox(selectedEvent.isAllDayEvent);
            let start = '';
            let end = '';
            start = `${moment(selectedEvent.start).format()}`;
            end = `${moment(selectedEvent.end).format()}`;
            setStartDate(new Date(start));
            setEndDate(new Date(end));
        }
    }, [selectedEvent, events])
    const colourObj = {
        primary: "#0275d8",
        success: "#5cb85c",
        danger: "#d9534f",
        info: "#5bc0de",
        warning: "#f0ad4e"
    }
    const eventChanged = e => {
        setEventName(e.target.value);
    };
    const checkboxChanged = e => {
        setCheckbox(e.target.checked)
    };
    const startDateChanged = e => {
        setStartDate(e);
    };
    const endDateChanged = e => {
        setEndDate(e);
    };
    const selectChange = e => {
        e.target.value !== "select colour" ?
            setEventColour(e.target.value) : setEventColour("");
    };
    const editEvent = () => {
        const event = setEvent(selectedEvent.id);
        editSelectedEvent(event);
    }
    const onClose = () => {

    }

    const setEvent = id => {
        let start = '';
        let end = '';
        start = `${moment(startDate).format()}`;
        end = `${moment(endDate).format()}`;
        // if (!checkbox) {
        //     start = `${moment(startDate).format()}`;
        //     end = `${moment(endDate).format()}`;
        // }
        // else {
        //     start = `${moment(startDate).format('YYYY-MM-DD')}`;
        //     end = `${moment(endDate).format('YYYY-MM-DD')}`;
        // }
        const event = {
            id,
            title: eventName,
            start,
            end,
            isAllDayEvent: checkbox,
            eventColour,
            backgroundColor: colourObj[eventColour]
        };
        return event;
    }


    
    return (
        <>
            <EventForm
                modalId="editEventModal"
                modalName="Edit Event"
                eventName={eventName}
                eventChanged={eventChanged}
                isAllDayCheckbox={checkbox}
                checkboxChanged={checkboxChanged}
                startDate={startDate}
                startDateChanged={startDateChanged}
                endDate={endDate}
                endDateChanged={endDateChanged}
                selectChange={selectChange}
                eventColour={eventColour}
                colours={colours}
                onClose={onClose}
                createEvent={editEvent}
            />
        </>
    )
}

export default EditEvent
