import React, { useState } from 'react'
import './stopwatch.css'

const StopWatch = () => {

    const [time, setTime] = useState({hr: 0, min: 0 , sec: 0,milli: 0})
    const [status, setStatus] =useState()

    let  updateHr= time.hr;
    let  updateMin= time.min;
    let  updateSec= time.sec;
    let  updatemilli= time.milli;
    
    const start =()=>{
        myfunc();
        console.log("Start")
        setStatus(setInterval(myfunc, 10))
    }

    const stop = () =>{
        clearInterval(status);
    }

    const reset = () => {
        clearInterval(status);
        setTime({hr: 0, min: 0 , sec: 0,milli: 0})
    }

    const myfunc = () =>{
        if(updatemilli === 100){
            updatemilli=0;
            updateSec++;
        }
        if(updateSec === 60){
            updateSec = 0;
            updateMin++;
        }
        if(updateMin === 60){
            updateMin = 0;
            updateHr++
        }
        updatemilli++;
        return setTime({hr: updateHr, min: updateMin , sec: updateSec,milli: updatemilli})
    }

  return (
    <>
        <div className='container'>
            <h1>StopWatch</h1>
            <h3>{time.hr+ " : "+time.min+" : "+time.sec +" : "+time.milli}</h3>
            <div className='buttons'>
                <button className='start' onClick={start}>Start</button>
                <button className='stop' onClick={stop}>Stop</button>
                <button className='reset' onClick={reset}>Reset</button>
            </div>
        </div>
    </>
  )
}

export default StopWatch