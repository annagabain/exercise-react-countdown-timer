import { useState, useRef, useEffect } from "react";

export default function CountdownTimer() {
    // console.log("hello from count down timer!");

    const initialTime = 90

    const [timeLeft, setTimeLeft] = useState<number>(initialTime);
    const [isActive, setIsActive] = useState<boolean>(false);

    const timeRef = useRef<number | null>(null);

    useEffect(() => {
        // console.log('hello from use effect');


        isActive && timeLeft > 0 ? (  timeRef.current = window.setInterval(() => {
            setTimeLeft((previousTimeleft) => previousTimeleft - 1)
        }, 1000)):( timeRef.current && clearInterval(timeRef.current));


        // if (isActive) {
        //     timeRef.current = window.setInterval(() => {
        //         setTimeLeft((previousTimeleft) => previousTimeleft - 1)
        //     }, 1000);
        // } else {
        //     // Clear the interval if the timer is paused or if timeLeft reaches zero
        //     if (timeRef.current) {
        //         clearInterval(timeRef.current);
        //     }
        // }

        return () => {
            if (timeRef.current !== null) {
                clearInterval(timeRef.current);
                timeRef.current = null; // Reset the ref after clearing the interval
            }
        };

    }, [isActive, timeLeft]);

    const handleReset = () => {
        setTimeLeft(initialTime);
        setIsActive(false);
    }

    return (
        <div>
            <h1>Nedräkningstimer</h1>

            <h2>{timeLeft} sekunder kvar</h2>
            <button onClick={() => setIsActive(!isActive)}>
                {isActive && timeLeft > 0 ? "Pausa" : "Starta"}
            </button>
            <button onClick={handleReset}>Återställ</button>


        </div>
    );


}