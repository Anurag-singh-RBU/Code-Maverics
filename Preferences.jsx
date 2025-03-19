import React, { useState, useEffect } from "react";
import { Search, ArrowLeft, Sun, Moon } from "lucide-react";
import data from '../data.json'; // ✅ Correct import path
import './Preferences.css';

export default function Preferences() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "#112A3E" : "white";
    }, [darkMode]);

    const today = new Date();

    const upcomingEvents = data.filter(event => {
        const eventStartDate = new Date(event.start_date);
        return eventStartDate >= today;
    });

    const handleNotifyClick = () => {
        window.location.href = "/notification";  // ✅ Simple navigation
    };

    return (
        <>
            <div className="navigate">
                <ArrowLeft 
                    className="back-btn" 
                    size={24} 
                    onClick={() => (window.location.href = "/")}
                />

                <div className="search-bar">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search The Category"
                        className="search-input"
                    />
                </div>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="toggle-btn"
                >
                    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>

            <div id="event-container">
                {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((product) => (
                        <div key={product.id} className="event-card">
                            <div className="event-title">
                                <span className="animated">{product.name}</span>
                            </div>
                            <div className="event-details">
                                <b>Start Date</b>: {product.start_date.split('-').reverse().join('-')}
                            </div>
                            <div className="event-details">
                                <b>End Date</b>: {product.end_date.split('-').reverse().join('-')}
                            </div>
                            <div className="event-details">
                                <b>Event Type</b>: {product.event_type}
                            </div>
                            <div className="event-details">
                                <b>Event Venue</b>: {product.venue || 'Not specified'}
                            </div>
                            <div className="event-actions">
                                <button 
                                    className="btn-description"
                                    onClick={handleNotifyClick}
                                >
                                    Notify
                                </button>
                                <button className="btn-register">Register Now</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-events">
                        { "No upcoming events available".split("").map((char, index) => (
                            <span 
                                key={index} 
                                style={{ animationDelay: `${index * 0.1}s` }}
                                className="animated-char"
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
