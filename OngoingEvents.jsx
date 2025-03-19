import React from 'react';

const OngoingEvents = () => {
    const products = [
        { id: 1, name: 'Spider Craft', start_date: '2025-03-19', end_date: '2025-03-19', organizing_comittee: 'GDG', event_type: 'Workshop' },
        { id: 2, name: 'Event 2', start_date: '2025-04-10', end_date: '2025-04-12', organizing_comittee: 'Team Beta', event_type: 'Seminar' },
        { id: 3, name: 'Event 3', start_date: '2025-05-05', end_date: '2025-05-10', organizing_comittee: 'Team Gamma', event_type: 'Hackathon' },
        { id: 5, name: 'Event 5', start_date: '2025-07-01', end_date: '2025-07-05', organizing_comittee: 'Team Epsilon', event_type: 'Conference' },
        { id: 6, name: 'Event 6', start_date: '2025-08-20', end_date: '2025-08-25', organizing_comittee: 'Team Zeta', event_type: 'Competition' }
    ];

    // Strip time from current date for comparison
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const filteredEvents = products.filter(product => {
        const eventStartDate = new Date(product.start_date);
        const eventEndDate = product.end_date ? new Date(product.end_date) : eventStartDate;

        return eventStartDate <= currentDate && currentDate <= eventEndDate;
    });

    return (
        <div>
            <div id="card-container">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((product) => (
                        <div key={product.id} id="card">
                            <div className="event"><span className="animated">{product.name}</span></div>
                            <div className="details"><b>Start Date</b> : {new Date(product.start_date).toLocaleDateString()}</div>
                            <div className="details"><b>End Date</b> : {new Date(product.end_date).toLocaleDateString()}</div>
                            <div className="details"><b>Event Type</b> : {product.event_type}</div>
                            <div className="details"><b>Event Venue</b> : {product.venue || 'Not specified'}</div>
                            <div id="outer">
                                <button id="description">Description</button>
                                <button id="register">Register Now</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-events">
                        {"No ongoing events available".split("").map((char, index) => (
                            <span
                                key={index}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                className="animated-char">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OngoingEvents;
