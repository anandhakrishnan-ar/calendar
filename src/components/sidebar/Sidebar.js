import React, { useContext } from 'react'
import AddEvent from '../modal/AddEvent'
import AppContext from '../../context/App/appContext'
const Sidebar = () => {
    const appContext = useContext(AppContext);
    const { events } = appContext
    return (
        <div className="col-lg-3">
            <button className="btn btn-primary btn-block col-md-12" data-toggle="modal" data-target="#addEventModal">Add Event</button>
            <div className="m-t-20">
                <br />
                {
                    events.length > 0 ?
                        events.map((event, index) =>
                            <div className={`external-event bg-${event.eventColour}`}> {event.title}</div>
                        ) : "No events added"

                }
            </div>
            <AddEvent />
        </div>
    )
}

export default Sidebar
