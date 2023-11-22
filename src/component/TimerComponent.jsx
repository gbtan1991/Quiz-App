import { useState, useEffect } from 'react'
import timerConfiguration from '../db/timerConfiguration.json';

const TimerComponent = () => {
    const initialTime = timerConfiguration.timerDuration;
    const [timer, setTimer] = useState(timerConfiguration.timerDuration);
    const [displayTime, setDisplayTime] = useState(formatTime(timer));
    const [barWidth, setBarWidth] = useState('100%');

    useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimer(prevTime => {
          if (prevTime <= 0) {
            // Timer has reached 0, you can add quiz submission logic here
            alert("Time's up! Quiz submitted.");
            // Stop the timer or redirect to the quiz submission page
            clearInterval(timerInterval);
            return 0;
          }
          setDisplayTime(formatTime(prevTime - 1));
          const newBarWidth = `${(prevTime / initialTime) * 100}%`;
          setBarWidth(newBarWidth);
          return prevTime - 1;
        });
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(timerInterval);
    }, [initialTime]); // Empty dependency array to ensure useEffect runs only once
  
    
//Formatting Time with MM:SS
function formatTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0"); 
    return `${formattedMinutes}:${formattedSeconds}`

    

}




    return (
    <div>
      
      <div className='p-10'>
      <div className='w-screen h-[35px] bg-transparent rounded-full border-2 absolute border-gray-700'></div>
      <div className='w-screen h-[31px] bg-gradient-to-r rounded-full from-accent1 to-accent2 absolute' style={{ width: barWidth}}></div>
      <div clsssName='w-full h-6 text-center indez'>{displayTime}</div>
      </div>
      
    </div>
  )
}

export default TimerComponent
