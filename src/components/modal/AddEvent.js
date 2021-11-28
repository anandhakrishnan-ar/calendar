import React, { useState, useContext } from 'react'
import EventForm from './EventForm'
import AppContext from '../../context/App/appContext';
import moment from 'moment';
const AddEvent = () => {
    const appContext = useContext(AppContext);
    const { addEvent, events, colours } = appContext;
    const colourObj={
        primary:"#0275d8",
        success:"#5cb85c",
        danger:"#d9534f",
        info:"#5bc0de",
        warning:"#f0ad4e"
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
    const reset = () => {
        setEventName("");
        setEventColour("");
        setCheckbox(false);
        setStartDate(new Date());
        setEndDate(new Date());
    }
    const onClose = () => {
        reset();
    }
    const createEvent=()=>{
        const event=setEvent(events.length+1);
        addEvent(event);
        reset();
    }
    const setEvent=id=>{
        let start='';
        let end='';
        if(!checkbox){
            start=`${moment(startDate).format()}`;
            end=`${moment(endDate).format()}`;
        }
        else{
            start=`${moment(startDate).format('YYYY-MM-DD')}`;
            end=`${moment(endDate).format('YYYY-MM-DD')}`;
        }
        const event={
            id,
            title:eventName,
            start,
            end,
            isAllDayEvent:checkbox,
            eventColour,
            backgroundColor:colourObj[eventColour]
        };
        return event;
    }
    

    const [eventName, setEventName] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventColour, setEventColour] = useState("");  
    return (
        <div>
            <EventForm
                modalId="addEventModal"
                modalName="Add Event"
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
                createEvent={createEvent}
            />
        </div>
    )
}

export default AddEvent
