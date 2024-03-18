import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const timer:any = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
        if (seconds === 0) {
            // Timer has reached 0 seconds, perform any actions here
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>Timer: {seconds} seconds</h1>
        </div>
    );
};

export default TimerComponent;