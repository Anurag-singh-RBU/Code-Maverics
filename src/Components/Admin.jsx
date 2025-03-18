import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
    const [formData , setFormData] = useState({
        eventName: '',
        eventType: '',
        eventVenue: '',
        eventTime: '',
        eventDate: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        for (const field in formData) {
            if (!formData[field].trim()) {
                newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            alert('Event Added Successfully !');
            console.log('Submitted Data:', formData);
        }
    };

    return (
        <>

        <h1 id = "Admin">Add&nbsp;&nbsp; New &nbsp;&nbsp;Event</h1>
        <div className="form-container">
            <form className="event-form" onSubmit={handleSubmit}>
                <label>Event Name</label>
                <input
                    type="text"
                    name="eventName"
                    placeholder="Enter Event Name"
                    value={formData.eventName}
                    onChange={handleChange}/>
                {errors.eventName && <p className="error">{errors.eventName}</p>}

                <label>Event Type</label>
                <input
                    type="text"
                    name="eventType"
                    placeholder="Enter Event Type"
                    value={formData.eventType}
                    onChange={handleChange}/>
                {errors.eventType && <p className="error">{errors.eventType}</p>}

                <label>Event Venue</label>
                <input
                    type="text"
                    name="eventVenue"
                    placeholder="Enter Event Venue"
                    value={formData.eventVenue}
                    onChange={handleChange}/>
                {errors.eventVenue && <p className="error">{errors.eventVenue}</p>}

                <label>Event Time</label>
                <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}/>
                {errors.eventTime && <p className="error">{errors.eventTime}</p>}

                <label>Event Date</label>
                <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}/>
                {errors.eventDate && <p className="error">{errors.eventDate}</p>}

                <label>Description</label>
                <textarea
                    name="description"
                    placeholder="Enter Event Description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}/>
                {errors.description && <p className="error">{errors.description}</p>}

                <button type="submit" className="add-btn">Add</button>
            </form>
        </div>
        </>
    );
};

export default Admin;
