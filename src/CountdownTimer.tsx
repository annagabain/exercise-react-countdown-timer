import { useState, useRef, useEffect } from "react";

export default function CountdownTimer() {

    const initialTimeValue = 90
    const [initialTime, setInitialTime] = useState<number>(initialTimeValue);
    // const [initialTime, setInitialTime] = useState<number | string>('');

    const [error, setError] = useState<string | null>(null);

    const [timeLeft, setTimeLeft] = useState<number>(initialTimeValue);
    const [isActive, setIsActive] = useState<boolean>(false);
    const timeRef = useRef<number | null>(null);



    useEffect(() => {

        isActive && timeLeft > 0 ? (timeRef.current = window.setInterval(() => {
            setTimeLeft((previousTimeleft) => previousTimeleft - 1)
        }, 1000)) : (timeRef.current && clearInterval(timeRef.current));


        return () => {
            if (timeRef.current !== null) {
                clearInterval(timeRef.current);
                timeRef.current = null; // Reset the ref after clearing the interval
            }
        };

    }, [isActive, timeLeft]);

    const handleInitialTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userInputValue = parseInt(event.target.value);

        if (isNaN(userInputValue) || userInputValue < 1 || userInputValue > 3600) {
            setError('Värdet måste vara mellan 1 och 3600 sekunder.')
            return;
        }
        setError(null); // Clear the error message if input is valid

        setInitialTime(userInputValue);
        if (!isActive) {
            setTimeLeft(userInputValue); // Update timeLeft immediately if not active
        }
    }

    const handleStartandPause = () => {
        // Reset the timer if it reached 0
        if (timeLeft === 0) {
            setTimeLeft(initialTime); 
        }
        setIsActive(!isActive);
    };


    const handleReset = () => {
        // Reset the timer if it reached 0
        setTimeLeft(initialTime); // Convert initialTime to number

        // stop the timer running
        setIsActive(false);
    }

    return (
        <div id="timer-frame">
            <h1>Nedräkningstimer</h1>
            <label>
                <p>Ange en anpassad starttid:</p>
                <input
                    id="user-time-input"
                    name="usersInput"
                    type="number"
                    value={initialTime}
                    min="1"
                    max="3600"
                    onChange={handleInitialTimeChange}
                    disabled={isActive}
                />
            </label>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h2>{timeLeft > 0 ? `${timeLeft} sekunder kvar` : `Tidens slut!`} </h2>
            <button onClick={handleStartandPause}>
                {/* {isActive && timeLeft > 0 ? "Pausa" : "Starta"} */}
                <i className={`fas ${isActive && timeLeft > 0 ? "fa-pause" : "fa-play"}`}></i>
       
            </button>
            {/* <button onClick={handleReset}>Återställ</button> */}
            <button onClick={handleReset}>
                <i className="fas fa-redo"></i>
            </button>

        </div>
    );

}