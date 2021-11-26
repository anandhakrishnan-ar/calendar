import React, { useState } from 'react'
import EventForm from './EventForm'

const AddEvent = () => {
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
            setEventColour(e.target.value) : setEventColour("")
    };
    const [eventName, setEventName] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventColour, setEventColour] = useState("");
    const colours = ["primary", "danger"];
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
            />
        </div>
    )
}

export default AddEvent
