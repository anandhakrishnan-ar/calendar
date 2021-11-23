import React from 'react'

const Sidebar = () => {
    return (
        <div className="col-lg-3">
            <button className="btn btn-primary btn-block col-md-12">Add Event</button>
            <div className="m-t-20">
                <br/>
                <div className="external-event bg-success">
                    Call friends
                </div>
                <div className="external-event bg-danger">
                    Watch movie
                </div>
                <div className="external-event bg-warning">
                    Go hiking
                </div>
            </div>
        </div>
    )
}

export default Sidebar
