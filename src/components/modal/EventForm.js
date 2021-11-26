import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const EventForm = props => {
    const { modalId,
        modalName,
        eventName,
        eventChanged,
        isAllDayCheckbox,
        checkboxChanged,
        startDate,
        startDateChanged,
        endDate,
        endDateChanged,
        selectChange,
        eventColour,
        colours } = props
    return (
        <div>
            <div className="modal" id={modalId} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modalName}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-3">
                            <form>

                                <div className="form-group">
                                    <label className="control-label">Event Name</label>
                                    <input className="form-control form-white" type="text" value={eventName} onChange={eventChanged} />
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" checked={isAllDayCheckbox} onChange={checkboxChanged} />
                                    <label className="control-label">All day event</label>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">From</label>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            {
                                                !isAllDayCheckbox ?
                                                    <DatePicker className="form-control" selected={startDate} onChange={startDateChanged} showTimeSelect timeFormat="p" timeIntervals={30} dateFormat="Pp" />
                                                    :
                                                    <DatePicker className="form-control" selected={startDate} onChange={startDateChanged} dateFormat="Pp" />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">To</label>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            {
                                                !isAllDayCheckbox ?
                                                    <DatePicker className="form-control" selected={endDate} onChange={endDateChanged} showTimeSelect timeFormat="p" timeIntervals={30} dateFormat="Pp" />
                                                    :
                                                    <DatePicker className="form-control" selected={endDate} onChange={endDateChanged} dateFormat="Pp" />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Choose Event Colour</label>
                                    <select className="form-control form-white" onChange={selectChange} value={eventColour}>
                                        <option value="select colour">Select Colour</option>
                                        {
                                            colours.map(colour => <option value={colour} key={colour}>{colour}</option>)
                                        }

                                    </select>
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventForm
