import React, { useState } from "react";
import "./Notification.css";
import addNotification from 'react-push-notification';

export default function Notification() {
    const [dateTime , setDateTime] = useState("");

    const handleOnClick = () => {
        const selectedTime = new Date(dateTime).getTime();
        const currentTime = new Date().getTime();
        const delay = selectedTime - currentTime;
        alert('Notification Added Successfully !!');

        if (delay > 0) {
            setTimeout(() => {
                addNotification({
                    title: 'SpiderCraft',
                    message: 'Visit the college',
                    duration: 4000,
                    native: true,
                });
            }, delay);
        } else {
            alert("Please select a future date and time.");
        }
    };

    return (
        <div>
            <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}/>
            <button onClick={handleOnClick}>Click</button>
        </div>
    );
}