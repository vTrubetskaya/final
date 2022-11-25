import { useEffect, useState } from "react";

export  const TImer = ({date}) => {
    const [finishTime] = useState(date.getTime());
    const [[days, hrs, min, sec], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);

    useEffect(()=> {
      const count = (finishTime - new Date()) / 1000;
      if (count < 0) return // время вышло
      setDiff([
        Math.floor(count / 86400), // дни
        Math.floor((count / 3600) % 24), 
        Math.floor((count / 60) % 60), 
        Math.floor(count % 60)
      ]) 
    }, [tick, finishTime])
        
    useEffect(()=>{
      const timerID = setInterval(() => setTick(!tick), 1000);
      return () => clearInterval(timerID);
    }, [tick])

    return ( 
        <div className="timer">
            <h1 className="timer__title">Days till Christmas</h1>
            <div className="timer__items">
                <div className="timer__item"><span className="timer__number">{days}</span> <span>days</span> </div>
                <div className="timer__item"><span className="timer__number">{hrs.toString().padStart(2, '0')}</span> <span>hrs</span></div>
                <div className="timer__item"><span className="timer__number">{min.toString().padStart(2, '0')}</span> <span>min</span></div>
                <div className="timer__item"><span className="timer__number">{sec.toString().padStart(2, '0')}</span> <span>sec</span></div>
            </div>
                   
        </div>
      
    )
  }
