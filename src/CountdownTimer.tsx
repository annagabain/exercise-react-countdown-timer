import { useState, useRef, useEffect } from "react";

export default function CountdownTimer () {
    console.log("hello from count donw timer!");

    const  [timeLeft, setTimeLeft]= useState<number>(0)
const  [isActive, setIsActive]= useState<boolean>(false)

    return (
        <div>
          {/* TSX to be rendered */}

           <p>Time left: {timeLeft}</p> 
           <p>Is active:  {isActive}</p> 
           <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Pause" : "Start"}
      </button>

           
        </div>
      );
    

}