import React, { useEffect, useState } from 'react';

const Timer = ({ onFinish }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timer);
        onFinish(); // Call the onFinish function when the timer is done
      }
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [seconds, onFinish]);

  return <div>{seconds} seconds remaining</div>;
};

export default Timer;
