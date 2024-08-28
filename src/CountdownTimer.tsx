import { useState, useRef, useEffect } from "react";

export default function CountdownTimer() {
    console.log("hello from count donw timer!");

    const [timeLeft, setTimeLeft] = useState<number>(5);
    const [isActive, setIsActive] = useState<boolean>(false);

  const timeRef  = useRef<number>(null);

    useEffect(() => {
        console.log('hello from use effect');
        isActive ? ( console.log('active')):( console.log('not active'));

}, [isActive]);

    return (
        <div>
              <h1>Nedräkningstimer</h1>

              <h2>{timeLeft} sekunder kvar</h2>
            {/* <p>Is active:  {isActive}</p> */}
            <button onClick={() => [setIsActive(!isActive), setTimeLeft(timeLeft => timeLeft - 1)] }>
                {isActive ? "Pausa" : "Starta"}
            </button>
            <button onClick={() => console.log('resume')}>Återställ</button>


        </div>
    );


}