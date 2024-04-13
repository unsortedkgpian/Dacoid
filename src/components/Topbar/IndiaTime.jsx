import React, { useState, useEffect } from 'react';

function IndianTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      });
      const minutes = now.toLocaleTimeString('en-US', {
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      });
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
}

export default IndianTime;
