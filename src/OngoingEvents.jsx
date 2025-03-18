import React from 'react';

const OngoingEvents = () => {
    const data = [
        { id: 1, name: 'Spider Craft', date: '2025-03-20', organizing_comittee: 'GDG', event_type: 'Workshop' },
        { id: 2, name: 'Event 2', date: '2025-04-10', organizing_comittee: 'Team Beta', event_type: 'Seminar' },
        { id: 3, name: 'Event 3', date: '2025-05-05', organizing_comittee: 'Team Gamma', event_type: 'Hackathon' },
        { id: 4, name: 'Event 4', date: '2025-06-15', organizing_comittee: 'Team Delta', event_type: 'Webinar' },
        { id: 5, name: 'Event 5', date: '2025-07-01', organizing_comittee: 'Team Epsilon', event_type: 'Conference' },
        { id: 6, name: 'Event 6', date: '2025-08-20', organizing_comittee: 'Team Zeta', event_type: 'Competition' }
    ];

    return (
        <div>
            <div id="card-container">
                {data.map((current) => {
                    const { id, name, date, organizing_comittee, event_type } = current;

                    return (
                        <div key={id} id="card">
                            <div className="event"><span className = "animated">{name}</span></div>
                            <div className="details"><b>Date</b> : {date}</div>
                            <div className="details"><b>Organizing Comittee</b> : {organizing_comittee}</div>
                            <div className="details"><b>Event Type</b> : {event_type}</div>
                            <div id="outer">
                                <button id="description">Description</button>
                                <button id="register">Register Now</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OngoingEvents;
